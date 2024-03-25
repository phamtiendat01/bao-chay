import React, { useState } from 'react';

const Header = () => {
  // const [toggleAside, setToggleAside] = useState(true);
  const scrollElement = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <header className='fixed top-0 left-0 w-full border-b border-gray-500 flex justify-center items-center px-4 py-4 z-50 bg-darkBlue'>
      <nav className='container m-auto flex justify-between items-center'>
        <div className='flex items-center gap-[10px] order-4'>
          {/* <div
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
          </div> */}
          <button className='text-3xl font-bold text-slate-100' onClick={scrollElement}>Trang chủ báo cháy</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
