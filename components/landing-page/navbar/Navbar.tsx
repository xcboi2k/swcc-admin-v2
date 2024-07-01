import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation'

import { FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaBell, FaUser, FaSearch } from "react-icons/fa";
import { FaXTwitter, FaAngleDown } from "react-icons/fa6";

import SWCCLogo from '@/public/logos/swccLogo.png'

const Navbar = () => {
    const router = useRouter()
    return (
        <div>
            <div className="flex items-center justify-between bg-secondary1 py-4 px-20">
                <div className="flex items-center">
                    <div className="flex items-center mr-6">
                        <div className="text-white mr-2">
                            <FaPhoneAlt />
                        </div>
                        <span className="text-white mr-4">(02) 8888 8888</span>
                    </div>
                    <div className="flex">
                        <a href="#" className="text-[20px] text-white mr-4">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-[20px] text-white mr-4">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-[20px] text-white mr-4">
                            <FaXTwitter />
                        </a>
                        <a href="#" className="text-[20px] text-white">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
                <nav>
                    <ul className="flex">
                        <li className="mr-4">
                            <a href="#" className="text-white">FAQs</a>
                        </li>
                        <li className="mr-4">
                            <a href="#" className="text-white">Contact Us</a>
                        </li>
                        <li className="mr-4">
                            <a href="#" className="text-white">Privacy Policy</a>
                        </li>
                        <li className="mr-4">
                            <a href="#" className="text-white">Terms and Conditions</a>
                        </li>
                        <li>
                            <a href="swcc://" target="_blank" className="text-white">Open App</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex items-center justify-between py-10 px-20">
                <div className="mr-[30px] flex items-center">
                    <Image src={SWCCLogo} alt="landing-page-logo" width={100} height={100} className='mr-[20px]'/>
                    <div className="text-[60px] font-bold text-secondary2 text-center">SWCC</div>
                </div>
                <div className="flex items-center">
                    <button className="px-[45px] py-[15px] inline-block rounded-full bg-secondary1"
                        onClick={() => router.push('/login')}>
                        <div className="flex items-center">
                            <div className="text-[16px] text-primary text-center font-bold">Log In</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar