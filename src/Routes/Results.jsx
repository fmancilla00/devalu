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

  const scrollUp = () => { 
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Opciones: 'auto', 'smooth'
    });
  }

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
      <div className=' w-full lg:w-[80%] mx-auto relative flex items-center justify-center bg-neutral-50 min-h-screen md:font-medium lg:my-10 lg:p-10 lg:px-20 lg:rounded'>
        <div className='p-5 flex flex-col items-center w-full'>

          <h2 className='b text-center w-full p-2 text-base   font-bold h-28 border-4 border-teal-400 rounded-md sm:text-lg md:text-xl flex items-center justify-center lg:text-2xl'>{texto} </h2>
          <div className='font-normal my-5'>
          {!datos.variacion
            ? <p className='text-xs  pb-0 mb-0 md:text-sm'>Los siguientes cálculos ser realizaron suponiendo que la inflación mensual se mantiene  <b className='text-emerald-600'>constante.</b></p>
            : <p className='text-xs  p-3 pb-0 mb-0 md:text-sm'>Los siguientes cálculos ser realizaron con una inflación <b className='text-emerald-600'>variable</b> estimada del  <b className=' text-emerald-600'>{datos.variacion}</b>   % mensual.</p>
          }  
          </div>
          <div className='border-2 py-2 p-5 border-teal-400 rounded my-4 relative flex flex-col items-center justify-around w-full'>
            <span className='absolute text-teal-700 bg-neutral-50 px-1 -top-2 left-5 text-[12px] text-center'>Datos ingresados</span>
            <div className='flex flex-col lg:gap-10 lg:flex-row lg:justify-between w-full'>
              <div className=' p-2 h-16 gap-2 justify-between items-center flex w-full border-b-2 text-xs lg:h-12 sm:font-semibold'>
                <h5 className='w-[50%]'>Precio al contado</h5>
                <span className='text-emerald-600 font-semibold md:font-bold w-[50%] h-34 text-end'>{'$ ' + Number(datos.contado).toFixed(2)}</span>
              </div>
              <div className=' p-2 h-16 gap-2 justify-between items-center flex w-full border-b-2 text-xs lg:h-12 sm:font-semibold'>
                <h5 className='w-[50%]'>Precio en cuotas</h5>
                <span className='text-emerald-600 font-semibold md:font-bold w-[50%] h-34 text-end'  >{'$ ' + Number(datos.enCuotas).toFixed(2)}</span>
              </div>
            </div>
            
            <div className='flex flex-col lg:gap-10 lg:flex-row lg:justify-between w-full'>
              <div className=' p-2 h-16 gap-2 justify-between items-center flex w-full border-b-2 text-xs lg:h-12 sm:font-semibold lg:border-none'>
                <h5 className='w-[50%]'>Cantidad de cuotas</h5>
                <span className='text-emerald-600 font-semibold md:font-bold w-[50%] h-34 text-end'  >{'# ' + datos.cuotas}</span>
              </div>
              <div className=' p-2 h-16 gap-2 justify-between items-center flex w-full  text-xs lg:h-12 sm:font-semibold'>
                <h5 className='w-[70%]'>Inflación mensual <small>estimada</small></h5>
                <span className='text-emerald-600 font-semibold md:font-bold w-[30%] h-34 text-end'  >{ datos.ipc + ' %'}</span>
              </div>
            </div>
            </div>

            <div className='border-2 py-2 p-5 border-teal-400 rounded my-4 relative flex flex-col items-center justify-around w-full'>
              <span className='text-teal-700 absolute bg-neutral-50 px-1 -top-2 left-5 text-[12px] text-center'>Datos calculados</span>
              <div className=' p-2 h-16 gap-2 justify-between items-center flex w-full border-b-2 text-xs lg:h-12 sm:font-semibold'>
                <h5 className='w-[50%]'>Precio ajustado a la inflación</h5>
                <span className='text-emerald-600 font-semibold md:font-bold w-[50%] h-34 text-end'  >{'$ ' + ajustado.toFixed(2)}</span>
            </div>
            <div className='flex flex-col lg:flex-row w-full lg:gap-10'>
              <div className=' p-2 h-16 gap-2 justify-between items-center flex w-full border-b-2 text-xs lg:h-12 sm:font-semibold'>
                  <h5 className='w-[50%]'>Tasa de recargo</h5>
                  <span className='text-emerald-600 font-semibold md:font-bold w-[50%] h-34 text-end'  >{ (Number(datos.enCuotas) / Number(datos.contado) * 100).toFixed(2) + ' %'}</span>
              </div>
              <div className=' p-2 h-16 gap-2 justify-between items-center flex w-full border-b-2 text-xs lg:h-12 sm:font-semibold'>
                <h5 className='w-[50%]'>Diferencia <small>entre ajustado y contado</small></h5>
                <span className='text-emerald-600 font-semibold md:font-bold w-[50%] h-34 text-end'  >{'$ ' + (Math.abs(ajustado - Number(datos.contado))).toFixed(2)}</span>
              </div>
            </div>
              <div className=' p-2  justify-between items-center flex flex-col w-full text-xs sm:font-semibold'>
                <h5 className='w-full text-start'>Cuotas mes a mes:</h5>
                <div className='text-xs flex flex-wrap gap-5 items-center justify-around m-4 lg:justify-start'>
                  {cuotasArr.map((cuota, index) => { 
                    return (
                      
                    <div key={index} className=' text-center p-1 w-24 h-12 flex flex-col justify-center items-center border-2 text-xs border-teal-400 rounded md:w-28 md:h-14'>
                      <h6>{'Cuota ' + (index + 1)}</h6>
                      <span className=' md:text-sm  font-semibold text-emerald-600'>{'$ ' + cuota.toFixed(2)}</span>
                    </div>
                    )
                  })}
                </div>
              </div>
            </div>
          <footer className='flex flex-col items-center justify-center'>
            <Link className=' flex items-center justify-center gap-2 rounded p-2 w-full text-center mt-10 hover:bg-teal-800 transition bg-teal-700 text-sm text-white font-bold tracking-widest uppercase' to="/"><IoCaretBackOutline/> Volver</Link>
            <Link onClick={scrollUp} to='/explicacion' className='m-5 mb-0 text-sm underline underline-offset-4 hover:font-medium transition'>¿Cómo funciona?</Link>
          </footer>
        </div>
      </div>
          )
      }