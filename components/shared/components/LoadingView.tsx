import { AiOutlineLoading } from 'react-icons/ai'

const LoadingView = () => {
    return (
        <div className="w-full flex justify-center">
            <AiOutlineLoading className="text-primary animate-spin text-4xl laptop:text-7xl mt-2 laptop:mt-6" />
        </div>
    )
}

export default LoadingView
