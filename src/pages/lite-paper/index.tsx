import Head from 'next/head';
import {Footer, Header} from '@app/components';
import React, {useEffect, useRef, useState} from 'react';
import gsap from 'gsap';
import {useMediaQuery} from 'react-responsive';

const LitePaperPage = () => {
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
            <div className="font-dm-sans px-[7%] 2xl:px-[10%] font-dm-sans mt-28 xl:mt-[72px] text-white xl:pb-[75px] leading-8">
              <h1
                data-animate
                className="text-2xl xs:text-3xl sm:text-4xl md:text-[40px] font-bold w-full"
              >
                LITEPAPER
              </h1>
              <div>
                <p className={'block mt-[100px] mb-[90px] text-[#B9B8BB]'}>
                  At Satoshi Studio, we take copyright law and intellectual
                  property rights seriously. We respect the rights of creators
                  and artists and are committed to ensuring that our platform
                  operates in compliance with applicable copyright laws and
                  regulations. This copyright policy outlines our approach to
                  handling copyright infringement claims and our commitment to
                  protecting the rights of creators and artists.
                </p>
              </div>

              <ol
                className={'list-outside list-decimal pl-8 '}
                style={{ listStyleType: 'decimal' }}
              >
                <li className={'text-[24px] font-bold mb-[70px]'}>
                  <figure>
                    <figcaption className={'text-[24px] mb-[50px] font-bold'}>
                      Problem
                    </figcaption>
                    {divider}
                    <div className="block mt-[30px] text-[#B9B8BB] font-normal text-[1rem]">
                      <ul className={'mb-10 list-inside pl-4 list-disc'}>
                        <li>
                          Minting NFTs on bitcoin is based on the nascent
                          ordinals protocol and is currently a complicated
                          process that requires specialised tools
                        </li>
                        <li>
                          Storing on chain data will bloat the network and
                          increase transactions cost and time
                        </li>
                      </ul>
                    </div>
                  </figure>
                </li>
                <li className={'text-[24px] font-bold mb-[70px]'}>
                  <figure>
                    <figcaption className={'text-[24px] mb-[50px] font-bold'}>
                      Mission
                    </figcaption>
                    {divider}
                    <div className="block mt-[30px] text-[#B9B8BB]  font-normal text-[1rem]">
                      <ul className={'list-outside pl-4 list-disc'}>
                        <li>
                          <figure>
                            <figcaption>
                              Create standards for storing collectibles on the
                              bitcoin network using ordinal protocol with the
                              following goal
                            </figcaption>
                            <ul className={'mb-10 list-inside pl-4 list-disc'}>
                              <li>
                                Keep on-chain data storage minimal to limit
                                bloating the network
                              </li>
                              <li>
                                Therefore keeping transaction fees low and speed
                                as fast as possible
                              </li>
                            </ul>
                          </figure>
                        </li>
                        <li>
                          Simplify minting NFTs on bitcoin for anyone interested
                        </li>
                        <li>Cross chain NFT minting/porting capabilities</li>
                      </ul>
                    </div>
                  </figure>
                </li>
                <li className={'text-[24px] font-bold mb-[70px]'}>
                  <figure>
                    <figcaption className={'text-[24px] mb-[50px] font-bold'}>
                      Proposal
                    </figcaption>
                    {divider}
                    <div className="block mt-[30px] text-[#B9B8BB]  font-normal text-[1rem]">
                      <ul className={'mb-10 list-inside pl-4 list-disc'}>
                        <li>
                          Limit on-chain data to JSON text that indicates where
                          the NFT metadata is stored
                        </li>
                        <li>
                          Store actual MetaData and NFT on immutable
                          decentralised file storage platforms e.g. IPFS
                        </li>
                      </ul>

                      <div className="flex flex-col">
                        <span className={'font-bold text-white'}>
                          Proposed sample on-chain JSON schema ~ 400 bytes (130x
                          smaller than the current average ordinal NFT size)
                        </span>
                        <code className={'mt-[30px] font-normal'}>
                          {`
                          {
                            "name": "Crypto Punk #2232", 
                             "file": "ipfs://QmQqzMTavQgT4f4T5v6PWBp7XNKtoPmC9jvn12WPT3gkSE", 
                             “metadata_url”: “ipfs://QmQqzMTavQgT4f4T5v6PWBp7XNKtoPmC9jvn12WPT3gkSE”, 
                             “origin_url”: ”https://satoshistudio.art/ crypto_punk”,
                             “origin_signature”:”https://satoshistudio.art/verify/0x209sfhh8230oho909sdsdifosdf” 
                          } 
                          `}
                        </code>
                        <span
                          className={'font-bold text-white mt-[30px] block'}
                        >
                          Proposed sample metadata_url JSON schema
                        </span>
                        <code
                          className={'mt-[30px] font-normal block text-[1rem]'}
                        >
                          {`
{  “attributes”: [{ “name”:“Color”, “value”:”Blue”}, { “name”:“Size”, “value”:”Large”}], “collection”: “Crypto Punk”, “root_satoshi: “0239090920390”, “collection_satoshis”: [“02939023”, “920923092309”, “29309u2030923”] }
                          `}
                        </code>
                      </div>
                    </div>
                  </figure>
                </li>
                <li className={'text-[24px] font-bold mb-[70px]'}>
                  <figure>
                    <figcaption className={'text-[24px] mb-[50px] font-bold'}>
                      Viral component
                    </figcaption>
                    {divider}
                    <div className="block mt-[30px] text-[#B9B8BB] font-normal text-[1rem]">
                      <ul className={'mb-10 list-inside pl-4 list-disc'}>
                        <li>
                          Users can inscribe their EVM based NFTs to Bitcoin
                          with a verification seal for a very low fee.
                        </li>
                        <li>
                          Own a verifiable Inscription of your unique EVM based
                          and Solana NFTs on the most trusted Blockchain
                        </li>
                      </ul>
                    </div>
                  </figure>
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

export default LitePaperPage;
