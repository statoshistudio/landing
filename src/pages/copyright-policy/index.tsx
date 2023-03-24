import Head from 'next/head';
import {Footer, Header} from '@app/components';
import React, {useEffect, useRef, useState} from 'react';
import gsap from 'gsap';
import {useMediaQuery} from 'react-responsive';

const CopyrightPolicyPage = () => {
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
        <title>Satoshi Studio ⎯ Copyright Policy</title>
      </Head>
      {isMounted ? (
        <div
          ref={homeRef}
          className="bg-[url('/img/ui/background.png')] bg-no-repeat bg-cover -z-10 overflow-hidden"
        >
          <div className="max-w-[1920px] mx-auto">
            <Header />
            <div className="font-dm-sans px-[7%] 2xl:px-[22.6%] font-dm-sans mt-28 xl:mt-[72px] text-white xl:pb-[75px] leading-10">
              <h1
                data-animate
                className="text-2xl xs:text-3xl sm:text-4xl md:text-[40px] font-bold w-full"
              >
                COPYRIGHT POLICY
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
                      Copyright Infringement Claims
                    </figcaption>
                    {divider}
                    <div className="block mt-[30px] text-[#B9B8BB] font-normal text-[1rem]">
                      <p>
                        If you believe that your copyright-protected work has
                        been used on our platform in a way that constitutes
                        copyright infringement, please contact us immediately at{' '}
                        <a
                          href={`mailto:${process.env.NEXT_PUBLIC_APP_SUPPORT_EMAIL}`}
                        >
                          {process.env.NEXT_PUBLIC_APP_SUPPORT_EMAIL}
                        </a>{' '}
                        and provide the following information:
                      </p>
                      <ol
                        className={'mb-10 mt-10 list-outside pl-4 list-decimal'}
                      >
                        <li>
                          A description of the copyrighted work that you claim
                          has been infringed, including the title, author, and
                          any other identifying information;
                        </li>
                        <li>
                          A description of the material that you claim is
                          infringing and the specific location of the infringing
                          material on our website;
                        </li>
                        <li>
                          Your contact information, including your name, email
                          address, and phone number;
                        </li>
                        <li>
                          A statement that you have a good-faith belief that the
                          use of the copyrighted material is not authorized by
                          the copyright owner, its agent, or the law;
                        </li>
                        <li>
                          A statement that the information in your notice is
                          accurate and, under penalty of perjury, that you are
                          the copyright owner or authorized to act on behalf of
                          the copyright owner.
                        </li>
                      </ol>
                      <p>
                        Upon receipt of a valid notice of copyright
                        infringement, we will promptly investigate the claim and
                        take appropriate action, which may include removing the
                        infringing material from our platform.
                      </p>
                    </div>
                  </figure>
                </li>
                <li className={'text-[24px] font-bold mb-[70px]'}>
                  <figure>
                    <figcaption className={'text-[24px] mb-[50px] font-bold'}>
                      Our Commitment to Copyright Protection
                    </figcaption>
                    {divider}
                    <div className="block mt-[30px] text-[#B9B8BB]  font-normal text-[1rem]">
                      <p>
                        We take copyright protection seriously and have
                        implemented measures to prevent copyright infringement
                        on our platform. These measures include:
                      </p>
                      <ol
                        className={'mb-10 mt-10 list-outside pl-4 list-decimal'}
                      >
                        <li>
                          Prohibiting users from uploading or sharing
                          copyrighted material without the owner&apos;s
                          permission;
                        </li>
                        <li>
                          Providing a reporting mechanism for copyright
                          infringement claims;
                        </li>
                        <li>
                          Regularly reviewing our platform to identify and
                          remove infringing material.
                        </li>
                      </ol>
                      <p>
                        We also encourage creators and artists to report any
                        suspected copyright infringement on our platform so that
                        we can take appropriate action to address the issue.
                      </p>
                    </div>
                  </figure>
                </li>
                <li className={'text-[24px] font-bold mb-[70px]'}>
                  <figure>
                    <figcaption className={'text-[24px] mb-[50px] font-bold'}>
                      Repeat Infringer Policy
                    </figcaption>
                    {divider}
                    <div className="block mt-[30px] text-[#B9B8BB]  font-normal text-[1rem]">
                      <p>
                        We have a zero-tolerance policy for repeat infringers.
                        If we receive multiple notices of copyright infringement
                        from a user, we may terminate their account and prohibit
                        them from using our platform in the future.
                      </p>
                    </div>
                  </figure>
                </li>
                <li className={'text-[24px] font-bold mb-[70px]'}>
                  <figure>
                    <figcaption className={'text-[24px] mb-[50px] font-bold'}>
                      Copyright Ownership
                    </figcaption>
                    {divider}
                    <div className="block mt-[30px] text-[#B9B8BB]  font-normal text-[1rem]">
                      <p>
                        Creators and artists who upload their works to our
                        platform retain ownership of their copyrighted material.
                        By uploading material to our platform, creators grant
                        Satoshi Studio a limited license to display, promote and
                        sell their works.
                      </p>
                    </div>
                  </figure>
                </li>
                <li className={'text-[24px] font-bold mb-[70px]'}>
                  <figure>
                    <figcaption className={'text-[24px] mb-[50px] font-bold'}>
                      Third-Party Copyrights
                    </figcaption>
                    {divider}
                    <div className="block mt-[30px] text-[#B9B8BB]  font-normal text-[1rem]">
                      <p>
                        Satoshi Studio respects the copyrights of third-party
                        materials and has implemented measures to ensure that
                        they are not used on our platform without permission. We
                        prohibit users from uploading or sharing copyrighted
                        materials that they do not have permission to use. We
                        also have a process for addressing third-party copyright
                        infringement claims, which is the same as the process
                        outlined above.
                      </p>
                    </div>
                  </figure>
                </li>
                <li className={'text-[24px] font-bold mb-[70px]'}>
                  <figure>
                    <figcaption className={'text-[24px] mb-[50px] font-bold'}>
                      International Copyright Laws
                    </figcaption>
                    {divider}
                    <div className="block mt-[30px] text-[#B9B8BB]  font-normal text-[1rem]">
                      <p>
                        Satoshi Studio is an international platform and
                        recognizes the importance of complying with copyright
                        laws and regulations worldwide. We comply with the
                        Digital Millennium Copyright Act (DMCA) in the United
                        States and other relevant copyright laws and regulations
                        in other jurisdictions.
                      </p>
                    </div>
                  </figure>
                </li>
                <li className={'text-[24px] font-bold mb-[70px]'}>
                  <figure>
                    <figcaption className={'text-[24px] mb-[50px] font-bold'}>
                      Copyright Education
                    </figcaption>
                    {divider}
                    <div className="block mt-[30px] text-[#B9B8BB]  font-normal text-[1rem]">
                      <p>
                        We believe that education is key to protecting
                        intellectual property rights and preventing copyright
                        infringement. We provide resources and information to
                        creators and users to help them understand copyright
                        laws and regulations and their rights and
                        responsibilities. We also encourage creators to use
                        watermarks or other techniques to protect their works
                        from unauthorized use.
                      </p>
                    </div>
                  </figure>
                </li>
                <li className={'text-[24px] font-bold mb-[70px]'}>
                  <figure>
                    <figcaption className={'text-[24px] mb-[50px] font-bold'}>
                      Contact Information
                    </figcaption>
                    {divider}
                    <div className="block mt-[30px] text-[#B9B8BB]  font-normal text-[1rem]">
                      <p>
                        If you have any questions or concerns about our
                        copyright policy or wish to report copyright
                        infringement on our platform, please contact us at
                        <a
                          href={`mailto:${process.env.NEXT_PUBLIC_APP_SUPPORT_EMAIL}`}
                        >
                          {' '}
                          {process.env.NEXT_PUBLIC_APP_SUPPORT_EMAIL}
                        </a>
                        <p className={'pt-4'}>
                          By using our platform, you agree to comply with our
                          copyright policy.
                        </p>
                      </p>
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

export default CopyrightPolicyPage;
