'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { AccessDenied } from './AccessDenied'
import { routeConfig } from '@/utils/routeConfig'

interface ProtectedRouteProps {
    children: React.ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isLoggedIn } = useAuth()
    const [mounted, setMounted] = useState(false)
    const pathname = usePathname()
    const loginRoutes = routeConfig.protectedRoutes

    useEffect(() => {
        setMounted(true)
    }, [])

    // Prevent hydration mismatch
    if (!mounted) {
        return null
    }

    const requiresLogin = loginRoutes.some((route) =>
        pathname.startsWith(route)
    )

    if (!isLoggedIn && requiresLogin) {
        return <AccessDenied type="login" />
    }

    return <>{children}</>
}
