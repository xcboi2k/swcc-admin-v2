import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="flex flex-col py-10 px-20 bg-secondary1">
                {/* <div className="w-1/3 flex gap-[80px]">
                    <div className="flex flex-col">
                        <div className="text-[16px] text-white mb-2">
                            About Us
                        </div>
                        <div className="text-[16px] text-white mb-2 ">
                            Contact Us
                        </div>
                    </div>
                </div> */}
                <div className="w-full flex flex-col mb-6">
                    <div className="text-[25px] font-bold text-primary mb-2">
                        DISCLAIMER
                    </div>
                    <div className="text-[15px] text-white mb-2">
                        Images and information used are from
                        galacticfigures.com.
                        <br />
                        Visit their site for more information.
                    </div>
                    <div className="text-[15px] text-white mb-2">
                        Credits to the owner of the images used.
                    </div>
                </div>
                <div className="w-full flex flex-col mb-2">
                    <span className="text-white text-[12px]">
                        &copy; {new Date().getFullYear()} Jose Alexei Garcia.
                        All Rights Reserved.
                    </span>
                </div>
            </div>
        </>
    )
}

export default Footer
