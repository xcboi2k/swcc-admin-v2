"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import CollectionCard from './CollectionCard';

import { useBA20132014Store } from '@/stores/useBA20132014Store';
import { useBA20142015Store } from '@/stores/useBA20142015Store';
import { useBA20152017Store } from '@/stores/useBA20152017Store';
import { useEX20142015Store } from '@/stores/useEX20142015Store';
import { useMU20152017Store } from '@/stores/useMU20152017Store';

type PropType = {
    id: string,
}

const CollectionView: React.FC<PropType> = (props) => {
    const { id } = props

    const [collection, setCollection] = useState<any>()
    const [collectionTitle, setCollectionTitle] = useState<string>()
    // lists
    const BA20132014List: any[] = useBA20132014Store((state) => state.figures)
    const BA20142015List: any[] = useBA20142015Store((state) => state.figures)
    const BA20152017List: any[] = useBA20152017Store((state) => state.figures)
    const EX20142015List: any[] = useEX20142015Store((state) => state.figures)
    const MU20152017List: any[] = useMU20152017Store((state) => state.figures)

    useEffect(() => {
        switch (id) {
            case 'ba20132014':
                setCollection(BA20132014List)
                setCollectionTitle('Basic Assortment 2013-2014')
                break;
            case 'ba20142015':
                setCollection(BA20142015List)
                setCollectionTitle('Basic Assortment 2014-2015')
                break;
            case 'ba20152017':
                setCollection(BA20152017List)
                setCollectionTitle('Basic Assortment 2015-2017')
                break;
            case 'ex20142015':
                setCollection(EX20142015List)
                setCollectionTitle('Exclusives 2013-2014')
                break;
            case 'mu20152017':
                setCollection(MU20152017List)
                setCollectionTitle('Multipacks 2013-2014')
                break;
            default:
                break;
        }
    }, [id])
    
    return (
        <div className="flex flex-col items-center justify-between py-10 px-20">
            <div className="w-full flex flex-col py-10">
                <div className='flex items-center justify-between'>
                    <div className="text-[25px] font-semibold text-secondary2">{collectionTitle}</div>
                    <button className="px-[45px] py-[15px] inline-block rounded-full bg-secondary1"
                        // onClick={() => router.push('/login')}
                    >
                        <div className="flex items-center">
                            <div className="text-[16px] text-primary text-center font-bold">Add</div>
                        </div>
                    </button>
                </div>
                <div className="grid grid-cols-5 gap-[20px] mt-[15px]">
                    {
                        collection?.map((item: any, index: number) => (
                            <CollectionCard 
                                key={index}
                                figureName={item.figure_name}
                                figureVersion={item.figure_version}
                                photoUrl={item.photoUrl}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CollectionView