import React from 'react';

const Proposition = () => {
  return (
    <div className="px-[7%] font-dm-sans mt-[112px] text-white">
      <h2
        id="accordion-title"
        className="text-3xl xs:text-4xl font-bold text-center"
      >
        Satoshi Studio Value Proposition
      </h2>
      <div id="accordion" className="pt-[58px] space-y-[15px]">
        <div
          data-animate
          className="py-4 px-8 sm:px-20 md:px-[133px] bg-[#1F1F2C] max-w-[928px] mx-auto"
        >
          <p className="text-xl font-medium">
            Bringing NFTs to the most decentralized and secure network in the
            world.
          </p>
        </div>
        <div
          data-animate
          className="py-4 px-8 sm:px-20 md:px-[133px] bg-[#1F1F2C] max-w-[928px] mx-auto"
        >
          <p className="text-xl font-medium">
            Adding value to the Bitcoin network Considering a satoshi made into
            an NFT can be worth several Bitcoin.
          </p>
        </div>
        <div
          data-animate
          className="py-4 px-8 sm:px-20 md:px-[133px] bg-[#1F1F2C] max-w-[928px] mx-auto"
        >
          <p className="text-xl font-medium">
            Minimal bloat on the Network as we leverage IPFS file storage.
          </p>
        </div>
        <div
          data-animate
          className="py-4 px-8 sm:px-20 md:px-[133px] bg-[#1F1F2C] max-w-[928px] mx-auto"
        >
          <p className="text-xl font-medium">
            Adhering to the principle of True Ownership with our self custody
            wallet. you own your private keys.
          </p>
        </div>
        <div
          data-animate
          className="py-4 px-8 sm:px-20 md:px-[133px] bg-[#1F1F2C] max-w-[928px] mx-auto"
        >
          <p className="text-xl font-medium">
            Deflating Bitcoin supply as every satoshi that becomes an NFT is
            technically taken away from Bitcoin supply
          </p>
        </div>
        <div
          data-animate
          className="py-4 px-8 sm:px-20 md:px-[133px] bg-[#1F1F2C] max-w-[928px] mx-auto"
        >
          <p className="text-xl font-medium">
            NFT imports from EVM blockchains brings value to Bitcoin blockchain
          </p>
        </div>
      </div>
    </div>
  );
};
export default Proposition;
