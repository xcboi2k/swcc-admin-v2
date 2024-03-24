import Image from 'next/image'
import React from 'react'

type PropType = {
    name: string,
    collection: string,
    releaseDate: string,
}

const RecentAdditionsCard: React.FC<PropType> = (props) => {
    const { name, collection, releaseDate } = props

    return (
        <div className="w-[600px] flex items-center p-4 bg-white rounded-lg shadow">
            <div className="flex-shrink-0 mr-4">
                <img src="https://placehold.co/200x300" alt="landing" className="w-full h-full object-cover"/>
                {/* <Image src="https://placehold.co/200x400" alt="Image" className="w-full h-full object-cover" height={1080} width={1920}/> */}
            </div>
            <div className='ml-[20px] w-[90%]'>
                <div className="text-[30px] font-bold text-secondary2">{name}</div>
                <div className="text-[20px] text-secondary2 italic mb-[10px]">{collection}</div>
                <div className="text-[14px] text-secondary2 mb-[70px]">Released: {releaseDate}</div>
                <button className="w-full flex items-center justify-center px-[45px] py-[15px] 
                    inline-block rounded-full bg-secondary1"
                >
                    <div className="text-[16px] text-primary text-center font-bold">View</div>
                </button>
            </div>
        </div>
    )
}

export default RecentAdditionsCard