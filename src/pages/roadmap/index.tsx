import Head from 'next/head';
import {Footer, Header} from '@app/components';
import React, {useEffect, useRef, useState} from 'react';
import gsap from 'gsap';
import {useMediaQuery} from 'react-responsive';

const RoadMapPage = () => {
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
            <div className="font-dm-sans px-[7%] 2xl:px-[20%] font-dm-sans mt-28 xl:mt-[72px] text-white xl:pb-[75px] leading-8">
              <h1
                data-animate
                className="text-2xl xs:text-3xl sm:text-4xl md:text-[40px] font-bold w-full"
              >
                ROADMAP
              </h1>

              <ol className={'list-outside list-none mt-[100px]'}>
                <li className={'text-[24px] font-bold mb-[70px] block'}>
                  <figure>
                    <figcaption className={'text-[24px] mb-[50px] font-bold'}>
                      Phase 1: Deploying the Dapp and Building Basic Features
                    </figcaption>
                    {divider}
                    <div className="block mt-[30px] text-[#B9B8BB] font-normal text-[1rem]">
                      <ol className={'mb-10 list-outside pl-8 list-decimal'}>
                        <li>
                          Develop and deploy the Dapp to allow for inscriptions
                          of NFT metadata on the Bitcoin Network.
                        </li>
                        <li>
                          Create a user-friendly self-custody ordinal wallet for
                          users to securely store their NFTs.
                        </li>
                        <li>
                          Enable communication with EVM blockchains to allow for
                          the inscription of EVM NFT metadata on the Bitcoin
                          Network.
                        </li>
                        <li>
                          Enable communication with Solana blockchain to allow
                          for the inscription of Solana NFT metadata on the
                          Bitcoin Network.
                        </li>
                        <li>Develop a marketplace for trading Ordinals.</li>
                      </ol>
                    </div>
                  </figure>
                </li>
                <li className={'text-[24px] font-bold mb-[70px]'}>
                  <figure>
                    <figcaption className={'text-[24px] mb-[50px] font-bold'}>
                      Phase 2: Expanding Features and Services
                    </figcaption>
                    {divider}
                    <div className="block mt-[30px] text-[#B9B8BB]  font-normal text-[1rem]">
                      <ol className={'list-outside pl-8 list-decimal'}>
                        <li>
                          Launch a Creator Partnership Program to incentivize
                          EVM and Solana Creators on the platform, providing
                          support, education and development assistance.
                        </li>
                        <li>
                          Enable cross-chain swap of ETH for BTC on the Dapp,
                          allowing for seamless transfer of value between
                          Ethereum and Bitcoin Networks.
                        </li>
                        <li>
                          Launch a launchpad for creators to facilitate the
                          creation and distribution of their Ordinal/NFT
                          projects.
                        </li>
                        <li>
                          Develop a Satoshi Studio explorer for Ordinals that
                          appropriately renders and provides detailed
                          information about NFTs inscribed on the Bitcoin
                          Network.
                        </li>
                        <li>Launch the satoshi studio STASH token.</li>
                      </ol>
                    </div>
                  </figure>
                </li>
                <li className={'text-[24px] font-bold mb-[70px]'}>
                  <figure>
                    <figcaption className={'text-[24px] mb-[50px] font-bold'}>
                      Phase 3: Further Expansion and Integration
                    </figcaption>
                    {divider}
                    <div className="block mt-[30px] text-[#B9B8BB]  font-normal text-[1rem]">
                      <ol className={'mb-10 list-outside pl-8 list-decimal'}>
                        <li>
                          Integrate with additional blockchain networks to
                          expand the range of NFTs supported on the platform.
                        </li>
                        <li>
                          Develop additional services and tools to support
                          creators, such as analytics and marketing assistance.
                        </li>
                        <li>
                          Explore opportunities to collaborate with other
                          projects and platforms in the blockchain and art
                          communities.Continuously iterate and improve the
                          platform based on user feedback and industry
                          developments.
                        </li>

                        <li>Multichain expansion</li>
                      </ol>

                      <div className="flex flex-col">
                        <p>
                          The above roadmap outlines the development and
                          expansion of Satoshi Studio, from initial deployment
                          of the Dapp to a fully-featured platform supporting a
                          range of Ordinals/NFTs, creators and services. Through
                          ongoing innovation and collaboration, Satoshi Studio
                          aims to establish itself as a leading platform for
                          blockchain art and creators.
                        </p>
                      </div>
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

export default RoadMapPage;
