import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className='bg-white shadow-md p-2 rounded-md'>
        <p className='text-gray-800 font-bold text-sm'>
          {label} : {payload[0].value}
        </p>
      </div>
    );
  }

  return null;
};
const Chart = ({data}) => {

  return (
    <ResponsiveContainer
      height={328}
      width={'100%'}
      className='flex flex-col gap-[24px]'
    >
      <p className='text-center text-lg'>Biểu đồ dữ liệu</p>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='0' vertical={false} />
        <XAxis dataKey='id' color='#fff' />
        <YAxis />
        <Tooltip
          content={CustomTooltip}
          contentStyle={{
            width: 'max-content',
            height: '42px',
            fontSize: '12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            borderRadius: '4px',
            gap: '10px',
          }}
        />
        <Legend />
        <Line
          type='monotone'
          dataKey='pv'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
        />
        <Line type='monotone' dataKey='logs.temp' stroke='#82ca9d' />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
