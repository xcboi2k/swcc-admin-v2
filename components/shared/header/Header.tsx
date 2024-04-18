import Image from 'next/image'
import React from 'react'

import SWCCLogo from '@/public/logos/swccLogo.png'
import AdminImage from '@/public/images/admin.jpg'

const Header = () => {
    return (
        <div className='flex flex-col'>
            <div className="flex items-center justify-between py-10 px-20">
                <div className="mr-[30px] flex items-center">
                    <Image src={SWCCLogo} alt="landing-page-logo" width={100} height={100} className='mr-[20px]'/>
                    <div className="text-[60px] font-bold text-secondary2 text-center">SWCC</div>
                </div>
                <div className="flex items-center">
                    <button className="px-[5px] py-[5px] inline-block rounded-full bg-secondary1"
                        // onClick={() => router.push('/login')}
                    >
                        <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
                            <Image src={AdminImage} alt="profile" width={100} height={100} className='w-full h-full object-cover'/>
                        </div>
                        {/* <div className="flex items-center">
                            <div className="text-[16px] text-primary text-center font-bold">Log In</div>
                        </div> */}
                    </button>
                </div>
            </div>
            {/* <div className="border-b-2 border-secondary1"></div> */}
        </div>
        
    )
}

export default Header