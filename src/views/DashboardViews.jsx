import React, { useState } from 'react';
import StatsBox from '../components/(ui)/statsbox';
import Chart from '../components/(ui)/chart';
import {
  MdInsertChartOutlined,
  MdOutlineVideoCameraBack,
} from 'react-icons/md';
const DashboardViews = () => {
  const [currData, setCurrData] = useState('data');
  return (
    <main className='flex flex-col gap-[48px] items-center px-4 py-32'>
      <section className='container'>
        <p className='text-end text-2xl font-bold'>03/23/2024 : 16:00</p>
      </section>
      <section className='container grid grid-cols-4 gap-[24px]'>
        <StatsBox />
        <StatsBox />
        <StatsBox />
        <StatsBox />
        <StatsBox />
        <StatsBox />
        <StatsBox />
        <StatsBox />
      </section>
      <section className='container flex flex-col gap-[24px]'>
        <div className='flex items-center gap-[24px]'>
          <button
            className='relative py-2 flex items-center gap-2'
            onClick={() => setCurrData('data')}
          >
            <MdInsertChartOutlined />
            <p>Biểu đồ dữ liệu</p>
            <span
              style={{ transition: 'width 0.2s ease' }}
              className={`absolute bottom-0 ${
                currData === 'data' ? 'w-full' : 'w-0'
              } h-[2px] bg-orange-500`}
            ></span>
          </button>
          <button
            className='relative py-2 flex items-center gap-2'
            onClick={() => setCurrData('camera')}
          >
            <MdOutlineVideoCameraBack />
            <p>Camera</p>
            <span
              style={{ transition: 'width 0.2s ease' }}
              className={`absolute bottom-0 ${
                currData === 'camera' ? 'w-full' : 'w-0'
              } h-[2px] bg-orange-500`}
            ></span>
          </button>
        </div>
        <div className='bg-gray-700 px-4 py-8 rounded-xl h-max overflow-hidden'>
          <Chart />
        </div>
      </section>
    </main>
  );
};

export default DashboardViews;
