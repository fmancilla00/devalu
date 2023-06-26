import React, { useEffect, useState } from 'react'
import { calcularPrecio } from '../services/operaciones'
import { obtenerTexto } from '../services/textos'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoCaretBackOutline } from "react-icons/io5";

export default function Results() {
  const { state } = useLocation();
  const { datos } = state;
  console.log(state);
  const [ajustado, setAjustado] = useState(0)
  const [cuotasArr, setCuotasArr] = useState([]) 
  const [texto, setTexto] = useState('')

  useEffect(() => { 
    
    if (datos.variacion) {
      const { total, nuevasCuotas } = calcularPrecio(Number(datos.ipc / 100), (Number(datos.variacion) / 100), Number(datos.enCuotas), Number(datos.cuotas));
      setAjustado(total)
      setCuotasArr(nuevasCuotas)
      setTexto(obtenerTexto(Number(datos.contado), total))
      console.log(Number(datos.variacion) / 100, 'cuentita')
    } else { 
      const { total, nuevasCuotas } = calcularPrecio(Number(datos.ipc / 100), 0, Number(datos.enCuotas), Number(datos.cuotas));
      setAjustado(total)
      setCuotasArr(nuevasCuotas)
      setTexto(obtenerTexto(Number(datos.contado), total))
      console.log('const')
    }
      
      
    }
    , [datos])
    return (
      <div  className=' w-full relative  container mx-auto bg-neutral-50 min-h-screen md:font-medium lg:rounded lg:mt-5 lg:border-8 lg:border-white lg:flex lg:flex-col lg:justify-center lg:items-center'>
        <h2 className=' w-[100%] p-8 px-2 text-center text-base bg-teal-600 font-semibold text-neutral-50 flex items-center justify-center md:text-2xl lg:w-[95%] lg:mt-8 lg:rounded lg:text-2xl'>{texto} </h2>
        <div className='lg:m-5'>
        {!datos.variacion
          ? <p className='text-xs m-1 p-3 pb-0 mb-0 md:text-sm'>Los siguientes cálculos ser realizaron suponiendo que la inflación mensual se mantiene  <b className='text-emerald-600'>constante</b></p>
          : <p className='text-xs m-1 p-3 pb-0 mb-0 md:text-sm'>Los siguientes cálculos ser realizaron con una inflación <b className='text-emerald-600'>variable</b> estimada del  <b className=' text-emerald-600'>{datos.variacion}</b>   % mensual.</p>
        }  
        </div>
        <div className='m-4 gap-6 flex flex-wrap items-center justify-around'>
          <div className=' p-2 h-16 rounded gap-2 justify-center flex flex-col w-32 text-xs border-2 md:text-cs md:w-48 border-teal-400 md:border-4 md:h-20 lg:h-28 lg:text-center lg:rounded-xl lg:p-4 lg:w-64'>
            <h5 className='lg:font-semibold lg:text-sm'>Precio al contado</h5>
            <span className='text-emerald-600 text-sm font-semibold md:text-base lg:bg-orange-400 lg:rounded-full lg:p-2 lg:text-white'  >{'$ ' + Number(datos.contado).toFixed(2)}</span>
          </div>
          <div className=' p-2 h-16 rounded gap-2 justify-center flex flex-col w-32 text-xs border-2 md:text-sm md:w-48 border-teal-400 md:border-4 md:h-20 lg:h-28 lg:text-center  lg:border-4 lg:rounded-xl lg:p-4 lg:w-64'>
            <h5 className='lg:font-semibold lg:text-sm'>Precio en cuotas</h5>
            <span className='text-emerald-600 text-sm font-semibold md:text-base lg:bg-orange-400 lg:rounded-full lg:p-2 lg:text-white'  >{'$ ' + Number(datos.enCuotas).toFixed(2)}</span>
          </div>
          <div className=' p-2 h-16 rounded gap-2 justify-center flex flex-col w-32 text-xs border-2 md:text-sm md:w-48 border-teal-400 md:border-4 md:h-20 lg:h-28 lg:text-center  lg:border-4 lg:rounded-xl lg:p-4 lg:w-64'>
            <h5 className='lg:font-semibold lg:text-sm'>Precio ajustado a la inflación</h5>
            <span className='text-emerald-600 text-sm font-semibold md:text-base lg:bg-orange-400 lg:rounded-full lg:p-2 lg:text-white'  >{'$ ' + ajustado.toFixed(2)}</span>
          </div>
          <div className='p-2 h-16 rounded gap-2 justify-center flex flex-col w-32 text-xs border-2 md:text-sm md:w-48 border-teal-400 md:border-4 md:h-20 lg:h-28 lg:text-center  lg:border-4 lg:rounded-xl lg:p-4 lg:w-64'>
            <h5 className='lg:font-semibold lg:text-sm'>Diferencia <small>entre ajustado y contado</small></h5>
            <span className='text-emerald-600 text-sm font-semibold md:text-base lg:bg-orange-400 lg:rounded-full lg:p-2 lg:text-white'  >{'$ ' + (Number(datos.enCuotas) - Number(datos.contado)).toFixed(2)}</span>
          </div>
          <div className=' p-2 h-16 rounded gap-2 justify-center flex flex-col w-32 text-xs border-2 md:text-sm md:w-48 border-teal-400 md:border-4 md:h-20 lg:h-28 lg:text-center  lg:border-4 lg:rounded-xl lg:p-4 lg:w-64'>
            <h5 className='lg:font-semibold lg:text-sm'>Tasa de recargo</h5>
            <span className='text-emerald-600 text-sm font-semibold md:text-base lg:bg-orange-400 lg:rounded-full lg:p-2 lg:text-white'  >{ (Number(datos.enCuotas) / Number(datos.contado)).toFixed(2) + ' %'}</span>
          </div>
          <div className=' p-2 h-16 rounded gap-2 justify-center flex flex-col w-32 text-xs border-2 md:text-sm md:w-48 border-teal-400 md:border-4 md:h-20 lg:h-28 lg:text-center  lg:border-4 lg:rounded-xl lg:p-4 lg:w-64 '>
            <h5 className='lg:font-semibold lg:text-sm'>Inflación mensual estimada</h5>
            <span className='text-emerald-600 text-sm font-semibold md:text-base lg:bg-orange-400 lg:rounded-full lg:p-2 lg:text-white'  >{ datos.ipc + ' %'}</span>
          </div>
        </div>
        <section className='text-xs m-4 mt-10 md:text-sm'>
          <p>Acá podes ver el valor ajustado para cada cuota: </p>
        </section>
        <div className='text-xs flex flex-wrap gap-5 items-center justify-around m-4 md:justify-start lg:justify-center lg:text-sm'>
          {cuotasArr.map((cuota, index) => { 
            return (
              
            <div key={index} className='p-1 w-28 h-12 flex flex-col border-2 border-teal-400 rounded md:w-36 md:border-4  md:h-14 lg:w-52 lg:h-20 lg:items-center lg:justify-center'>
              <h6>{'Cuota ' + (index + 1)}</h6>
              <span className=' text-sm font-semibold text-emerald-600'>{'$ ' + cuota.toFixed(2)}</span>
            </div>
            )
          })}
        </div>
        <footer className='flex flex-col items-center justify-center'>
          <Link className=' flex items-center justify-center gap-2 rounded p-2 w-[50%] text-center mt-2 hover:bg-teal-800 transition bg-teal-700 text-sm text-white font-bold tracking-widest uppercase lg:w-[100%]' to="/"><IoCaretBackOutline/> Volver</Link>
          <Link to='/explicacion' className='m-5 text-sm underline underline-offset-4 hover:font-medium transition'>¿Cómo funciona?</Link>
        </footer>
      </div>
          )
      }