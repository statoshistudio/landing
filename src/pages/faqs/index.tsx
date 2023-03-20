import Head from 'next/head';
import {Footer, Header} from '@app/components';
import {useCallback, useEffect, useRef, useState} from 'react';
import gsap from 'gsap';
import {useMediaQuery} from 'react-responsive';
import {useReferredState} from '@app/utils/hooks';

const FAQPage = () => {
  const [isMounted, setMounted] = useState(false);
  const homeRef = useRef(null);
  const [openedAccordion, openedAccordionRef, setOpenedAccordion] =
    useReferredState<string[]>([]);

  const isTablet = useMediaQuery({ minWidth: '768px' });

  const createAccordion = useCallback(() => {
    const menus = gsap.utils.toArray<Element>('[data-accordion-header]');

    const open = (content: Element, headerIndex: string, menu: Element) => {
      setOpenedAccordion((prev: any) => {
        return [...prev, headerIndex!];
      });

      gsap.to(content, {
        height: 'auto',
        duration: 0.25,
        ease: 'easeOut',
        overwrite: true,
        onStart: () => {
          gsap.to(menu.querySelector('[data-accordion-indicator]')!, {
            height: 'auto',
            duration: 0.25,
            rotate: 45,
            ease: 'easeOut',
          });
        },
      });
    };

    const close = (content: Element, headerIndex: string, menu: Element) => {
      setOpenedAccordion((prev: any[]) =>
        prev.filter((element) => element !== headerIndex)
      );
      gsap.to(content, {
        height: 0,
        overwrite: true,
        ease: 'easeIn',
        duration: 0.25,
        onStart: () => {
          gsap.to(menu.querySelector('[data-accordion-indicator]')!, {
            height: 'auto',
            duration: 0.25,
            rotate: 0,
            ease: 'easeIn',
          });
        },
      });
    };

    menus.forEach((menu) => {
      const box = menu.parentNode?.querySelector('[data-accordion-content]');

      const headerIndex = menu.getAttribute('data-accordion-header');

      const listener = () => {
        console.log('header');
        if (openedAccordionRef.current.includes(headerIndex!)) {
          close(box!, headerIndex!, menu);
          return;
        }
        open(box!, headerIndex!, menu);
      };

      if (!menu.getAttribute('data-active-listener')) {
        menu.addEventListener('click', listener);
        menu.setAttribute('data-active-listener', 'true');
      }
    });
  }, [isMounted, openedAccordion, openedAccordionRef.current]);

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

  useEffect(() => {
    return createAccordion();
  }, [isMounted]);

  const faqs = [
    {
      title: 'What are Inscriptions?',
      content:
        'Inscriptions are blobs of arbitrary data and associated metadata, the latter of which tells a Bitcoin node how to render said data. Satoshis can be inscribed with various content through inscriptions, which result in the creation of digital assets that are native to the Bitcoin network. These assets or digital artifacts are often referred to as NFTs (non-fungible tokens).',
    },
    {
      title: 'What are ordinals?',
      content:
        'Ordinals are individual satoshis (sats), which are currently the smallest Bitcoin denomination (each 1 BTC = 100m satoshis). The term ordinal comes from what creator Casey Rodarmor calls “Ordinals Theory”. The unique numbering scheme for satoshis that allows tracking and transferring individual sats is called Ordinals. Ordinals are the equivalent of NFTs on the bitcoin network.',
    },
    {
      title: 'What is Ordinal Theory?',
      content:
        'Ordinal Theory is the idea that individual satoshis can be labeled and tracked across Bitcoin’s supply (UTXO set). The methodology is designed to monitor the movement of satoshis from the moment they are minted through their entire transaction history, recording each transfer as they occur on the Bitcoin blockchain ledger.',
    },
    {
      title: 'What is a Satoshi?',
      content:
        "Satoshis(sats) are currently the smallest Bitcoin denomination (1 BTC = 100m satoshis). It is named after Bitcoin's creator, Satoshi Nakamoto. Satoshi units are commonly used in Bitcoin transactions and are tracked and transferred through the blockchain ledger.",
    },
    {
      title: 'How can I inscribe my Ordinal on Satoshi Studio?',
      content:
        'Create your account and ordinal wallet. Next fund your wallet with bitcoin to pay for transaction fees. Click on “Inscribe New Ordinal” from the Create menu. Supply the required information and/or image file and select your transaction fee. Click Inscribe to create your ordinal.',
    },
    {
      title: 'I am a creator, how can I create a new collection?',
      content:
        'First, set up your account and Bitcoin ordinal wallet. Then, deposit Bitcoin into your wallet to cover any transaction fees. From the "Create” menu on the homepage, click “Launch Collection” and follow the prompts to supply all necessary information required for your new collection.',
    },
    {
      title: 'Why a self custody wallet?',
      content:
        'A self-custody wallet is a type of digital wallet for cryptocurrencies that allows users to have complete control over their funds and private keys. This provides better protection for user assets compared to custodial wallets as seen on exchanges. Self-custody wallets also allow users to keep their cryptocurrency transactions private and anonymous and allows users to transact in a decentralized manner. \n' +
        'Overall, a self-custody wallet can provide increased security, privacy, and control over cryptocurrency funds. However, it also requires more responsibility on the part of the user to protect their private keys and ensure the safe storage of their cryptocurrency.',
    },
    {
      title: 'How can I fund my Ordinal wallet?',
      content: `After creating your Ordinal wallet (taproot wallet) on Satoshi Studio, you can fund it by simply sending bitcoin from a non Bitcoin Taproot wallet if you have one or from an exchange that supports taproot addresses e.g Binance.\nClick Wallet from the homepage or from your account page and then click “receive” to view your unique ordinal wallet address. Send bitcoin to this address to fund it. Please note this address is a Taproot bitcoin address and not a Segwit address.`,
    },
    {
      title: 'Can I use other bitcoin wallets?',
      content: `Ordinal wallets are Taproot wallets which can generate taproot addresses. You can use other bitcoin wallets as long as they are taproot wallets e.g sparrow wallet. However you are advised to send your bitcoin for fees to your satoshi studio ordinal wallet for the best experience on the platform. After Inscribing or trading, Ordinal NFTs can be stored in or withdrawn from your satoshi studio ordinal wallet to other bitcoin taproot wallets. `,
    },
    {
      title: 'What is IPFS?',
      content: `IPFS (InterPlanetary File System) is a protocol and network designed to create a peer-to-peer method of storing and sharing hypermedia in a distributed file system. It aims to provide a more secure, efficient, and permanent way of storing and accessing files, data, and applications on the internet.`,
    },
    {
      title: 'Why use IPFS?',
      content: `IPFS helps to reduce network bloat and the transaction cost of inscribing ordinals on the bitcoin blockchain. Most NFTs on all other blockchains, utilizes the InterPlanetary File System (IPFS) as a more secure and permanent storage means for the lager media file while the metadata is stored on-chain. 
The Bitcoin community has been debating over the fear that Bitcoin NFT Ordinals will negatively affect the bitcoin blockchain by filling up the 4MB block space with less important JPEGs and data. This in theory can slow down the network and increase transaction cost. Satoshi studio provides the option of using IPFS for media storage, ensuring the Bitcoin blockchain is kept light and fast while maintaining decentralization.

IPFS storage system for NFTs also makes dynamic NFTs possible such as weapon upgrade in gaming collectibles, ticket upgrade for an exclusive club NFT ticket collection.  
`,
    },
    {
      title:
        'Why Inscribe my NFTs from other blockchains as Ordinals on the bitcoin network?',
      content: `Your NFTs on Ethereum, Solana and other EVM chains (like BSC, Polygon, FTM) can have their metadata inscribed on the bitcoin network which is undisputedly the most secure and decentralized blockchain. This has the potential to add value to these NFTs and expose them to a wider bitcoin community. 
Representing original NFT collections from other blockchains by the NFT creators and their community will also help curb opportunists who steal art from other blockchains to create ordinals and benefit unjustly from the effort of others. The presence of verifiable original NFTs makes clones irrelevant.
The inscription on bitcoin is not a replacement of the original NFT. Rather it can be seen as a mirror on the bitcoin network that allows holders of the NFTs to enjoy perks on the Bitcoin network that may be attributed to the collection (What we like to call “Proof of Alliance”). For example a collaboration between bitcoin defi protocol - Sovryn and Yuga labs can grant a special fee reduction for holders of BAYC. Satoshi Studio is looking to work with creators of some of the biggest NFT brands in the space. `,
    },
    {
      title: 'How can I inscribe my EVM and Solana NFTs?',
      content: `From the top menu click on the “Claim” button. 
You will be asked to choose the chain that has your current NFTs and then to connect your wallet. Next, proceed with the instructions provided to successfully inscribe a verified Ordinal pointing to your NFT on its parent blockchain.
`,
    },
    {
      title:
        'I am a creator with an NFT collection on another blockchain. How can I earn money from my collection on Satoshi Studio?',
      content: `As a creator with an NFT collection on another blockchain, you can easily earn money on Satoshi Studio by joining the “Satoshi Studio Creator Partnership Program”. Through this program you earn a share of the inscription fees as holders of your collection inscribe their NFTs into ordinals. You also earn from the trading fees as your collections are traded on the Satoshi Studio marketplace. To be part of this program, begin by visiting the partnership program link on the homepage and follow the guidelines to apply.
`,
    },
    {
      title: 'Can I trade my Ordinals on Satoshi Studio?',
      content: `Yes. You can trade your ordinals in a decentralized manner on the SatoshiStudio marketplace. We utilize PSBTS (Partially Signed Bitcoin Transactions) to make it secure and trustless. Visit the “Marketplace” to start trading.
`,
    },
    {
      title: 'What are Satoshis?',
      content: `Satoshis are rare atomic gems that are generated when users perform activities on Satoshi Studio. What they represent is still a mystery and will be revealed in due course. Until then it is advisable to gather those sweet sweet startoshis.
`,
    },
  ];
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
                FAQs
              </h1>

              <div className="flex flex-col pt-[100px]">
                {faqs.map((faq, index) => {
                  return (
                    <div
                      key={`${faq.title}/${index}`}
                      data-accordion={true}
                      className="flex flex-col gap-[16px] mb-[32px]"
                    >
                      <div
                        data-accordion-header={`${index}`}
                        className={
                          'border-t-[3px] cursor-pointer border-b-[3px] w-full border-[#A5A5FF26] py-4 px-2 flex item-center justify-between'
                        }
                      >
                        <h4 className={'font-bold'}>
                          {index + 1}. {faq.title}
                        </h4>
                        <div className="flex items-center">
                          <svg
                            data-accordion-indicator={true}
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.54534 12.5825H11.1408V17.1779C11.1408 17.645 11.525 18.0368 11.9996 18.0368C12.4742 18.0368 12.8584 17.645 12.8584 17.1779V12.5825H17.4538C17.9209 12.5825 18.3126 12.1983 18.3126 11.7237C18.3126 11.2491 17.9209 10.8649 17.4538 10.8649H12.8584V6.26946C12.8584 5.80239 12.4742 5.41064 11.9996 5.41064C11.525 5.41064 11.1408 5.80239 11.1408 6.26946V10.8649H6.54534C6.07826 10.8649 5.68652 11.2491 5.68652 11.7237C5.68652 12.1983 6.07826 12.5825 6.54534 12.5825Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                      <div
                        data-accordion-content={true}
                        className="overflow-hidden h-0"
                      >
                        <p className={'text-[#B9B8BB] pl-7'}>{faq.content}</p>
                      </div>
                    </div>
                  );
                })}
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
