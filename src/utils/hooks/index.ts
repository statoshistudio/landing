import {Dispatch, MutableRefObject, useRef, useState} from 'react';
import {isFunction} from '@app/utils/fn';

export type StateCallback<T> = (prev: T) => T;
export const useReferredState = <T>(
  initialValue: T
): [T, MutableRefObject<T>, Dispatch<T | StateCallback<T>>] => {
  const [state, setState] = useState<T>(initialValue);
  const reference = useRef<T>(state);

  const setReferredState = (value: T | ((prev: T) => T)) => {
    if (isFunction(value)) {
      setState((prev) => {
        const data = (value as StateCallback<T>)(prev);

        reference.current = data;
        return data;
      });

      return;
    }

    setState(value);
    reference.current = value as T;
  };

  return [state, reference, setReferredState];
};
