import React from 'react'

function AlertString({ temp }) {
  let alertMessage = '';

  if (temp > 40) {
    alertMessage = 'Phát hiện cháy !!!';
  } else if (temp > 30 && temp <=40) {
    alertMessage = 'Cảnh báo cháy nổ !!!';
  } else {
    alertMessage = 'Bình thường';
  }

  return (
    <div className='font-bold text-xl'>
      <p className={temp > 40 ? 'text-red-500' : temp > 30 ? 'text-yellow-500' : 'text-emerald-500'}>
        {alertMessage}
      </p>
    </div>
  )
}

export default AlertString;
