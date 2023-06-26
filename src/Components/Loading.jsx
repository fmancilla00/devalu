import React from 'react'
import ldr from '../assets/tail-spin.svg'

export default function Loading() {
  return (
    <div className='px-2 flex flex-col items-center justify-between  gap-20'>
      <div className='text-sm'>Se están obteniendo los datos actuales de inflación. Te pido un momento.</div>
      <img src={ldr} alt="loader" className='h-36 w-36'/>
    </div>
  )
}
