import React from 'react'

function AlertString({temp}) {
  console.log(temp)
  return (
    <div className='font-bold text-xl'>
        {temp > 40 && <p className='text-red-500'>Cháy!!!</p>}
        {temp > 30 && <p className='text-yellow-500'>Cảnh báo!!!</p>}
        {temp <= 30 && <p className='text-emerald-500'>Bình thường</p>}
        {temp <= 10 && <p className='text-sky-500'>Lạnh!!!</p>}
        {!temp && <p className='text-red-500'>Không có thông tin!!!</p>}
    </div>
  )
}

export default AlertString