import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BlueStar } from '../icons';

const Trending = () => {
  const collections = [
    {
      name: 'RTFKT x RIMOWA Meta...',
      price: 0.23,
      volume: 1.195,
      imgUrl: '/img/rtfk.gif',
    },
    {
      name: 'EVERYBODYS',
      price: 0.03,
      volume: 201,
      imgUrl: '/img/everybody.png',
    },
    {
      name: 'DentedFeelsNFT',
      price: 0.13,
      volume: 62,
      imgUrl: '/img/dented.png',
    },
    {
      name: 'Kitaro World Official',
      price: 0.23,
      volume: 1.195,
      imgUrl: '/img/kitaro.png',
    },
    {
      name: 'Degenheim',
      price: 0.23,
      volume: 1.195,
      imgUrl: '/img/degenhim.png',
    },
    {
      name: 'Kooks by Terry Urban',
      price: 0.23,
      volume: 1.195,
      imgUrl: '/img/kooks.png',
    },
    {
      name: 'Terrapin Universe Her...',
      price: 0.23,
      volume: 1.195,
      imgUrl: '/img/terrapin.png',
    },
    {
      name: 'Innermost by Brian M...',
      price: 0.23,
      volume: 1.195,
      imgUrl: '/img/innermost.png',
    },
    {
      name: 'ZuckBots',
      price: 0.23,
      volume: 1.195,
      imgUrl: '/img/zuckbots.png',
    },
    {
      name: 'Wizards of the Tower S...',
      price: 0.23,
      volume: 1.195,
      imgUrl: '/img/wizard.png',
    },
  ];

  return (
    <div className="px-[7%] 2xl:px-[10%] font-dm-sans mt-28 xl:mt-[181px] text-white xl:pb-[75px]">
      <div id="collections-title" className="flex justify-between items-center">
        <div className="">
          <h2
            data-animate
            className="text-2xl xs:text-3xl sm:text-4xl md:text-[40px] font-bold"
          >
            Trending Collection
          </h2>
          <p data-animate className="text-base xs:text-lg text-[#A9A9C2] mt-2">
            The most well-known Collection - Based on the last 30 days{' '}
          </p>
        </div>
        <div className="max-w-[144px]">
          <Link href={'https://satoshistudio.io'} className="text-center">
            <div className="py-2 px-4 flex items-center border border-[#28303F] duration-500 hover:border-primary hover:text-primary rounded-full">
              <p className="text-sm font-bold leading-[22px]">View more</p>{' '}
              {/* <Arrow className="ml-3" /> */}
            </div>
          </Link>
        </div>
      </div>
      <div id="collections" className="pt-20 xl:flex justify-center gap-4">
        <div className="xl:w-1/2">
          <div
            data-animate
            className="grid grid-cols-8 text-xs xs:text-sm text-[#A9A9C2] font-medium"
          >
            <p className="col-span-4">Collection</p>
            <p className="col-span-2 flex items-center">Floor price</p>
            <p className="col-span-2 flex items-center">Volume</p>
          </div>
          <div className="mt-[15px] space-y-3">
            {collections.slice(0, 5).map((collection, idx) => {
              const { name, price, volume, imgUrl } = collection;
              return (
                <div
                  key={idx}
                  data-animate
                  className="py-[15px] bg-[#000000] grid grid-cols-8"
                >
                  <div className="col-span-4 flex items-center">
                    <p className="text-[10px] xs:text-sm font-bold font-poppins pl-[7px]">
                      {idx + 1}
                    </p>
                    <div className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] 2xl:w-[60px] 2xl:h-[60px] rounded-full overflow-hidden ml-2.5 2xl:ml-[13px]">
                      <Image
                        src={imgUrl}
                        width={60}
                        height={60}
                        className="object-fill"
                        alt="profile"
                      />
                    </div>
                    <p className="text-white text-[8px] xs:text-xs sm:text-sm 2xl:text-base font-poppins font-medium xs:font-semibold sm:font-bold ml-[7px] uppercase">
                      {name?.length > 16 ? name?.slice(0, 16) + '...' : name}
                    </p>
                    <BlueStar className="mx-[5px] width-[10px]" />
                  </div>
                  <div className="col-span-2 flex items-center">
                    <p className="text-white text-[8px] xs:text-xs sm:text-sm 2xl:text-base font-poppins font-medium xs:font-semibold sm:font-bold">
                      {price} BTC
                    </p>
                  </div>
                  <div className="col-span-2 flex items-center">
                    <p className="text-white text-[8px] xs:text-xs sm:text-sm 2xl:text-base font-poppins font-medium xs:font-semibold sm:font-bold">
                      {volume} BTC
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="xl:w-1/2">
          <div
            data-animate
            className="hidden xl:grid grid-cols-8 text-sm text-[#A9A9C2] font-medium pl-4"
          >
            <p className="col-span-4">Collection</p>
            <p className="col-span-2">Floor price</p>
            <p className="col-span-2">Volume</p>
          </div>
          <div className="mt-[15px] space-y-3">
            {collections.slice(5).map((collection, idx) => {
              const { name, price, volume, imgUrl } = collection;
              return (
                <div
                  data-animate
                  key={idx}
                  className="py-[15px] bg-[#000000] grid grid-cols-8"
                >
                  <div className="col-span-4 flex items-center">
                    <p className="text-[10px] xs:text-sm font-bold font-poppins pl-[7px]">
                      {idx + 6}
                    </p>
                    <div className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] 2xl:w-[60px] 2xl:h-[60px] rounded-full overflow-hidden ml-2.5 2xl:ml-[13px] ">
                      <Image
                        src={imgUrl}
                        width={90}
                        height={90}
                        className="object-cover"
                        alt="profile"
                      />
                    </div>
                    <p className="text-white text-[8px] xs:text-xs sm:text-sm 2xl:text-base font-poppins font-medium xs:font-semibold sm:font-bold ml-[7px] uppercase">
                      {name?.length > 16 ? name?.slice(0, 16) + '...' : name}
                    </p>
                    <BlueStar className="mx-[5px]" />
                  </div>
                  <div className="col-span-2 flex items-center">
                    <p className="text-white text-[8px] xs:text-xs sm:text-sm 2xl:text-base font-poppins font-medium xs:font-semibold sm:font-bold">
                      {price} BTC
                    </p>
                  </div>
                  <div className="col-span-2 flex items-center">
                    <p className="text-white text-[8px] xs:text-xs sm:text-sm 2xl:text-base font-poppins font-medium xs:font-semibold sm:font-bold">
                      {volume} BTC
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trending;
