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
            <div className="font-dm-sans px-[7%] 2xl:px-[22.5%] font-dm-sans mt-28 xl:mt-[72px] text-white xl:pb-[75px] leading-9">
              <h1
                data-animate
                className="text-2xl xs:text-3xl sm:text-4xl md:text-[40px] font-bold w-full"
              >
                ABOUT US
              </h1>
              <div className={'flex flex-col gap-4'}>
                <p className={'block mt-[100px] text-[#B9B8BB]'}>
                  Welcome to Satoshi Studio, an online bitcoin ordinals creation
                  platform and marketplace that celebrates the beauty and
                  innovation of cryptocurrency and blockchain technology. Our
                  mission is to showcase the work of talented artists from
                  around the world who are inspired by the revolutionary
                  potential of decentralized systems.
                </p>
                <p className={'block text-[#B9B8BB]'}>
                  At Satoshi Studio, we believe that art and technology are
                  intimately connected. Just as cryptocurrency and blockchain
                  technology are disrupting traditional financial systems, so
                  too are they transforming the art world. Through our online
                  platform, we seek to promote the vision and creativity of
                  artists who are exploring these exciting new frontiers.
                </p>
                <p className={'block text-[#B9B8BB]'}>
                  Our collection features a diverse range of styles, mediums,
                  and themes. From stunning digital landscapes to
                  thought-provoking installations, our artists are pushing the
                  boundaries of what is possible with blockchain art. We are
                  proud to offer a platform that allows them to share their work
                  with a global audience.
                </p>
                <p className={'block text-[#B9B8BB]'}>
                  Satoshi Studio was founded by a team of passionate artists and
                  blockchain enthusiasts who recognized the need for a dedicated
                  space to showcase this emerging art form. We are committed to
                  fostering a vibrant community of artists, collectors, and
                  enthusiasts who share our passion for innovation and
                  creativity.
                </p>
                <p className={'block text-[#B9B8BB]'}>
                  We believe that blockchain art is more than just a passing
                  trend - it is a new paradigm that is here to stay. By
                  supporting our artists and sharing their work with the world,
                  we hope to inspire a new generation of creators who will
                  continue to push the boundaries of what is possible.
                </p>
                <p className={'block text-[#B9B8BB]'}>
                  Thank you for visiting Satoshi Studio. We hope that you will
                  explore our collection and discover the beauty and potential
                  of blockchain art. If you have any questions or comments,
                  please don&lsquo;t hesitate to contact us. We would love to hear
                  from you!
                </p>
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

export default LitePaperPage;
