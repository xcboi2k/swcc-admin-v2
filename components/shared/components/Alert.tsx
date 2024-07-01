import React from 'react'

interface AlertProps {
    alertTitle: string;
    alertMessage: string;
}

const Alert: React.FC<AlertProps> = ({ alertTitle, alertMessage }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-semibold mb-2">{alertTitle}</h2>
            <p className="mb-4">{alertMessage}</p>
            <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            onClick={() => console.log('Alert dismissed')}
            >
            OK
            </button>
        </div>
        </div>
    );
};

export default Alert