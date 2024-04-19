"use client"

import React, { useEffect, useState } from 'react'

import { useBA20132014Store } from '@/stores/useBA20132014Store'
import { useBA20142015Store } from '@/stores/useBA20142015Store'
import { useBA20152017Store } from '@/stores/useBA20152017Store'
import { useEX20142015Store } from '@/stores/useEX20142015Store'
import { useMU20152017Store } from '@/stores/useMU20152017Store'
import Image from 'next/image'

type PropType = {
    collection: string,
    id: string,
}

const DetailView: React.FC<PropType> = (props) => {
    const { collection, id } = props

    const BA20132014List: any[] = useBA20132014Store((state) => state.figures)
    const BA20142015List: any[] = useBA20142015Store((state) => state.figures)
    const BA20152017List: any[] = useBA20152017Store((state) => state.figures)
    const EX20142015List: any[] = useEX20142015Store((state) => state.figures)
    const MU20152017List: any[] = useMU20152017Store((state) => state.figures)

    const [figureDetails, setFigureDetails] = useState<any>()
    useEffect(() => {
        switch (collection) {
            case 'ba20132014':
                const currentBA20132014 = BA20132014List.find((item) => item.id === id);
                setFigureDetails(currentBA20132014)
                break;
            case 'ba20142015':
                const currentBA20142015 = BA20142015List.find((item) => item.id === id);
                setFigureDetails(currentBA20142015)
                break;
            case 'ba20152017':
                const currentBA20152017 = BA20152017List.find((item) => item.id === id);
                setFigureDetails(currentBA20152017)
                break;
            case 'ex20142015':
                const currentEX20142015 = EX20142015List.find((item) => item.id === id);
                setFigureDetails(currentEX20142015)
                break;
            case 'mu20152017':
                const currentMU20152017 = MU20152017List.find((item) => item.id === id);
                setFigureDetails(currentMU20152017)
                break;
            default:
                break;
        }
        

    }, []);

    console.log('current details:', figureDetails)

    return (
        <div className="flex flex-col items-center justify-between py-10 px-20">
            <div className="w-full flex justify-between">
                <div className='w-[45%] flex flex-col items-center'>
                    <Image src={figureDetails?.photoUrl} alt="details" width={100} height={100} quality={100}
                        className='w-[600px] h-[680px] object-contain rounded-md mb-[20px] shadow-lg bg-secondary1'/>            
                </div>
                <div className='w-[55%] flex flex-col ml-[15px]'>
                    <div className='w-[100%] flex flex-row p-[30px] bg-secondary1 rounded-md'>
                        <div className='w-[85%] flex flex-col'>
                            <div className="text-[36px] text-primary font-semibold">{figureDetails?.figure_name}</div>
                            <div className="text-[24px] text-white italic">({figureDetails?.figure_version})</div>
                        </div>
                        <div className='w-[15%] flex flex-col items-center justify-center'>
                            <div className="relative w-20 h-20 rounded-full border-4 border-white shadow-lg bg-primary">
                                <span className="absolute inset-0 flex items-center justify-center text-secondary1 font-bold text-[30px]">
                                    {figureDetails.figure_number}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] flex flex-col p-[30px] bg-white shadow-lg'>
                        <div className="text-[20px] text-secondary1 ">Date Stamp: ({figureDetails?.figure_date_stamp})</div>
                        <div className="text-[20px] text-secondary1 ">Release Date: ({figureDetails?.figure_release_date})</div>
                        <div className="text-[20px] text-secondary1 ">Joint Count: ({figureDetails?.figure_joint_count})</div>
                        <div className="text-[20px] text-secondary1 ">Accessory Count: ({figureDetails?.figure_accessory_count})</div>
                        <div className="text-[20px] text-secondary1 mb-[30px]">Accessory Details: ({figureDetails?.figure_accessory_details})</div>
                        <div className="border-b-2 border-secondary1 mb-[30px]"></div>
                        <div className="text-[20px] text-secondary1 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Quisque non tellus orci ac auctor augue mauris augue. 
                        Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. In arcu cursus euismod quis.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque non tellus orci ac auctor augue mauris augue. 
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col py-10">
                <div className='flex items-center justify-end'>
                    <div className='flex items-center '>
                        <button className="px-[45px] py-[15px] inline-block rounded-full bg-secondary1"
                            // onClick={() => router.push('/add/ba20132014')}
                        >
                            <div className="flex items-center">
                                <div className="text-[16px] text-primary text-center font-bold">Edit</div>
                            </div>
                        </button>
                        <button className="px-[45px] py-[15px] inline-block rounded-full border-4 border-secondary1 ml-[20px]"
                            // onClick={() => router.push('/add/ba20132014')}
                        >
                            <div className="flex items-center">
                                <div className="text-[16px] text-secondary1 text-center font-bold">Delete</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailView