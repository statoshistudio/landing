import Head from 'next/head';
import {Footer, Header} from '@app/components';
import {useEffect, useRef, useState} from 'react';
import gsap from 'gsap';
import {useMediaQuery} from 'react-responsive';

const PrivacyPolicyPage = () => {
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
  const policies: Record<string, Record<string, string>> = {
    'Varieties of Data We Gather': {
      content: `“Personal Data” denotes data that can be utilized to distinguish you as an individual, such as your name, email address, and other non-public data connected to or linked with the above. “Anonymous Data” means data, including aggregated and de-identified data, that is not connected to or linked with your Personal Data. Anonymous Data on its own does not enable the identification of specific individuals. We gather Anonymous Data and Personal data you provide to us as specified below.`,
    },
    'Data You Provide to us': {
      content: `When you use our service, modify your account profile, or communicate with us, we may gather anonymous data from you, and personal data such as username, and any other information you provide. We also gather your blockchain address, which may become linked with username when you use our Service.\n\nOur Service enables you to save preferences like how your content is displayed, notification settings, and favorites. We may link these preferences to your ID, browser, or mobile device.\n\nIf you provide us with feedback or contact us, we will collect your name and contact information, as well as any other content included in the message.\n\nWe may also gather Personal Data at other points in our Service where you voluntarily provide it or where we state that Personal Data is being collected.`,
    },
    'Data Collected through technology': {
      content: `As you navigate through and interact with our Service, we may use automatic data collection technologies to collect specific information about your equipment, browsing actions, and patterns, including:`,
    },
    'Data Collected by our Servers': {
      content: `To provide our Service and make it more beneficial to you, we (or a third-party service provider) collect information from you, including, but not limited to, your browser type, operating system, Internet Protocol (“IP”) address, mobile device ID, blockchain address, wallet type, and date/time stamps.`,
    },
    'Log Files': {
      content: `Like most websites and applications, we automatically gather certain information and save it in log files. This information includes IP addresses, browser type, Internet service provider (“ISP”), referring/exit pages, operating system, date/time stamps, and clickstream data. We use this information to analyze trends, administer the Service, track users’ movements around the Service, and better tailor our Services to our users’ needs. For example, some of the information may be collected so that when you visit the Service, it will recognize you and the information can be used to personalize your experience.`,
    },
    Cookies: {
      content: `Like many online services, we use cookies to collect information. We may use both session Cookies (which expire once you close your web browser) and persistent Cookies (which stay on your computer until you delete them) to analyze how users interact with our Service, improve our product quality, and provide users with a more personalized experience.\n\nHow We Respond to Do Not Track Signals. Currently, our systems do not recognize “do not track” signals or other mechanisms that might enable Users to opt out of tracking on our site.`,
    },
  };

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
            <div className="font-dm-sans px-[7%] 2xl:px-[10%] font-dm-sans mt-28 xl:mt-[70px] text-white xl:pb-[75px]">
              <h1
                data-animate
                className="text-2xl xs:text-3xl sm:text-4xl md:text-[40px] font-bold"
              >
                Privacy Policy
              </h1>

              {Object.keys(policies).map((key) => {
                const value = policies[key];
                return (
                  <div key={key} className="flex flex-col mt-[70px]">
                    <h4 className={'text-[24px] mb-[50px]'}>{key}</h4>
                    {divider}
                    <p className="block mt-[30px] text-[#B9B8BB]">
                      {value['content']}
                    </p>
                  </div>
                );
              })}

              <div className="flex flex-col mt-[70px]">
                <h4 className={'text-[24px] mb-[50px]'}>Analytics Services</h4>
                {divider}
                <div className="block mt-[30px] text-[#B9B8BB]">
                  <p className={'mb-10'}>
                    In addition to the tracking technologies we use like Cookies
                    and Pixel Tags, other companies may set their own cookies or
                    similar tools when you visit our Service. This includes
                    third-party analytics services (“Analytics Services”) that
                    we engage to help analyze how users use the Service. The
                    information generated by the Cookies or other technologies
                    about your use of our Service (the “Analytics Information”)
                    is transmitted to the Analytics Services. The Analytics
                    Services use Analytics Information to compile reports on
                    user activity, which we may receive on an individual or
                    aggregate basis. We use the information we get from
                    Analytics We utilize your personal data to operate our
                    business, personalize your experience on our service,
                    enhance the service, and provide the service. Our specific
                    uses of your personal data include:
                  </p>
                  <ol
                    className={'mb-10 list-inside pl-4'}
                    style={{ listStyleType: 'lower-alpha' }}
                  >
                    <li>
                      Securing your account creation and facilitating its
                      management.
                    </li>
                    <li>Identifying you as a user in our system.</li>
                    <li>
                      Providing you with our service, which involves viewing,
                      exploring, and creating NFTs using our tools, as well as
                      connecting with others to buy, sell, or transfer NFTs on
                      public blockchains, at your discretion.
                    </li>
                    <li>
                      Enhancing the administration of our service and user
                      experience by analyzing how users interact with the
                      service.
                    </li>
                    <li>
                      Providing customer support and responding to your
                      inquiries.
                    </li>
                    <li>
                      Investigating and addressing conduct that may violate our
                      terms of service.
                    </li>
                    <li>
                      Detecting, preventing, and addressing fraud, violations of
                      our policies or terms, and other harmful or illegal
                      activity.
                    </li>
                    <li>
                      Displaying your username alongside NFTs that you have
                      accessed or interacted with.
                    </li>
                    <li>
                      Sending you administrative notifications, welcome emails,
                      and notifications related to actions on the service, such
                      as offers on your NFTs.
                    </li>
                    <li>
                      Sending you newsletters, promotional materials, and other
                      notices related to our service or third-party goods and
                      services.
                    </li>
                    <li>
                      Responding to your employment inquiries or other requests.
                    </li>
                    <li>
                      Complying with applicable laws, cooperating with
                      investigations by law enforcement or other authorities of
                      suspected violations of law, and pursuing or defending
                      against legal threats or claims.
                    </li>
                    <li>
                      Acting in any other way that we may specify when you
                      provide your personal data.
                    </li>
                    <li>
                      We may also generate anonymous data records from your
                      personal data, which we use to analyze usage patterns to
                      enhance our service navigation and improve our services.
                      We reserve the right to utilize anonymous data for any
                      purpose and disclose it to third parties without
                      restriction.
                    </li>
                  </ol>
                  <p className={'mb-10'}>
                    In this Privacy Policy, we describe how we disclose your
                    Personal Data to third parties. We may share your anonymous
                    Data with third party service providers to perform various
                    tasks related to our Service, such as technical
                    infrastructure services, quality assurance testing, and
                    customer support. We may also share your Data with our
                    Affiliates and require them to comply with this Privacy
                    Policy.
                  </p>
                  <p className={'mb-10'}>
                    In case of a corporate restructuring, such as a merger or
                    acquisition, we may share some or all of your Personal Data
                    as part of the transaction. If our company goes through
                    insolvency, bankruptcy, or receivership, your Personal Data
                    may be transferred as a business asset to another company.
                    This company will have the same rights and obligations
                    regarding your Personal Data as we do, as described in this
                    Privacy Policy.
                  </p>
                  <p className={'mb-10'}>
                    Satoshi Studio may disclose your Personal Data if it
                    believes that such disclosure is necessary to comply with
                    relevant laws, protect or defend the rights or property of
                    Satoshi Studio or users of the Service, or investigate or
                    prevent any violation of the law, this Privacy Policy, or
                    our Terms of Service. We may also disclose your Personal
                    Data for the purpose for which you provided it, as well as
                    for any other purpose disclosed by us when you provided it,
                    or with your consent.
                  </p>
                  <p className={'mb-10'}>
                    Our Service may include links to third-party websites, and
                    when you click on such links, you will leave our Service and
                    visit another site where another entity may collect your
                    Personal Data. Please note that we have no control over
                    these third-party websites or their content, and we are not
                    responsible for them. The terms of our Privacy Policy do not
                    apply to these third-party websites or their content, and we
                    encourage you to review their privacy policies. Any links to
                    third-party websites or locations are for your convenience
                    only and do not indicate our endorsement of such third
                    parties or their products, content, or websites.
                  </p>
                  <p className={'mb-10'}>
                    To use our Service, you need to use a third-party wallet
                    that enables you to perform transactions on public
                    blockchains, and your interactions with such a third-party
                    wallet provider are governed by their applicable terms of
                    service and privacy policy.
                  </p>
                  <p className={'mb-10'}>
                    You have several options with regard to the use of
                    information on our Service. For instance, you may choose to
                    stop receiving newsletters or promotional emails from us by
                    following the unsubscribe instructions provided in the email
                    you receive or through the Notifications preferences in your
                    Settings page. However, we may still send you occasional
                    transactional service-related informational communications.
                    If you decide that you no longer want to accept Cookies from
                    our Service, you may change your browser settings to prompt
                    you before accepting a Cookie from the websites you visit or
                    to stop accepting Cookies altogether. Please note that if
                    you do not accept Cookies, you may not be able to use all
                    portions or functionality of the Service.
                  </p>
                  <p className={'mb-10'}>
                    You can view, access, edit, or delete your Personal Data for
                    certain aspects of the Service through your Settings page.
                    If you are a user in the European Economic Area or United
                    Kingdom, you have certain rights under GDPR, including the
                    right to request access, rectification, erasure, restriction
                    of processing, and portability of your Personal Data, as
                    well as the right to withdraw your consent at any time. If
                    you are a California resident, you have certain rights under
                    CCPA, including the right to request access to, deletion of,
                    and opt-out of the sale of your personal information. If you
                    wish to exercise your rights under these laws or other
                    applicable data protection or privacy laws, please contact
                    us by using the “Submit a request” link or the address
                    provided in Section 13 below, and we will act upon your
                    request in accordance with applicable law.
                  </p>
                  <p className={'mb-10'}>
                    Please note that we cannot edit or delete any information
                    stored on a blockchain, such as the Ethereum blockchain,
                    because we do not have custody or control over any
                    blockchains. The information stored on the blockchain may
                    include purchases, sales, and transfers related to your
                    blockchain address and NFTs held at that address.
                  </p>
                  <p className={'mb-10'}>
                    We may keep your Personal Data as long as you use our
                    Service or have an account with us, or as long as needed to
                    fulfill the purposes outlined in this Privacy Policy. If you
                    deactivate your account or stop using our Service, we may
                    still retain your Personal Data if we need to comply with
                    legal obligations, resolve disputes, prevent fraud and
                    abuse, enforce our Terms or other agreements, or protect our
                    legitimate interests. However, once your Personal Data is no
                    longer needed for these purposes, we will delete it.
                  </p>
                  <p className={'mb-10'}>
                    We take the security of your information seriously and use
                    various measures to ensure the safety and integrity of the
                    information collected through our Service. However, no
                    security system is completely impenetrable, and we cannot
                    guarantee that our systems will never be compromised. If any
                    information under our control is breached, we will
                    investigate and remediate the situation and, in accordance
                    with applicable laws, notify the affected individuals.
                  </p>
                  <p className={'mb-10'}>
                    You are responsible for keeping your digital wallet secure,
                    and we encourage you to take necessary precautions. If you
                    encounter any issues related to your wallet, please contact
                    your wallet provider.
                  </p>
                  <p className={'mb-10'}>
                    We do not intentionally collect Personal Data from visitors
                    under 13 years old, and our Terms of Service require all
                    users to be at least 18 years old. Minors between 13 and 18
                    years old may use their parent or guardian&apos;s Satoshi
                    Studio account with their involvement. If we learn that we
                    have collected Personal Data from a child under 13, we will
                    promptly delete the information. Please contact us if you
                    believe we have collected Personal Data from a child under
                    13.
                  </p>
                  <p className={'mb-10'}>
                    Your Personal Data may be processed in the country where it
                    was collected or in other countries, including the United
                    States, where data protection laws may be less strict than
                    those in your country. By providing your Personal Data, you
                    consent to such processing and transfer.
                  </p>
                  <p className={'mb-10'}>
                    We may update this Privacy Policy at any time, and we will
                    notify you of any changes by posting the revised Privacy
                    Policy on our website. Please check our Service and this
                    Privacy Policy periodically for any updates.
                  </p>
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

export default PrivacyPolicyPage;