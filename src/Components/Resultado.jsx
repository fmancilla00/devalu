import React from 'react'

export default function Resultado( texto, datos, cuotasArr, ajustado, variacion) {
    return (
        <div>
        <h2 className=' h-16  p-1 px-2 text-center mt-5 text-lg font-semibold text-teal-800 flex items-center justify-center'>{texto}</h2>
        <div className=' border-t-2 border-teal-600'>
  
        <div className='text-sm  py-5 px-2  flex-wrap flex gap-2 justify-around items-center'>
          <div className=' p-2 border-2 w-32 h-16 flex flex-col  gap-2 justify-center rounded border-teal-500 '>
            <h4 className='text-xs'>Precio al contado</h4>
            <span className='overflow-x-hidden font-bold text-emerald-600'>{'$ ' + Number(datos.contado).toFixed(2)}</span>
          </div>
          <div className='text-sm p-2 border-2 w-32 h-16 flex gap-2 flex-col justify-center rounded border-teal-500 '>
            <h4 className='text-xs'>Precio en cuotas</h4>
            <span className='overflow-x-hidden font-bold text-emerald-600'>{'$ ' + Number(datos.enCuotas).toFixed(2)}</span>
          </div>
          <div className='text-sm p-2 border-2 w-32 h-16 flex flex-col justify-center rounded border-teal-500 '>
              <h4 className='text-xs'>Precio reajustado <small className=''>{datos.ipc + '%'}</small></h4>
            <span className=' font-bold text-emerald-600'>{'$ ' + Number(ajustado).toFixed(2)}</span>
            </div>
          <div className=' text-sm p-2 border-2 w-32 h-16 flex flex-col  gap-2 justify-center rounded border-teal-500 '>
            <h4 className='text-xs'>Diferencia</h4>
            <span className='overflow-x-hidden font-bold text-emerald-600'>{'$ ' + (Math.abs(Number(datos.contado) - ajustado)).toFixed(2)}</span>
          </div>
          <div className='text-sm p-2 border-2 w-32 h-16 flex flex-col  gap-2 justify-center rounded border-teal-500 '>
            <h4 className='text-xs'>Tasa de recargo</h4>
            <span className='overflow-hidden font-bold text-emerald-600 overflow-x-hidden'>{((( Number(datos.enCuotas))/Number(datos.contado)  - 1) * 100).toFixed(2) + ' %'}</span>
          </div>
          <div className='text-sm p-2 border-2 w-32 h-16 flex flex-col overflow-hidden justify-center rounded border-teal-500 '>
            <h4 className='text-xs'>Inflación mensual estimada</h4>
            <span className='font-bold text-emerald-600'>{(datos.ipc) + ' %'}</span>
            </div>
          </div>
          <section className=' my-5 text-sm'>
            <p className='m-2'>Acá podes ver el valor reajustado de cada cuota mes a mes:</p>
        <div className=' flex order-2 flex-wrap justify-around'>
          
        </div>
          </section>
            </div>
        </div>    
    )
     
}
