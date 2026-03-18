'use client'

import Image from 'next/image'
import React from 'react'
import { useRouter } from 'nextjs-toploader/app'

import AdminImage from '@/public/images/admin.jpg'
import CollectionsPreviewCard from './CollectionsPreviewCard'

import { useBA20132014Store } from '@/stores/useBA20132014Store'
import { useBA20142015Store } from '@/stores/useBA20142015Store'
import { useBA20152017Store } from '@/stores/useBA20152017Store'
import { useEX20142015Store } from '@/stores/useEX20142015Store'
import { useMU20152017Store } from '@/stores/useMU20152017Store'

import useGetBA20132014List from '@/hooks/useGetBA20132014List'
import useGetBA20142015List from '@/hooks/useGetBA20142015List'
import useGetBA20152017List from '@/hooks/useGetBA20152017List'
import useGetEX20142015List from '@/hooks/useGetEX20142015List'
import useGetMU20152017List from '@/hooks/useGetMU20152017List'
import { useHideLoader } from '@/hooks/useHideLoader'
import LoadingView from '@/components/shared/components/LoadingView'

const CollectionsPreview = () => {
    const router = useRouter()

    useHideLoader()

    // get list hooks
    const { loadingBA20132014 } = useGetBA20132014List()
    const { loadingBA20142015 } = useGetBA20142015List()
    const { loadingBA20152017 } = useGetBA20152017List()
    const { loadingEX20142015 } = useGetEX20142015List()
    const { loadingMU20152017 } = useGetMU20152017List()

    // lists
    const BA20132014List: any[] = useBA20132014Store((state) => state.figures)
    const BA20142015List: any[] = useBA20142015Store((state) => state.figures)
    const BA20152017List: any[] = useBA20152017Store((state) => state.figures)
    const EX20142015List: any[] = useEX20142015Store((state) => state.figures)
    const MU20152017List: any[] = useMU20152017Store((state) => state.figures)

    return (
        <div className="flex flex-col items-center justify-between py-10 px-20">
            <div className="mr-[30px] flex items-center">
                <div className="text-[45px] font-bold text-secondary2">
                    Collections
                </div>
            </div>
            <div className="w-full flex flex-col py-10">
                <div className="flex items-center justify-between">
                    <div className="text-[25px] font-semibold text-secondary2">
                        Basic Assortment 2013-2014
                    </div>
                    <button
                        className="px-[45px] py-[15px] inline-block rounded-full bg-secondary1"
                        onClick={() => router.push('/collection/ba20132014')}
                    >
                        <div className="flex items-center">
                            <div className="text-[16px] text-primary text-center font-bold">
                                View All
                            </div>
                        </div>
                    </button>
                </div>
                <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
                    {loadingBA20132014 ? (
                        <LoadingView />
                    ) : (
                        <>
                            {BA20132014List?.map((item, index) => (
                                <CollectionsPreviewCard
                                    key={index}
                                    figureName={item.figure_name}
                                    figureVersion={item.figure_version}
                                    photoUrl={item.photoUrl}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>
            <div className="w-full flex flex-col py-10">
                <div className="flex items-center justify-between">
                    <div className="text-[25px] font-semibold text-secondary2">
                        Basic Assortment 2014-2015
                    </div>
                    <button
                        className="px-[45px] py-[15px] inline-block rounded-full bg-secondary1"
                        onClick={() => router.push('/collection/ba20142015')}
                    >
                        <div className="flex items-center">
                            <div className="text-[16px] text-primary text-center font-bold">
                                View All
                            </div>
                        </div>
                    </button>
                </div>
                <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
                    {loadingBA20142015 ? (
                        <LoadingView />
                    ) : (
                        <>
                            {BA20142015List?.map((item, index) => (
                                <CollectionsPreviewCard
                                    key={index}
                                    figureName={item.figure_name}
                                    figureVersion={item.figure_version}
                                    photoUrl={item.photoUrl}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>
            <div className="w-full flex flex-col py-10">
                <div className="flex items-center justify-between">
                    <div className="text-[25px] font-semibold text-secondary2">
                        Basic Assortment 2015-2017
                    </div>
                    <button
                        className="px-[45px] py-[15px] inline-block rounded-full bg-secondary1"
                        onClick={() => router.push('/collection/ba20152017')}
                    >
                        <div className="flex items-center">
                            <div className="text-[16px] text-primary text-center font-bold">
                                View All
                            </div>
                        </div>
                    </button>
                </div>
                <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
                    {loadingBA20152017 ? (
                        <LoadingView />
                    ) : (
                        <>
                            {BA20152017List?.map((item, index) => (
                                <CollectionsPreviewCard
                                    key={index}
                                    figureName={item.figure_name}
                                    figureVersion={item.figure_version}
                                    photoUrl={item.photoUrl}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>
            <div className="w-full flex flex-col py-10">
                <div className="flex items-center justify-between">
                    <div className="text-[25px] font-semibold text-secondary2">
                        Exclusives 2014-2015
                    </div>
                    <button
                        className="px-[45px] py-[15px] inline-block rounded-full bg-secondary1"
                        onClick={() => router.push('/collection/ex20142015')}
                    >
                        <div className="flex items-center">
                            <div className="text-[16px] text-primary text-center font-bold">
                                View All
                            </div>
                        </div>
                    </button>
                </div>
                <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
                    {loadingEX20142015 ? (
                        <LoadingView />
                    ) : (
                        <>
                            {EX20142015List?.map((item, index) => (
                                <CollectionsPreviewCard
                                    key={index}
                                    figureName={item.figure_name}
                                    figureVersion={item.figure_version}
                                    photoUrl={item.photoUrl}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>
            {/* <div className="w-full flex flex-col py-10">
                <div className="flex items-center justify-between">
                    <div className="text-[25px] font-semibold text-secondary2">
                        Multipacks 2015-2017
                    </div>
                    <button
                        className="px-[45px] py-[15px] inline-block rounded-full bg-secondary1"
                        onClick={() => router.push('/collection/mu20152017')}
                    >
                        <div className="flex items-center">
                            <div className="text-[16px] text-primary text-center font-bold">
                                View All
                            </div>
                        </div>
                    </button>
                </div>
                <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
                    {loadingMU20152017 ? (
                        <LoadingView />
                    ) : (
                        <>
                            {MU20152017List?.slice(0, 5).map((item, index) => (
                                <CollectionsPreviewCard
                                    key={index}
                                    figureName={item.figure_name}
                                    figureVersion={item.figure_version}
                                    photoUrl={item.photoUrl}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div> */}
        </div>
    )
}

export default CollectionsPreview
