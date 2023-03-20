import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {Discord, Instagram, Telegram, Tiktok, Twitter,} from '../icons';

const Footer = () => {
  return (
    <div className="mt-9">
      <footer id="footer" className="text-gray-600 body-font">
        <div className="container py-24 px-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <div className="flex gap-2 sm:gap-3 pr-2">
              <div data-animate className="min-w-[60px] h-[60px]">
                <Image
                  src={'/img/ui/logo.png'}
                  width={60}
                  height={60}
                  alt="logo"
                />
              </div>
              <div className="flex items-center lg:block">
                <h3
                  data-animate
                  className="text-[32px] text-white font-engagement text-left"
                >
                  Satoshi Studio
                </h3>
                <p
                  data-animate
                  className="mt-2 text-sm text-gray-500 hidden lg:block"
                >
                  Adding value to the Bitcoin network through social innovation
                  and art
                </p>
                <Link href={'/donate'} passHref>
                  <button className="bg-primary -translate-x-3 lg:block rounded-2xl w-[202px] h-[49px] text-xl text-white uppercase font-bold font-dm-sans mt-7 hover:bg-opacity-80 transition-all duration-200 ease-in-out">
                    donate
                  </button>
                </Link>
              </div>
            </div>
            <p
              data-animate
              className="mt-2 text-sm text-gray-500 block lg:hidden"
            >
              Adding value to the Bitcoin network through social innovation and
              art
            </p>
          </div>
          <div className="flex-grow flex flex-wrap xl:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                data-animate
                className="font-dm-sans font-bold text-white tracking-widest text-lg  mb-3"
              >
                Maketplace
              </h2>
              <ul className="list-none mb-10 space-y-4">
                <li data-animate>
                  <Link
                    href=""
                    className="text-[#B9B8BB] hover:text-opacity-80"
                  >
                    Explore
                  </Link>
                </li>
                <li data-animate>
                  <Link
                    href=""
                    className="text-[#B9B8BB] hover:text-opacity-80"
                  >
                    Top by volume
                  </Link>
                </li>
                <li data-animate>
                  <Link
                    href=""
                    className="text-[#B9B8BB] hover:text-opacity-80"
                  >
                    Trending
                  </Link>
                </li>
                <li data-animate>
                  <Link
                    href=""
                    className="text-[#B9B8BB] hover:text-opacity-80"
                  >
                    Top Collectors
                  </Link>
                </li>
                <li data-animate>
                  <Link
                    href=""
                    className="text-[#B9B8BB] hover:text-opacity-80"
                  >
                    New Collections
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                data-animate
                className="font-dm-sans font-bold text-white tracking-widest text-lg  mb-3"
              >
                Company
              </h2>
              <ul className="list-none mb-10 space-y-4">
                <li data-animate>
                  <Link
                    href=""
                    className="text-[#B9B8BB] hover:text-opacity-80"
                  >
                    About Us
                  </Link>
                </li>
                <li data-animate>
                  <Link
                    href="/donate"
                    className="text-[#B9B8BB] hover:text-opacity-80"
                  >
                    Donate
                  </Link>
                </li>
                <li data-animate>
                  <Link
                    href=""
                    className="text-[#B9B8BB] hover:text-opacity-80"
                  >
                    Copyright Policy
                  </Link>
                </li>
                <li data-animate>
                  <Link
                    href=""
                    className="text-[#B9B8BB] hover:text-opacity-80"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li data-animate>
                  <Link
                    href="/privacy-policy"
                    className="text-[#B9B8BB] hover:text-opacity-80"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                data-animate
                className="font-dm-sans font-bold text-white tracking-widest text-lg  mb-3"
              >
                Resources
              </h2>
              <ul className="list-none mb-10 space-y-4">
                <li data-animate>
                  <Link
                    href="/lite-paper"
                    className="text-[#B9B8BB] hover:text-opacity-80"
                  >
                    Lite Paper
                  </Link>
                </li>
                <li data-animate>
                  <Link
                    href="/faqs"
                    className="text-[#B9B8BB] hover:text-opacity-80"
                  >
                    FAQs
                  </Link>
                </li>
                <li data-animate>
                  <Link
                    href=""
                    className="text-[#B9B8BB] hover:text-opacity-80"
                  >
                    Github
                  </Link>
                </li>
                <li data-animate>
                  <Link
                    href=""
                    className="text-[#B9B8BB] hover:text-opacity-80"
                  >
                    Roadmap
                  </Link>
                </li>
                <li data-animate>
                  <Link
                    href=""
                    className="text-[#B9B8BB] hover:text-opacity-80"
                  >
                    Ordinals
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full flex items-center justify-center">
              <div className="">
                <h2
                  data-animate
                  className="font-dm-sans font-bold text-white tracking-widest text-lg  mb-3"
                >
                  Join our community
                </h2>
                <p data-animate className="text-sm text-[#B9B8BB] mt-5">
                  To stay updated with our latest news and updates
                </p>
                <div className="mt-6 flex justify-center flex-wrap gap-3">
                  <Link
                    href="https://twitter.com/satoshisnft"
                    passHref
                    target={'_blank'}
                  >
                    <div
                      data-animate
                      className="w-10 h-10 rounded-lg bg-[#28303F] flex justify-center items-center hover:bg-opacity-80"
                    >
                      <Twitter />
                    </div>
                  </Link>
                  <Link
                    href="https://instagram.com/satoshistudio?igshid=YmMyMTA2M2Y="
                    passHref
                    target={'_blank'}
                  >
                    <div
                      data-animate
                      className="w-10 h-10 rounded-lg bg-[#28303F] flex justify-center items-center hover:bg-opacity-80"
                    >
                      <Instagram />
                    </div>
                  </Link>
                  {/* <Link href="">
                    <div
                      data-animate
                      className="w-10 h-10 rounded-lg bg-[#28303F] flex justify-center items-center"
                    >
                      <Facebook />
                    </div>
                  </Link> */}
                  <Link
                    href="https://t.me/SatoshiStudioAnnounce"
                    target={'_blank'}
                    passHref
                  >
                    <div
                      data-animate
                      className="w-10 h-10 rounded-lg bg-[#28303F] flex justify-center items-center hover:bg-opacity-80"
                    >
                      <Telegram />
                    </div>
                  </Link>
                  {/* <Link href="">
                    <div
                      data-animate
                      className="w-10 h-10 rounded-lg bg-[#28303F] flex justify-center items-center"
                    >
                      <Youtube />
                    </div>
                  </Link> */}
                  <Link
                    href="https://www.tiktok.com/@satoshisnft"
                    target={'_blank'}
                    passHref
                  >
                    <div
                      data-animate
                      className="w-10 h-10 rounded-lg bg-[#28303F] flex justify-center items-center hover:bg-opacity-80"
                    >
                      <Tiktok />
                    </div>
                  </Link>
                  <Link
                    href="https://discord.gg/qbzG3M59nN"
                    target={'_blank'}
                    passHref
                  >
                    <div
                      data-animate
                      className="w-10 h-10 rounded-lg bg-[#28303F] flex justify-center items-center hover:bg-opacity-80"
                    >
                      <Discord />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
