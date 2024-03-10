import Image from 'next/image';
import React from 'react'

interface DefaultNavbarProps {
    menuButtonOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DefaultNavBar: React.FC<DefaultNavbarProps> = ({ menuButtonOnClick }) => {
    return (
      <div className="w-full flex justify-between items-center px-4 top-14 absolute">
        <Image 
            src={'/logos/swccLogo.png'}
            alt='swcc-logo'
            width={75}
            height={75}
        />
        <button
            className="HAMBURGER-ICON space-y-1"
            onClick={menuButtonOnClick}
        >
            <span className="block rounded h-1 w-6 animate-pulse bg-primary"></span>
            <span className="block rounded h-1 w-6 animate-pulse bg-primary"></span>
            <span className="block rounded h-1 w-6 animate-pulse bg-primary"></span>
        </button>
      </div>
    );
};

export default DefaultNavBar;
