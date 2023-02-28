import Image from 'next/image';
import React from 'react';
import { Chain, Etherium, Functional, Heart, Pointer, Star } from '../icons';

const Hero = () => {
  const networks = [
    {
      name: 'Satoshi Studio',
      number: '1267',
      price: '6.64',
      imgUrl: '/img/monkey2.png',
      love: 2,
    },
    {
      name: 'Satoshi Studio',
      number: '1267',
      price: '0.4',
      imgUrl: '/img/monkey.png',
      love: 2,
    },
    {
      name: 'Satoshi Studio',
      number: '1267',
      price: '0.02',
      imgUrl: '/img/bear.png',
      love: 2,
    },
    {
      name: 'Satoshi Studio',
      number: '1267',
      price: '8.4',
      imgUrl: '/img/cow.png',
      love: 2,
    },
    {
      name: 'Satoshi Studio',
      number: '1267',
      price: '0.57',
      imgUrl: '/img/man.png',
      love: 2,
    },
    {
      name: 'Satoshi Studio',
      number: '1267',
      price: '2.14',
      imgUrl: '/img/doll.png',
      love: 2,
    },
  ];

  return (
    <div className="font-dm-sans pt-20 lg:mt-10 relative mx-[6%]">
      <div className="absolute top-0 left-0 w-full h-[90%] -z-0 hidden lg:block">
        <div className="relative h-full w-[90%] 2xl:w-[76%] -z-0 mx-auto">
          <Image
            src={'/img/ui/bitcoin-whitepaper.png'}
            className="-z-10"
            fill
            alt="background"
          />
        </div>
      </div>
      <div
        id="hero"
        className="lg:flex gap-14 2xl:gap-[65px] xl:px-[7%] 2xl:px-[10%] pt-12 relative z-30"
      >
        <div className="lg:w-[46%]">
          <h1
            id="hero-title"
            className="font-bold text-[40px] leading-[45px] xl:text-5xl xl:leading-[54px] 2xl:text-[56px] 2xl:leading-[68px] text-white text-center lg:text-left"
          >
            Bringing Value Art To <span className="text-primary">Bitcoin</span>,
            the most secure and decentralized Blockchain network
          </h1>
          <div
            id="hero-button"
            className=" sm:w-[424px] bg-primary hover:bg-primary/90 py-2.5 sm:py-4 xl:py-5 pr-[35px] pl-[27px] mt-[56px] mx-auto flex items-center rounded-full cursor-pointer"
          >
            <div className="pr-7 sm:pr-[33px] py-2">
              <Etherium />
            </div>
            <p className="text-center font-bold text-base sm:text-lg xl:text-xl leading-6 text-white border-l sm:py-2 px-2 sm:px-0">
              Claim Ordinal Copies of your Ethereum NFTs
            </p>
          </div>
        </div>
        <div className=" lg:flex-1 grid grid-cols-2 sm:grid-cols-3 gap-x-[23px] gap-y-[30px] mt-20 lg:mt-0">
          {networks.map((network, idx) => {
            const { name, number, price, imgUrl, love } = network;
            return (
              <div
                key={idx}
                data-animate
                className="rounded-3xl overflow-hidden bg-[#2A35474D] max-h-[251px] max-w-[210px] xl:max-w-full"
              >
                <div className="relative">
                  <Image src={imgUrl} width={265} height={190} alt="image" />
                  <div className="group w-[38px] h-[17px] absolute top-2 right-3 rounded-full bg-[#2F2F3433] px-2.5 py-1 flex items-center cursor-pointer border border-transparent hover:border-primary">
                    <Heart className="group-hover:text-primary text-white" />{' '}
                    <span className="text-[8.5px] mt-0.5 ml-0.5 group-hover:text-primary text-white">
                      {love}
                    </span>
                  </div>
                </div>
                <div className="pt-3 pb-6 mx-2 xl:mx-3.5 text-white">
                  <h5 className="text-center text-xs ">{name}</h5>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm font-medium xl:font-bold">
                      #{number}
                    </p>
                    <p className="text-sm font-medium xl:font-bold">
                      {price}BTC
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        id="hero-bottom"
        className="mt-28 xl:mt-[180px] flex flex-wrap justify-center gap-[30px] text-center px-[5%] z-30 relative"
      >
        <div
          data-animate
          className="px-6 py-10 gradient-background border border-transparent hover:border-primary duration-300 rounded-2xl"
        >
          <div className="w-[50px] h-[50px] flex items-center justify-center bg-primary mx-auto rounded-xl">
            <Pointer />
          </div>
          <h5 className="text-xl font-bold mt-5 text-white">Easy</h5>
          <p className="px-8 mt-6 text-[#B9B8BB] text-sm max-w-[286px] mx-auto">
            Simplify creation/minting of NFTs on the bitcoin network
          </p>
        </div>
        <div
          data-animate
          className="px-6 py-10 gradient-background cursor-pointer border border-transparent hover:border-primary duration-300 rounded-2xl"
        >
          <div className="w-[50px] h-[50px] flex items-center justify-center bg-primary mx-auto rounded-xl">
            <Functional />
          </div>
          <h5 className="text-xl font-bold mt-5 text-white">
            Functional Standards
          </h5>
          <p className="px-2 mt-6 text-[#B9B8BB] text-sm max-w-[286px] mx-auto">
            Establishing functional standards for the creation,
            transfer/exchange of NFTs on the Bitcoin Network
          </p>
        </div>
        <div
          data-animate
          className="px-6 py-10 gradient-background cursor-pointer border border-transparent hover:border-primary duration-300 rounded-2xl"
        >
          <div className="w-[50px] h-[50px] flex items-center justify-center bg-primary mx-auto rounded-xl">
            <Chain />
          </div>
          <h5 className="text-xl font-bold mt-5 text-white">
            Cross-chain Communication
          </h5>
          <p className="px-4 mt-6 text-[#B9B8BB] text-sm max-w-[286px] mx-auto">
            Communication with existing EVMs to import high value NFT art to the
            bitcoin Network
          </p>
        </div>
        <div
          data-animate
          className="px-6 py-10 gradient-background cursor-pointer border border-transparent hover:border-primary duration-300 rounded-2xl"
        >
          <div className="w-[50px] h-[50px] flex items-center justify-center bg-primary mx-auto rounded-xl">
            <Star />
          </div>
          <h5 className="text-xl font-bold mt-5 text-white">
            Reduce Network Bloat
          </h5>
          <p className="px-2 mt-6 text-[#B9B8BB] text-sm max-w-[286px] mx-auto">
            Revise Ordinal structure to create lighter NFT infrastructure
            thereby keeping network bloat to the minimum
          </p>
        </div>
        <div
          data-animate
          className="px-6 py-10 gradient-background cursor-pointer border border-transparent hover:border-primary duration-300 rounded-2xl"
        >
          <div className="w-[50px] h-[50px] flex items-center justify-center bg-primary mx-auto rounded-xl">
            <Functional />
          </div>
          <h5 className="text-xl font-bold mt-5 text-white">
            Self Custody Wallet
          </h5>
          <p className="px-2 mt-6 text-[#B9B8BB] text-sm max-w-[286px] mx-auto">
            You create your self custody ordinal wallet and own your keys. Not
            your keys, not your Ordinals
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
