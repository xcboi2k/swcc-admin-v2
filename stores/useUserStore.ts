import create from 'zustand'

interface UserState {
    isLoggedIn: boolean
    setLoggedIn: () => void
    setLoggedOut: () => void
}

const useUserStore = create<UserState>((set) => ({
    isLoggedIn: false,
    setLoggedIn: () => set({ isLoggedIn: true }),
    setLoggedOut: () => set({ isLoggedIn: false }),
}))

export default useUserStore
