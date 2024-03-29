import React from 'react';
import { BlueStar } from '@app/components/icons';
import Link from 'next/link';
import Arrow from '../icons/Menu';
const collectoinsData = [
  {
    title: 'Bored Ape Yatch Club',
    cryptoAddress: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
  },
  {
    title: 'Azuki',
    cryptoAddress: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
  },
  {
    title: 'Mutant Ape Yatch Club',
    cryptoAddress: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
  },
  {
    title: 'Moonbirds',
    cryptoAddress: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
  },
  {
    title: 'Pudgy Penguins',
    cryptoAddress: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
  },
  {
    title: 'Opepen Editions',
    cryptoAddress: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
  },
];
const Evms = () => {
  return (
    <div className="px-[7%] 2xl:px-[10%] font-dm-sans mt-28 xl:mt-[181px] text-white">
      <div id="evms-title" className="flex justify-between items-center">
        <div className="">
          <h2
            data-animate
            className="text-2xl xs:text-3xl sm:text-4xl md:text-[40px] text-center sm:text-left font-bold"
          >
            Top Verified Collections from Popular EVMs
          </h2>
          <p
            data-animate
            className="text-lg text-[#A9A9C2] mt-2 text-center sm:text-left"
          >
            The most well-known Collection - Based on the last 30 days{' '}
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
        id="evms"
        className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 2xl:gap-10"
      >
        {collectoinsData.map((collection, index) => (
          <div
            data-animate
            key={index}
            className="flex-1 px-4 py-[34px] cursor-pointer border border-transparent hover:border-primary duration-300 flex items-center gap-2.5 rounded-xl bg-gradient-to-t to-[#70707266] from-[#64617126]"
          >
            <div className="min-w-[40px] min-h-[40px] sm:min-w-[50px] sm:min-h-[50px] sm:w-[50px] sm:h-[50px] relative bg-[#565660] rounded-full">
              <BlueStar className="absolute -bottom-1 -right-1" />
            </div>
            <div className="">
              <h4 className="font-bold">{collection.title}</h4>
              <p className="text-xs font-medium mt-1 break-all">
                {collection.cryptoAddress}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Evms;
