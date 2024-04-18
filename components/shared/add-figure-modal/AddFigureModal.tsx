import React, { useState } from 'react'

interface ModalProps {
    isOpen: boolean;
    id: string
    onClose: () => void;
}

const AddFigureModal: React.FC<ModalProps>= ({ isOpen, id, onClose }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(isOpen);

    const handleClose = () => {
        setIsModalOpen(false);
        onClose && onClose();
    };

    return (
        <>
            {isModalOpen && (
                <div className="fixed z-60 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div
                        className="fixed inset-0 transition-opacity"
                        aria-hidden="true"
                        onClick={handleClose}
                        >
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                        >
                        &#8203;
                        </span>

                        <div
                        className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                        >
                            <button onClick={handleClose}>
                                <div className="text-[16px] text-primary text-center font-bold">Close Modal</div>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AddFigureModal