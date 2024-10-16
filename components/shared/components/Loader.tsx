import React from 'react'

import useLoaderStore from '@/stores/useLoaderStore';

const Loader = () => {
    const { isLoading } = useLoaderStore();

    if (!isLoading) return null; // Don't render if not loading

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="w-12 h-12 border-4 border-t-transparent border-primary rounded-full animate-spin"></div>
        </div>
    );
};

export default Loader