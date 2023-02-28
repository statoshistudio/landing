import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Fire, Moon } from '../icons';

const Header = () => {
return (
    <div className="font-dm-sans">
        <div className="px-[3%] xl:px-[7%] 2xl:px-[10%] py-8 flex items-center justify-between">
            <Link href={'/'}>
                <div className="flex items-center pr-2">
                    <Image src={"/img/ui/logo.png"} width={60} height={60} alt="logo" />
                    <h3 className='text-[28px] xl:text-[32px] text-white font-engagement'>Satoshi Studio</h3>
                </div>
            </Link>
            <div className="hidden lg:flex items-center gap-9 xl:gap-12">
                <nav className='hidden md:block'>
                    <ul className='flex items-center gap-3 md:gap-5 xl:gap-10 text-white'>
                        <li className='px-2'>
                            <Link className='hover:text-primary duration-300' href={'/'}>Marketplace</Link>
                        </li>
                        <li className='px-2'>
                            <Link href={'/'} className='flex items-center hover:text-primary duration-300'>Claim <Fire className='ml-1' /></Link>
                        </li>
                        <li className='px-2'>
                            <Link className='hover:text-primary duration-300' href={'/'}>Create</Link>
                        </li>
                        <li className='px-2'>
                            <Link className='hover:text-primary duration-300' href={'/'}>Github</Link>
                        </li>
                        <li className='px-2'>
                            <Link className='hover:text-primary duration-300' href={'/'}>Ultra litepaper</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center gap-3">
                    <button className='font-bold text-white py-3 px-10 xl:px-[62px] rounded-full border border-primary bg-[#1F1F2CE5] hover:text-primary duration-300'>Connect</button>
                    <div className="group rounded-full border bg-[#1F1F2C] border-[#28303F] hover:border-primary duration-300 px-3 py-3 cursor-pointer">
                        <Moon className='text-[#B9B8BB] group-hover:text-primary duration-300' />
                    </div>
                </div>
            </div>
        </div>
    </div>
)
};
export default Header;