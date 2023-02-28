import Head from 'next/head';
import Image from 'next/image';
import {
  Claim,
  Evms,
  Footer,
  Header,
  Hero,
  Proposition,
  Recent,
  Trending,
} from '@app/components';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
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
      // fix header
      animateTitle('#airdrop-title');
      animateTitle('#utility-title');
      animateTitle('#roadmap-title');
      // animateScreen("#marketplace");
      // animateTitle("#slider");
      animateScreen('#hero', 0.4, 25);
      animateScreen('#hero-bottom', 0.8);
      animateScreen('#claim', 0.8);
      animateScreen('#evms', 0.09);
      animateScreen('#collections', 0.8, 40);
      animateScreen('#recent-purchase', 0.7, 25);
      animateScreen('#accordion', 0.6, 20);
      animateScreen('#footer', 0.8, 10);
    }

    let ctx = gsap.context(() => {
      // titles
      animateTitle('#hero-title');
      animateTitle('#hero-button');
      animateTitle('#claim-button');
      animateTitle('#accordion-title');
      // screens
      animateScreen('#hero', 0.4, 25);
      animateScreen('#hero-bottom', 0.15, 80, 180, 0.1);
      animateScreen('#claim', 0.8);
      animateScreen('#claim-title', 0.8);
      animateScreen('#evms-title', 0.15);
      animateScreen('#evms', 0.15, 100, 150);
      animateScreen('#collections-title', 0.15);
      animateScreen('#collections', 0.8, 40);
      animateScreen('#recent-purchase-title', 0.15);
      animateScreen('#recent-purchase', 0.7, 25);
      animateScreen('#accordion', 0.6, 10);
      animateScreen('#footer', 0.8, 10);
    }, homeRef);

    return () => ctx.revert();
  }, [isTablet, isMounted]);

  return (
    <>
      {isMounted ? (
        <div
          ref={homeRef}
          className="bg-[url('/img/ui/background.png')] bg-no-repeat bg-cover -z-10 overflow-hidden"
        >
          <div className="max-w-[1920px] mx-auto">
            <Header />
            <Hero />
            <Claim />
            <Evms />
            <Trending />
            <Recent />
            <div className="lg:bg-[url('/img/ui/pizza.png')] bg-no-repeat bg-center bg-contain ">
              <Proposition />
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
export default Home;
