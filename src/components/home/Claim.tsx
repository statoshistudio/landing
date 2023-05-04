import Link from 'next/link';
import React from 'react';
import { Arrow, Folder, Wallet, Trade, Connect } from '../icons';

const Claim = () => {
  return (
    <div className="relative z-10 mt-[138px] font-dm-sans text-white px-[7%] 2xl:px-[10%]">
      <div id="claim-title" className="text-center">
        <h2
          data-animate
          className="text-3xl sm:text-[40px] sm:leading-[46px] lg:leading-[45px] xl:text-[50px] xl:leading-[72px] font-bold"
        >
          Do you own valuable
          <span className="text-primary"> NFTs </span>
          on any <br className="hidden md:block" /> EVM (ETH,Polygon, BSC)
          network?
        </h2>
        <h4
          data-animate
          className="text-lg sm:text-2xl xl:text-3xl font-medium mt-6 sm:mt-9 xl:mt-11 text-[#B9B8BB] font-dm-sans"
        >
          We have made it Easy to inscribe Your NFT
          <br /> Assets on the bitcoin network
        </h4>
        <h3
          data-animate
          className="text-3xl md:text-4xl xl:text-[40px] font-bold mt-11 md:mt-16 xl:mt-[100px]"
        >
          Get Started
        </h3>
        <p data-animate className="text-lg mt-3.5 text-[#A9A9C2]">
          in four easy steps
        </p>
      </div>
      <div
        id="claim"
        className="mt-[61px] flex flex-wrap gap-10 2xl:gap-[60px] justify-center"
      >
        <div
          data-animate
          className="px-5 py-5 bg-[#1F1F2C] rounded-[20px] text-center max-w-[292px]"
        >
          <div className="w-[60px] h-[60px] bg-primary text-white flex items-center justify-center mx-auto rounded-xl">
            <Folder />
          </div>
          <h5 className="text-xl font-bold mt-5 text-white">Create</h5>
          <p className="mt-5 text-white text-lg max-w-[261px]">
            Create your Satoshi Studio ordinal wallet and secure your private
            keys.
          </p>
          {/* <div className="max-w-[144px] mx-auto mt-[38px]">
            <Link href={'/'} className="text-center">
              <div className="py-2 px-4 flex items-center border border-[#28303F] duration-500 hover:border-primary hover:text-primary rounded-full">
                <p className="text-sm font-bold leading-[22px]">View more</p>{' '}
                <Arrow className="ml-3" />
              </div>
            </Link>
          </div> */}
        </div>
        <div
          data-animate
          className="px-5 py-5 bg-[#1F1F2C] rounded-[20px] text-center max-w-[292px]"
        >
          <div className="w-[60px] h-[60px] bg-primary flex items-center justify-center mx-auto rounded-xl">
            <Connect />
          </div>
          <h5 className="text-xl font-bold mt-5 text-white">Link</h5>
          <p className="mt-5 text-white text-lg max-w-[261px] lg:max-w-[209px] mx-[38px]">
            Link your metamask (EVM) address to your ordinal wallet.
          </p>
          {/* <div className="max-w-[144px] mx-auto mt-[38px]">
            <Link href={'/'} className="text-center">
              <div className="py-2 px-4 flex items-center border border-[#28303F] duration-500 hover:border-primary hover:text-primary rounded-full">
                <p className="text-sm font-bold leading-[22px]">View more</p>{' '}
                <Arrow className="ml-3" />
              </div>
            </Link>
          </div> */}
        </div>
        <div
          data-animate
          className="px-5 py-5 bg-[#1F1F2C] rounded-[20px] text-center max-w-[292px]"
        >
          <div className="w-[60px] h-[60px] bg-primary flex items-center justify-center mx-auto rounded-xl">
            <Wallet />
          </div>
          <h5 className="text-xl font-bold mt-5 text-white">Pay</h5>
          <p className="mt-5 text-white text-lg max-w-[261px]">
            Transfer BTC to your ordinal wallet to pay Inscription (transaction)
            fees.
          </p>
          {/* <div className="max-w-[144px] mx-auto mt-[38px]">
            <Link href={'/'} className="text-center">
              <div className="py-2 px-4 flex items-center border border-[#28303F] duration-500 hover:border-primary hover:text-primary rounded-full">
                <p className="text-sm font-bold leading-[22px]">View more</p>{' '}
                <Arrow className="ml-3" />
              </div>
            </Link>
          </div> */}
        </div>
        <div
          data-animate
          className="px-5 py-5 bg-[#1F1F2C] rounded-[20px] text-center max-w-[292px]"
        >
          <div className="w-[60px] h-[60px] bg-primary flex items-center justify-center mx-auto rounded-xl">
            <Trade />
          </div>
          <h5 className="text-xl font-bold mt-5 text-white">Claim</h5>
          <p className="mt-5 text-white text-lg max-w-[261px]">
            Inscribe your existing EVM NFTs as ordinals on the bitcoin network
            or create new ordinals
          </p>
          {/* <div className="max-w-[144px] mx-auto mt-[38px]">
            <Link href={'/'} className="text-center">
              <div className="py-2 px-4 flex items-center border border-[#28303F] duration-500 hover:border-primary hover:text-primary rounded-full">
                <p className="text-sm font-bold leading-[22px]">View more</p>{' '}
                <Arrow className="ml-3" />
              </div>
            </Link>
          </div> */}
        </div>
      </div>
      <div className="mt-20 lg:mt-[105px] text-center lg:flex items-center justify-center">
        <a href="https://satoshistudio.io/import" className="px-10 xs:px-14 sm:px-20 md:px-[96px] py-2.5 xs:py-4 sm:py-5 md:py-[27px] bg-primary hover:bg-primary/80 duration-200 ease-in-out text-lg sm:text-xl md:text-2xl lg:text-base 2xl:text-2xl font-bold rounded-full">
          Inscribe Ordinals Of Your Ethereum and Solana NFTs Now
        </a>
        <p className="uppercase font-bold text-lg sm:text-xl md:text-2xl lg:text-base text-center my-6 lg:my-0 lg:w-40">
          or
        </p>
        <a
        href="https://satoshistudio.io/assets/create"
          id="claim-button-2"
          className="px-10 xs:px-14 sm:px-20 md:px-[96px] py-2.5 xs:py-4 sm:py-5 md:py-[27px] bg-[#904C25] hover:bg-opacity-80 duration-200 ease-in-out text-lg sm:text-xl md:text-2xl lg:text-base 2xl:text-2xl font-bold rounded-full"
        >
          Create A New Ordinal
        </a>
      </div>
    </div>
  );
};
export default Claim;
