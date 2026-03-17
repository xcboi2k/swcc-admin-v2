'use client'
import { useRouter } from 'nextjs-toploader/app'
import { AiOutlineLogin } from 'react-icons/ai'

interface AccessDeniedProps {
    type: 'login'
}

export const AccessDenied = ({ type }: AccessDeniedProps) => {
    const router = useRouter()

    const handleLogin = () => {
        router.push('/login')
    }

    if (type === 'login') {
        return (
            <div className="bg-white flex flex-col items-center justify-center min-h-screen p-8">
                <div className="text-center max-w-md">
                    <h1 className="text-4xl font-bold text-red-500 mb-4">
                        Access Denied
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Please login to access this page
                    </p>
                    <button
                        className="flex items-center justify-center gap-2 bg-secondary1 text-primary font-semibold px-6 py-3 rounded-full shadow hover:opacity-90 transition"
                        onClick={handleLogin}
                    >
                        <AiOutlineLogin className="text-xl" />
                        <span>Login</span>
                    </button>
                </div>
            </div>
        )
    }
}
