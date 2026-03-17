'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'nextjs-toploader/app'

import SWCCLogo from '@/public/logos/swccLogo.png'
import AdminImage from '@/public/images/admin.jpg'
import useUserStore from '@/stores/useUserStore'

const Header = () => {
    const router = useRouter()
    const setLoggedOut = useUserStore((state) => state.setLoggedOut)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement | null>(null)

    const handleAvatarClick = () => {
        setIsMenuOpen((prev) => !prev)
    }

    const handleLogout = () => {
        setLoggedOut()
        router.push('/')
        setIsMenuOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between py-10 px-20">
                <div className="mr-[30px] flex items-center">
                    <Image
                        src={SWCCLogo}
                        alt="landing-page-logo"
                        width={100}
                        height={100}
                        className="mr-[20px]"
                    />
                    <div className="text-[60px] font-bold text-secondary2 text-center">
                        SWCC
                    </div>
                </div>
                <div className="flex items-center" ref={menuRef}>
                    <button
                        className="px-[5px] py-[5px] inline-block rounded-full bg-secondary1"
                        onClick={handleAvatarClick}
                    >
                        <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
                            <Image
                                src={AdminImage}
                                alt="profile"
                                width={100}
                                height={100}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute right-20 top-[110px] bg-white border border-gray-200 rounded-md shadow-lg z-50">
                            <button
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {/* <div className="border-b-2 border-secondary1"></div> */}
        </div>
    )
}

export default Header
