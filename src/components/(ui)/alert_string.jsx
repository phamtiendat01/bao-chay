import React from 'react'

function AlertString({temp}) {
  return (
    <div>
        {temp > 40 && <p className='text-red-500'>Cháy</p>}
        {temp > 30 && <p className='text-yellow-300'>Cảnh báo</p>}
        {temp <= 30 && <p className='text-emerald-500'>Bình thường</p>}
        {temp <= 10 && <p className='text-sky-500'>Lạnh</p>}
    </div>
  )
}

export default AlertString