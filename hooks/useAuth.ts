import useUserStore from '@/stores/useUserStore'

export const useAuth = () => {
    const isLoggedIn = useUserStore((state) => state.isLoggedIn)

    return {
        isLoggedIn,
    }
}
