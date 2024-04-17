"use client"

import Image from 'next/image'
import React from 'react'

import AdminImage from '@/public/images/admin.jpg'
import useGetBA20132014List from '@/hooks/useGetBA20132014List'
import useGetBA20142015List from '@/hooks/useGetBA20142015List'
import useGetBA20152017List from '@/hooks/useGetBA20152017List'
import useGetEX20142015List from '@/hooks/useGetEX20142015List'
import useGetMU20152017List from '@/hooks/useGetMU20152017List'

import { useBA20132014Store } from '@/stores/useBA20132014Store'
import { useBA20142015Store } from '@/stores/useBA20142015Store'
import { useBA20152017Store } from '@/stores/useBA20152017Store'
import { useEX20142015Store } from '@/stores/useEX20142015Store'
import { useMU20152017Store } from '@/stores/useMU20152017Store'

const CollectionsPreview = () => {
    // get list hooks
    useGetBA20132014List();
    useGetBA20142015List();
    useGetBA20152017List();
    useGetEX20142015List();
    useGetMU20152017List();

    // lists
    const BA20132014List: any[] = useBA20132014Store((state) => state.figures)
    const BA20142015List: any[] = useBA20142015Store((state) => state.figures)
    const BA20152017List: any[] = useBA20152017Store((state) => state.figures)
    const EX20142015List: any[] = useEX20142015Store((state) => state.figures)
    const MU20152017List: any[] = useMU20152017Store((state) => state.figures)
    console.log(MU20152017List)

    return (
        <div className="flex flex-col items-center justify-between py-10 px-20">
            <div className="mr-[30px] flex items-center">
                <div className="text-[45px] font-bold text-secondary2">Collections</div>
            </div>
            <div className="w-full flex flex-col py-10">
                <div className='flex items-center justify-between'>
                    <div className="text-[25px] font-semibold text-secondary2">Basic Assortment 2013-2014</div>
                    <button className="px-[45px] py-[15px] inline-block rounded-full bg-secondary1"
                        // onClick={() => router.push('/login')}
                    >
                        <div className="flex items-center">
                            <div className="text-[16px] text-primary text-center font-bold">View All</div>
                        </div>
                    </button>
                </div>
                <div className="grid grid-cols-5 mt-[15px]">
                    {
                        BA20132014List?.map((item, index) => (
                            <>
                                <a href="#" className="w-60 h-100 bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:bg-primary" key={index}>
                                    <Image src={item.photoUrl} alt="profile" width={100} height={100} quality={100}
                                    className='w-60 h-80 object-cover rounded-md mb-2'/>
                                    <div className="text-[18px] text-secondary1 text-center font-semibold">{item.figure_name}</div>
                                    <div className="text-[14px] text-secondary1 text-center italic">({item.figure_version})</div>
                                </a>
                            </>
                        ))
                    }
                </div>
            </div>
            <div className="w-full flex flex-col py-10">
                <div className='flex items-center justify-between'>
                    <div className="text-[25px] font-semibold text-secondary2">Basic Assortment 2014-2015</div>
                    <button className="px-[45px] py-[15px] inline-block rounded-full bg-secondary1"
                        // onClick={() => router.push('/login')}
                    >
                        <div className="flex items-center">
                            <div className="text-[16px] text-primary text-center font-bold">View All</div>
                        </div>
                    </button>
                </div>
                <div className="grid grid-cols-5 mt-[15px]">
                    {
                        BA20142015List?.map((item, index) => (
                            <>
                                <a href="#" className="w-60 h-100 bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:bg-primary" key={index}>
                                    <Image src={item.photoUrl} alt="profile" width={100} height={100} quality={100}
                                    className='w-60 h-80 object-cover rounded-md mb-2'/>
                                    <div className="text-[18px] text-secondary1 text-center font-semibold">{item.figure_name}</div>
                                    <div className="text-[14px] text-secondary1 text-center italic">({item.figure_version})</div>
                                </a>
                            </>
                        ))
                    }
                </div>
            </div>
            <div className="w-full flex flex-col py-10">
                <div className='flex items-center justify-between'>
                    <div className="text-[25px] font-semibold text-secondary2">Basic Assortment 2015-2017</div>
                    <button className="px-[45px] py-[15px] inline-block rounded-full bg-secondary1"
                        // onClick={() => router.push('/login')}
                    >
                        <div className="flex items-center">
                            <div className="text-[16px] text-primary text-center font-bold">View All</div>
                        </div>
                    </button>
                </div>
                <div className="grid grid-cols-5 mt-[15px]">
                    {
                        BA20152017List?.map((item, index) => (
                            <>
                                <a href="#" className="w-60 h-100 bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:bg-primary" key={index}>
                                    <Image src={item.photoUrl} alt="profile" width={100} height={100} quality={100}
                                    className='w-60 h-80 object-cover rounded-md mb-2'/>
                                    <div className="text-[18px] text-secondary1 text-center font-semibold">{item.figure_name}</div>
                                    <div className="text-[14px] text-secondary1 text-center italic">({item.figure_version})</div>
                                </a>
                            </>
                        ))
                    }
                </div>
            </div>
            <div className="w-full flex flex-col py-10">
                <div className='flex items-center justify-between'>
                    <div className="text-[25px] font-semibold text-secondary2">Exclusives 2014-2015</div>
                    <button className="px-[45px] py-[15px] inline-block rounded-full bg-secondary1"
                        // onClick={() => router.push('/login')}
                    >
                        <div className="flex items-center">
                            <div className="text-[16px] text-primary text-center font-bold">View All</div>
                        </div>
                    </button>
                </div>
                <div className="grid grid-cols-5 mt-[15px]">
                    {
                        EX20142015List?.map((item, index) => (
                            <>
                                <a href="#" className="w-60 h-100 bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:bg-primary" key={index}>
                                    <Image src={item.photoUrl} alt="profile" width={100} height={100} quality={100}
                                    className='w-60 h-80 object-cover rounded-md mb-2'/>
                                    <div className="text-[18px] text-secondary1 text-center font-semibold ">{item.figure_name}</div>
                                    <div className="text-[14px] text-secondary1 text-center italic">({item.figure_version})</div>
                                </a>
                            </>
                        ))
                    }
                </div>
            </div>
            <div className="w-full flex flex-col py-10">
                <div className='flex items-center justify-between'>
                    <div className="text-[25px] font-semibold text-secondary2">Multipacks 2015-2017</div>
                    <button className="px-[45px] py-[15px] inline-block rounded-full bg-secondary1"
                        // onClick={() => router.push('/login')}
                    >
                        <div className="flex items-center">
                            <div className="text-[16px] text-primary text-center font-bold">View All</div>
                        </div>
                    </button>
                </div>
                <div className="grid grid-cols-5 mt-[15px]">
                    {
                        MU20152017List?.slice(0, 5).map((item, index) => (
                            <>
                                <a href="#" className="w-60 h-100 bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:bg-primary" key={index}>
                                    <Image src={item.photoUrl} alt="profile" width={100} height={100} quality={100}
                                    className='w-60 h-80 object-cover rounded-md mb-2'/>
                                    <div className="text-[18px] text-secondary1 text-center font-semibold">{item.figure_name}</div>
                                    <div className="text-[14px] text-secondary1 text-center italic">({item.figure_version})</div>
                                </a>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CollectionsPreview