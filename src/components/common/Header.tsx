import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {Fire, Menu, Moon} from '../icons';
import dynamic from 'next/dynamic';

const Drawer = dynamic(() => import('react-modern-drawer'), { ssr: false });

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="font-dm-sans">
      <div className="px-[3%] xl:px-[7%] 2xl:px-[10%] py-4 md:py-8 flex items-center justify-between">
        <Link href={'/'}>
          <div className="flex items-center pr-2">
            <Image src={'/img/ui/logo.png'} width={60} height={60} alt="logo" />
            <h3 className="text-[28px] xl:text-[32px] text-white font-engagement">
              Satoshi Studio
            </h3>
          </div>
        </Link>
        <button
          onClick={toggleDrawer}
          className="text-white text-4xl -translate-y-1 sm:-translate-y-3 lg:hidden"
        >
          <Menu />
        </button>
        <div className="hidden lg:flex items-center gap-9 xl:gap-12">
          <nav className="hidden md:block">
            <ul className="flex items-center gap-3 md:gap-5 xl:gap-10 text-white">
              <li className="px-2">
                <Link className="hover:text-primary duration-300" href={'/'}>
                  Marketplace
                </Link>
              </li>
              <li className="px-2">
                <Link
                  href={'/'}
                  className="flex items-center hover:text-primary duration-300"
                >
                  Claim <Fire className="ml-1" />
                </Link>
              </li>
              <li className="relative group px-2 border-2 border-[#B04242] rounded-full">
                <Link
                  className="group-hover:text-primary duration-300"
                  href={'/'}
                >
                  Create
                </Link>
                <ul className="absolute top-full group-hover:block hidden whitespace-nowrap">
                  <li className="mt-2">
                    <Link
                      className="font-dm-sans hover:text-primary"
                      href={'#'}
                    >
                      Inscribe New Ordinal
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="font-dm-sans hover:text-primary"
                      href={'#'}
                    >
                      Launch Collection
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="font-dm-sans hover:text-primary"
                      href={'#'}
                    >
                      Creator Partnership Program
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="px-2">
                <Link className="hover:text-primary duration-300" href={'/'}>
                  Github
                </Link>
              </li>
              <li className="px-2">
                <Link className="hover:text-primary duration-300" href={'/lite-paper'}>
                  Ultra litepaper
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <button className="font-bold text-white py-3 px-10 xl:px-[62px] rounded-full border border-primary bg-[#1F1F2CE5] hover:text-primary duration-300">
              Connect
            </button>
            <div className="group rounded-full border bg-[#1F1F2C] border-[#28303F] hover:border-primary duration-300 px-3 py-3 cursor-pointer">
              <Moon className="text-[#B9B8BB] group-hover:text-primary duration-300" />
            </div>
          </div>
        </div>
      </div>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
        <div className="p-5 bg-[#1F1F2C] min-h-full text-white/80">
          <div className="flex items-center gap-3">
            <button className="font-bold text-white py-3 px-10 xl:px-[62px] rounded-full border border-primary bg-[#1F1F2CE5] hover:text-primary duration-300">
              Connect
            </button>
            <div className="group rounded-full border bg-[#1F1F2C] border-[#28303F] hover:border-primary duration-300 px-3 py-3 cursor-pointer">
              <Moon className="text-[#B9B8BB] group-hover:text-primary duration-300" />
            </div>
          </div>
          <div className="mt-5">
            <Link href={'/'}>
              <div className="flex items-center pr-2">
                <Image
                  src={'/img/ui/logo.png'}
                  width={60}
                  height={60}
                  alt="logo"
                />
                <h3 className="text-[28px] xl:text-[32px] text-white font-engagement">
                  Satoshi Studio
                </h3>
              </div>
            </Link>
          </div>
          <ul onClick={toggleDrawer} className="mt-5 text-lg space-y-2">
            <li className="px-2 hover:text-primary">
              <Link scroll={false} href={'#marketplace'}>
                Marketplace
              </Link>
            </li>
            <li className="px-2 hover:text-primary">
              <Link scroll={false} href={'#claim'}>
                Claim
              </Link>
            </li>
            <li className="px-2 hover:text-primary">
              <Link scroll={false} href={'#claim'}>
                Create
              </Link>
            </li>
            <li className="px-2 hover:text-primary">
              <Link scroll={false} href={'/#github'}>
                Github
              </Link>
            </li>
            <li className="px-2 hover:text-primary">
              <Link scroll={false} href={'/#ultra_litepaper'}>
                Ultra litepaper
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};
export default Header;
