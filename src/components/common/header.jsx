import React, { useState } from 'react';

const Header = () => {
  const [toggleAside, setToggleAside] = useState(true);
  return (
    <header className='fixed top-0 left-0 w-full h-[64px] border-b border-gray-500 flex justify-center items-center px-4 z-50 bg-darkBlue'>
      <nav className='container m-auto flex justify-between items-center'>
        <div className='flex items-center gap-[10px] order-4'>
          <div
            className={`relative m-auto w-[24px] h-[42px] cursor-pointer`}
            onClick={() => setToggleAside(!toggleAside)}
          >
            <span
              className={`bars before:bg-gray-200 ${
                toggleAside ? 'active' : ''
              }`}
            ></span>
            <span
              className={`bars before:bg-gray-200 ${
                toggleAside ? 'active' : ''
              }`}
            ></span>
            <span
              className={`bars before:bg-gray-200 ${
                toggleAside ? 'active' : ''
              }`}
            ></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
