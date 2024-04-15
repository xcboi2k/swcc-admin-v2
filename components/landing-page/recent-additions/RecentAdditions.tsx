import React from 'react'
import RecentAdditionsCard from './recent-additions-card/RecentAdditionsCard'
import { sampleRecentAdditions } from '@/public/sample-data/landingPageData'

const RecentAdditions = () => {
    return (
        <div className="flex flex-col py-10 px-20">
            <div className="flex items-center mb-[20px]">
                <div className="text-[48px] font-bold text-secondary2">Recent Additions</div>
            </div>
            <div className='flex flex-wrap gap-8'>
                {
                    sampleRecentAdditions?.map((item, index) => (
                        <RecentAdditionsCard 
                            name={item.name}
                            collection={item.collection}
                            releaseDate={item.releaseDate}
                            key={index}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default RecentAdditions