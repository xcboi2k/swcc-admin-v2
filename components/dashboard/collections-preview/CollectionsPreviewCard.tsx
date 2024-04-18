import Image from 'next/image'
import React from 'react'

type PropType = {
    photoUrl: string,
    figureName: string,
    figureVersion: number,
}

const CollectionsPreviewCard: React.FC<PropType> = (props) => {
    const { figureName, figureVersion, photoUrl } = props

    return (
        <button className="w-60 h-100 bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:bg-primary">
            <Image src={photoUrl} alt="profile" width={100} height={100} quality={100}
            className='w-60 h-80 object-cover rounded-md mb-2'/>
            <div className="text-[18px] text-secondary1 text-center font-semibold">{figureName}</div>
            <div className="text-[14px] text-secondary1 text-center italic">({figureVersion})</div>
        </button>
    )
}

export default CollectionsPreviewCard