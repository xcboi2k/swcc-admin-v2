import React from 'react'

const Footer = () => {
    return (
        <div className="flex flex-row py-20 px-20 bg-secondary1">
            <div className="w-1/3 flex gap-[80px]">
                <div className='flex flex-col'>
                    <div className="text-[16px] text-white mb-2">
                        About Us
                    </div>
                    <div className="text-[16px] text-white mb-2 ">
                        Contact Us
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex flex-col">
                <div className="text-[35px] font-bold text-primary mb-2">
                    DISCLAIMER
                </div>
                <div className="text-[20px] text-white mb-2">
                    Images and information used are from galacticfigures.com.
                    <br />
                    Visit their site for more information.
                </div>
            </div>
        </div>
    )
}

export default Footer