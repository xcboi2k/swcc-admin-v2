import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { ToastContainer } from 'react-toastify'

import './globals.css'
import AuthProvider from '@/context/AuthProvider'
import { colors } from '@/constants/themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'SWCC',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextTopLoader
                    color={colors.primary}
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    crawl={true}
                    showSpinner={true}
                    easing="ease"
                    speed={200}
                    shadow="0 0 10px #f2f3fa,0 0 5px #f2f3fa"
                    template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                    zIndex={1600}
                    showAtBottom={false}
                />
                <AuthProvider>{children}</AuthProvider>
                <ToastContainer
                    position="bottom-right" // Position of the toast
                    autoClose={5000} // Duration before toast closes
                    hideProgressBar={true} // Show progress bar
                    closeOnClick // Close on click
                    pauseOnHover // Pause on hover
                />
            </body>
        </html>
    )
}
