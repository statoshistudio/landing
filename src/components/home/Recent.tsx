import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BlueStar, Etherium2, Heart2 } from '../icons';

const Recent = () => {
  const purchases = [
    {
      name: 'Isekai #3683',
      type: 'Isekai Meta',
      coin: '0,69',
      dollar: '1.089,84',
      imgUrl: '/img/isekai.png',
      verified: true,
    },
    {
      name: 'Pop It Punk #18431',
      type: 'Pop It Punks',
      coin: '0,69',
      dollar: '1.089,84',
      imgUrl: '/img/punk.gif',
      verified: true,
    },
    {
      name: 'Angry Ape #2591',
      type: 'Angry Ape Army',
      coin: '0,48',
      dollar: '758,15',
      imgUrl: '/img/angry.png',
      verified: true,
    },
    {
      name: 'Queen of Ether',
      type: 'Art by RL',
      coin: '0,69',
      dollar: '1.089,84',
      imgUrl: '/img/queen.png',
      verified: false,
    },
    {
      name: 'PEC Friends #3400',
      type: 'PECFriends',
      coin: '0,69',
      dollar: '1.089,84',
      imgUrl: '/img/pec.png',
      verified: true,
    },
  ];

  return (
    <div className="px-[7%] 2xl:px-[10%] font-dm-sans mt-28 xl:mt-[181px] text-white">
      <div
        id="recent-purchase-title"
        className="flex justify-between items-center"
      >
        <div className="">
          <h2
            data-animate
            className="text-2xl xs:text-3xl sm:text-4xl md:text-[40px] font-bold"
          >
            Recent Purchases
          </h2>
          <p data-animate className="text-base xs:text-lg text-[#A9A9C2] mt-2">
            The most recent purchases made on our platform
          </p>
        </div>
        <div className="max-w-[144px]">
          <Link href={'#'} className="text-center">
            <div className="py-2 px-4 flex items-center border border-[#28303F] duration-500 hover:border-primary hover:text-primary rounded-full">
              <p className="text-sm font-bold leading-[22px]">View more</p>{' '}
              {/* <Arrow className="ml-3" /> */}
            </div>
          </Link>
        </div>
      </div>
      <div
        id="recent-purchase"
        className="pt-20 flex flex-wrap justify-center gap-5"
      >
        {purchases.map((purchase, idx) => {
          const { name, type, coin, dollar, imgUrl, verified } = purchase;
          return (
            <div
              data-animate
              key={idx}
              className="bg-[#17191C] px-2 pt-2 pb-6 rounded-xl"
            >
              <div className="rounded-lg overflow-hidden relative">
                <Image
                  src={imgUrl}
                  width={251}
                  height={251}
                  className=" z-10 hover:scale-125 duration-300"
                  alt="purchases"
                />
                <div className="group absolute top-2 right-2 w-12 h-12 flex items-center justify-center cursor-pointer rounded-full bg-[#00000066] z-20">
                  <Heart2 className="text-white group-hover:text-primary duration-300" />
                </div>
              </div>
              <div className="mt-4">
                <h5 className="font-bold ">{name}</h5>
                <p className="text-sm text-[#C1C1C1] mt-1 flex items-center">
                  {type}{' '}
                  <BlueStar
                    className={verified ? 'block ml-1 w-[13px]' : 'hidden'}
                  />
                </p>
                <p className="text-sm mt-[15px] flex items-center gap-2">
                  {coin} BTC (${dollar})
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Recent;
