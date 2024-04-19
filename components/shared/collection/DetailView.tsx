import React from 'react'

type PropType = {
    id: string,
}

const DetailView: React.FC<PropType> = (props) => {
    const { id } = props
    return (
        <div className="flex flex-col items-center justify-between py-10 px-20">
            <div className="w-full flex flex-col py-10">
                <div className='flex items-center justify-between'>
                    <div className="text-[25px] font-semibold text-secondary2">{id}</div>
                    <button className="px-[45px] py-[15px] inline-block rounded-full bg-secondary1"
                        // onClick={() => router.push('/add/ba20132014')}
                    >
                        <div className="flex items-center">
                            <div className="text-[16px] text-primary text-center font-bold">Add</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DetailView