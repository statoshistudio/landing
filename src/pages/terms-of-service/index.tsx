import Head from 'next/head';
import {Footer, Header} from '@app/components';
import React, {useEffect, useRef, useState} from 'react';
import gsap from 'gsap';
import {useMediaQuery} from 'react-responsive';

const TermsOfServicePage = () => {
  const [isMounted, setMounted] = useState(false);
  const homeRef = useRef(null);

  const isTablet = useMediaQuery({ minWidth: '768px' });

  useEffect(() => {
    setMounted(true);
    // for fix header
    const fixHeader = (screenSelector: string) => {
      const id = document?.querySelector(screenSelector);
      gsap.to(id, {
        scrollTrigger: {
          trigger: id,
          start: 'top',
          toggleClass: {
            className: 'fixed pt-0',
            targets: 'relative pt-5',
          },
        },
      });
    };
    const animateTitle = (screenSelector: string) => {
      const titleId = document?.querySelector(screenSelector);
      gsap.set(titleId, {
        opacity: 0,
      });
      gsap.fromTo(
        titleId,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: titleId,
            toggleActions: 'play none none reset',
            onUpdate: () => {
              console.log(titleId);
            },
          },
        }
      );
    };
    const animateScreen = (
      screenSelector: string,
      staggerAmount = 0.3,
      xAxis = 0,
      yAxis = 80,
      delay = 0.3,
      childSelector = '[data-animate]'
    ) => {
      const screen = document?.querySelector(screenSelector);
      const frameGroup = gsap.utils.toArray(
        screen?.querySelectorAll(childSelector) as NodeList
      );
      gsap.set(frameGroup, {
        opacity: 0,
        y: yAxis,
        x: xAxis,
      });
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: screen,
          toggleActions: 'play none none reset',
          onUpdate: () => {
            // console.log({ screenSelector, childSelector });
          },
        },
      });
      timeline.to(frameGroup, {
        delay,
        opacity: 1,
        y: 0,
        x: 0,
        ease: 'power4.easeout',
        stagger: {
          amount: staggerAmount,
        },
      });
    };

    if (isTablet && isMounted && homeRef.current && false) {
      // fix header
      fixHeader('#header');

      animateScreen('#footer', 0.8, 10);
    }

    let ctx = gsap.context(() => {
      // titles
      animateScreen('#footer', 0.8, 10);
    }, homeRef);

    return () => ctx.revert();
  }, [isTablet, isMounted]);

  const divider = <div className="border-t-[3px] w-full border-[#A5A5FF26]" />;

  return (
    <>
      <Head>
        <title>Satoshi Studio ⎯ FAQs</title>
      </Head>
      {isMounted ? (
        <div
          ref={homeRef}
          className="bg-[url('/img/ui/background.png')] bg-no-repeat bg-cover -z-10 overflow-hidden"
        >
          <div className="max-w-[1920px] mx-auto">
            <Header />
            <div className="font-dm-sans px-[7%] 2xl:px-[10%] font-dm-sans mt-28 xl:mt-[72px] text-white xl:pb-[75px] leading-9">
              <h1
                data-animate
                className="text-2xl xs:text-3xl sm:text-4xl md:text-[40px] font-bold w-full"
              >
                TERMS OF SERVICE
              </h1>
              <div>
                <p className={'block mt-[100px] mb-[90px] text-[#B9B8BB]'}>
                  By using this website, you agree to comply with and be bound
                  by the following terms and conditions of use. If you do not
                  agree to these terms, please do not use this website.
                </p>
              </div>

              <ol
                className={'list-inside list-decimal pl-8  list-nested-counter'}
                style={{ listStyleType: 'decimal' }}
              >
                <li className={'text-[24px] font-bold mb-[70px]'}>
                  Use of Website
                  <div className="mt-[50px]">{divider}</div>
                  <div className="mt-[30px] text-[#B9B8BB] font-normal text-[1rem]">
                    <ol
                      className={
                        'mb-10 list-inside pl-4 list-decimal list-nested-counter'
                      }
                    >
                      <li>
                        The content of this website is for general information
                        and use only. It is subject to change without notice.
                      </li>
                      <li>
                        You agree to use this website only for lawful purposes
                        and in a way that does not infringe the rights of,
                        restrict or inhibit anyone else&apos;s use and enjoyment
                        of this website.
                      </li>
                      <li>
                        You are responsible for ensuring that all information
                        you provide on this website is true, accurate, and
                        complete.
                      </li>
                      <li>
                        We reserve the right to suspend or terminate your access
                        to this website at any time without notice.
                      </li>
                    </ol>
                  </div>
                </li>
                <li className={'text-[24px] font-bold mb-[70px]'}>
                  Intellectual Property
                  <div className="mt-[50px]">{divider}</div>
                  <div className="block mt-[30px] text-[#B9B8BB]  font-normal text-[1rem]">
                    <ol
                      className={
                        'list-outside pl-4 list-decimal list-nested-counter '
                      }
                    >
                      <li>
                        All content on this website, including but not limited
                        to images, videos, and text, is the property of Satoshi
                        Studio or its content suppliers and is protected by
                        copyright laws.
                      </li>
                      <li>
                        You may not use any of the content on this website
                        without the express written permission of Satoshi
                        Studio.
                      </li>
                    </ol>
                  </div>
                </li>
                <li className={'text-[24px] font-bold mb-[70px]'}>
                  Privacy
                  <div className="mt-[50px]">{divider}</div>
                  <div className="block mt-[30px] text-[#B9B8BB]  font-normal text-[1rem]">
                    <ol
                      className={
                        'mb-10 list-inside pl-4 list-decimal list-nested-counter'
                      }
                    >
                      <li>
                        We are committed to protecting your privacy. Any
                        personal information that you provide to us will be used
                        in accordance with our Privacy Policy.
                      </li>
                      <li>
                        We may use cookies to improve your browsing experience
                        on this website. By using this website, you agree to the
                        use of cookies.
                      </li>
                    </ol>
                  </div>
                </li>
                <li className={'text-[24px] font-bold mb-[70px]'}>
                  Disclaimer
                  <div className="mt-[50px]">{divider}</div>
                  <div className="block mt-[30px] text-[#B9B8BB] font-normal text-[1rem]">
                    <ol
                      className={
                        'mb-10 list-inside pl-4 list-decimal list-nested-counter'
                      }
                    >
                      <li>
                        This website is provided on an &ldquo;as is&ldquo;
                        basis. We make no representations or warranties of any
                        kind, express or implied, about the completeness,
                        accuracy, reliability, suitability or availability with
                        respect to the website or the information, products,
                        services, or related graphics contained on the website
                        for any purpose.
                      </li>
                      <li>
                        We will not be liable for any loss or damage, including
                        without limitation, indirect or consequential loss or
                        damage, or any loss or damage whatsoever arising from
                        loss of data or profits arising out of, or in connection
                        with, the use of this website.
                      </li>
                    </ol>
                  </div>
                </li>
                <li className={'text-[24px] font-bold mb-[70px]'}>
                  Governing Law
                  <div className="mt-[50px]">{divider}</div>
                  <div className="block mt-[30px] text-[#B9B8BB] font-normal text-[1rem]">
                    <ol
                      className={
                        'mb-10 list-inside pl-4 list-decimal list-nested-counter'
                      }
                    >
                      <li>
                        These terms and conditions are governed by and construed
                        in accordance with the laws of the United States.
                      </li>
                      <li>
                        Any disputes arising from the use of this website will
                        be subject to the exclusive jurisdiction of the courts
                        of the United States.
                        <p className={'pt-4'}>
                          By using this website, you agree to comply with and be
                          bound by these terms and conditions. If you have any
                          questions or concerns about these terms and
                          conditions, please contact us through our email{' '}
                          <a
                            href={`mailto: ${process.env.NEXT_PUBLIC_APP_SUPPORT_EMAIL}`}
                          >
                            {process.env.NEXT_PUBLIC_APP_SUPPORT_EMAIL}
                          </a>
                          .
                        </p>
                      </li>
                    </ol>
                  </div>
                </li>
              </ol>
            </div>

            <div className="lg:bg-[url('/img/ui/pizza.png')] bg-no-repeat bg-center bg-contain ">
              {/*<Proposition />*/}
              <Footer />
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default TermsOfServicePage;
