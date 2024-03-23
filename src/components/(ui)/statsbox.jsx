import React from 'react';

const StatsBox = () => {
  return (
    <div className='relative bg-gray-700 rounded-xl px-4 pt-4 pb-8 flex flex-col gap-2 shadow-md'>
      <p className='text-gray-400 font-bold text-lg'>Nhiệt độ</p>
      <div className='flex items-start gap-2'>
        <p className='text-2xl font-bold'>28.59</p>
        <p className='text-[12px] text-gray-400'>(oC)</p>
      </div>
      <p className='text-gray-400 text-sm font-bold'>Giới hạn:-</p>
      <div className='absolute bg-emerald-300 size-4 rounded-full bottom-6 right-4'></div>
    </div>
  );
};

export default StatsBox;
