import Head from 'next/head';
import {Footer, Header} from '@app/components';
import React, {useEffect, useRef, useState} from 'react';
import gsap from 'gsap';
import {useMediaQuery} from 'react-responsive';

const CreateProgramPage = () => {
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

  return (
    <>
      <Head>
        <title>Satoshi Studio ⎯ Creator Partnership</title>
      </Head>
      {isMounted ? (
        <div
          ref={homeRef}
          className="bg-[url('/img/ui/background.png')] bg-no-repeat bg-cover -z-10 overflow-hidden"
        >
          <div className="max-w-[1920px] mx-auto">
            <Header />
            <div className="font-dm-sans px-[7%] 2xl:px-[17%] font-dm-sans mt-28 xl:mt-[72px] text-white xl:pb-[75px] leading-10">
              <h1
                data-animate
                className="text-2xl xs:text-3xl sm:text-4xl md:text-[40px] font-bold w-full"
              >
                SATOSHI STUDIO CREATOR PARTNERSHIP PROGRAM
              </h1>

              <div
                data-animate={'true'}
                className="py-[15px] flex flex-nowrap flex-start flex-row gap-[50px] sm-only:flex-wrap"
              >
                <div className="xl:basis-7/12 flex pt-[104px] flex-col">
                  <span className="text-[16px] leading-[2rem] text-[#B9B8BB] font-normal">
                    This partnership is aimed at NFT creators who have built the
                    NFT ecosystem to be what it is today. A lot of creative NFT
                    collections have been developed on EVM chains and the Solana
                    ecosystem which cannot be ignored. We are adding an
                    extra-layer of decentralization by allowing these NFT
                    collections to be inscribed on the bitcoin network. The
                    inscription on bitcoin is not a replacement of the original
                    NFT. Rather it can be seen as a mirror on the bitcoin
                    network that allows holders of the NFTs to enjoy perks on
                    the Bitcoin network that may be attributed to the collection
                    (What we like to call “Proof of Alliance”). Owners of these
                    NFTs will be able to do so on their own in a decentralized
                    manner. However we are making it possible for the creators
                    (owners of the NFT smart contract) to be part of this
                    process and get paid in recognition of their contribution to
                    the ecosystem. If you are a creator, you can verify your
                    existing collection on satoshi studio and you will be paid a
                    share of revenue from the trading activity of ordinals
                    derived from your collection.
                  </span>
                  <p className={'pt-[20px] text-[#B9B8BB] font-normal'}>
                    *NB - THE PROGRAM WILL BE IN TEST PHASE FOR 9 MONTHS (MARCH
                    30TH, 2023 - DECEMBER 30TH, 2023)
                  </p>
                </div>
                <div className={'xl:basis-5/12 flex items-center'}>
                  <img
                    src={'/img/lite-parnership-hero-image.png'}
                    // width={583}
                    // height={449}
                    // fill
                    // className="object-fill"
                    alt="partnership-image"
                  />
                </div>
              </div>

              <h2
                data-animate
                className="text-2xl xs:text-3xl sm:text-4xl md:text-[32px] font-bold mt-[72px]"
              >
                PROGRAM GUIDELINES
              </h2>
              <div className="flex py-[35px] flex-col flex-center">
                <ol className={'list-decimal text-[#B9B8BB] font-normal list-inside pl-4'}>
                  <li>A creator is required to apply for verification</li>
                  <li>
                    A creator should have an EVM or Solana wallet address linked
                    to his/her Satoshi Studio account. This wallet address
                    should have OWNER rights to the smart contract address of
                    the NFT collection.
                  </li>
                  <li>
                    NFTs from the collection can only be inscribed by their
                    holders. All inscriptions linked to the EVM/Solana
                    collection will be aggregated under the corresponding
                    Satoshi Studio verified collection.
                  </li>
                  <li>
                    Each inscription derived from a collection remains the
                    property of the NFT holder until it is sold or transferred
                    to another wallet address.{' '}
                  </li>
                  <li>
                    Verification approval is subject to Satoshi Studio doing a
                    diligence check to ensure that the submitted collection is
                    indeed an original, and the requesting party is indeed the
                    owner of the collection.
                  </li>
                  <li>
                    Satoshi Studio reserves the right to revoke the verification
                    status of a creator if we find any discrepancies with
                    information previously provided.
                  </li>
                  <li>
                    Upon approval we may share your project and its represented
                    media on our social handles as a means of raising awareness
                    to the partnership
                  </li>
                  <li>
                    <figure>
                      <figcaption>Revenue</figcaption>
                      <ol
                        className={'list-inside'}
                        style={{ listStyleType: 'lower-alpha' }}
                      >
                        <li>
                          A creator will be paid 30% of Inscription fee for
                          every inscription made by holders of his collection
                          beginning from the day his/her collection gets
                          verified.
                        </li>
                        <li>
                          The creator is also to be paid 10% of trading fees of
                          his collection on Satoshi Studio.
                        </li>
                      </ol>
                    </figure>
                  </li>
                  <li>
                    All revenue will be paid out monthly to the creators using
                    data calculated up to the preceding week.
                  </li>
                  <li>
                    Satoshi Studio reserves the right to alter/modify the terms
                    of this partnership at any time without prior consultation
                    of the creator.
                  </li>
                </ol>
              </div>

              <div className="flex items-center w-full justify-center pt-[120px]">
                <button className="font-bold text-white py-0 px-10 xl:px-[62px] rounded-[38px] h-[76px] border border-primary bg-[#1F1F2CE5] hover:text-primary duration-300">
                  BEGIN VERIFICATION
                </button>
              </div>
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

export default CreateProgramPage;
