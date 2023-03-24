import Head from 'next/head';
import {Footer, Header} from '@app/components';
import {useEffect, useRef, useState} from 'react';
import gsap from 'gsap';
import {useMediaQuery} from 'react-responsive';
import {copyToClipboard} from '@app/utils/fn';

const FAQPage = () => {
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
        <title>Satoshi Studio ⎯ Donate</title>
      </Head>
      {isMounted ? (
        <div
          ref={homeRef}
          className="bg-[url('/img/ui/background.png')] bg-no-repeat bg-cover -z-10 overflow-hidden"
        >
          <div className="max-w-[1920px] mx-auto">
            <Header />
            <div className="font-dm-sans px-[7%] 2xl:px-[10%] font-dm-sans mt-28 xl:mt-[70px] text-white xl:pb-[75px]">
              <h1
                data-animate
                className="text-2xl xs:text-3xl sm:text-4xl md:text-[40px] font-bold"
              >
                Donate
              </h1>
              <h3 className={'text-[#B9B8BB] pt-[10px]'}>
                We appreciate your donation to any of our wallet addresses below
              </h3>
              <div className="flex items-center flex-wrap flex-row justify-center gap-y-[90px] pt-[60px]">
                <div className="flex flex-col items-center justify-center gap-[20px] xl:basis-3/6">
                  <h4>BITCOIN</h4>
                  <img
                    src="/img/bitcoin-qrcode.png"
                    alt="Bitcoin QRCode"
                    height={300}
                    width={300}
                  />
                  <div className="flex flex-row items-center gap-[10px]">
                    <span className={'text-[#B9B8BB]'}>
                      1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71
                    </span>
                    <button
                      onClick={(e) =>
                        copyToClipboard(
                          e as unknown as MouseEvent,
                          '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71'
                        )
                      }
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 8H10C8.89543 8 8 8.89543 8 10V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V10C21 8.89543 20.1046 8 19 8Z"
                          stroke="#B9B8BB"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 14H3C2.46957 14 1.96086 13.7893 1.58579 13.4142C1.21071 13.0391 1 12.5304 1 12V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V4"
                          stroke="#B9B8BB"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[20px] xl:basis-3/6">
                  <h4>ETHEREUM, POLYGON, BSC, AVALANCHE</h4>
                  <img
                    src="/img/evm-qrcode.png"
                    alt="EVM QRCode"
                    height={300}
                    width={300}
                  />
                  <div className="flex flex-row items-center gap-[10px] w-full sm-only:flex-wrap justify-center">
                    <span className={'text-[#B9B8BB] break-words'}>
                      0x2170ed0880ac9a755fd29b2688956bd959f933f8
                    </span>
                    <button
                      onClick={(e) =>
                        copyToClipboard(
                          e as unknown as MouseEvent,
                          '0x2170ed0880ac9a755fd29b2688956bd959f933f8'
                        )
                      }
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 8H10C8.89543 8 8 8.89543 8 10V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V10C21 8.89543 20.1046 8 19 8Z"
                          stroke="#B9B8BB"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 14H3C2.46957 14 1.96086 13.7893 1.58579 13.4142C1.21071 13.0391 1 12.5304 1 12V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V4"
                          stroke="#B9B8BB"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[20px] xl:basis-3/6">
                  <h4>SOLANA</h4>
                  <img
                    src="/img/solana-qrcode.png"
                    alt=""
                    height={300}
                    width={300}
                  />
                  <div className="flex flex-row items-center gap-[10px]">
                    <span className={'text-[#B9B8BB]'}>
                      1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71
                    </span>
                    <button
                      className={'transition-all'}
                      onClick={(e) =>
                        copyToClipboard(
                          e as unknown as MouseEvent,
                          '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71'
                        )
                      }
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        className={'transition-all'}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 8H10C8.89543 8 8 8.89543 8 10V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V10C21 8.89543 20.1046 8 19 8Z"
                          stroke="#B9B8BB"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 14H3C2.46957 14 1.96086 13.7893 1.58579 13.4142C1.21071 13.0391 1 12.5304 1 12V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V4"
                          stroke="#B9B8BB"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
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

export default FAQPage;
