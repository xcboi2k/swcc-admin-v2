import React from 'react'
import Loader from "react-js-loader";

interface LoaderProps {
    isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
    if (!isLoading) return null;
  
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <Loader type='spinner-default' bgColor={'#FFC300'} color={'#E74C3C'} title={"spinner-default"} size={100} />
        </div>
    );
  };

export default Loader