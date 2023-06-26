import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IoCaretForwardOutline } from "react-icons/io5";




export default function MainForm({ variacion, inflacion }) {
  const { register, handleSubmit, watch, setValue, formState, getValues, unregister } = useForm();
  const { errors } = formState;
  const [especial, setEspecial] = useState(false)
  const [variable, setVariable] = useState(false)
  const sinDato = 'Tenés que ingresar un precio'
  const navigate = useNavigate();

  let select = watch('cuotas')

  const procesarDatos = data => {
    navigate('/resultados', {
      state: {
        datos: data,
      }
    })
  } 
  const cambiarCuotas = () => { 
    setEspecial(!especial)
    
  }

  useEffect(() => { 
    if (select == 'otro') { 
      cambiarCuotas();
    }
  },[select])

  useEffect(() => { 
    setValue('ipc', inflacion.valor.toFixed(3)*100)
  }, [inflacion])
  
  const validarCuotas = valor => { 
    if (Number(valor) <= 0) { return sinDato }
      else { if (Number(valor) < Number(getValues('contado'))) { return 'El precio en cuotas tiene que ser mayor que al contado' } }
  }

  const validarMayor0 = valor => { 
    return (Number(valor) > 0 || sinDato)
  }

  const validarNumCuotas = valor => { 
    return (Number(valor) > 0 || 'Tiene que haber al menos una cuota!')
  }

  const handleVariable = () => {
    if (variable) { unregister('variacion') }
    setVariable(!variable)
  }

  return (
    <form className='text-xs font-medium p-2 flex flex-col items-center lg:text-sm' autoComplete='off' onSubmit={handleSubmit(procesarDatos)}>
      <div className='flex flex-col justify-center items-center lg:flex-row  lg:w-[70%] lg:gap-4'>
      <label className=' flex flex-col relative items-center justify-center lg:w-[50%]'>
        <span className='self-start px-1'>Precio al contado</span>
        <div className='relative'>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
           <span className="text-teal-800 sm:text-sm">$</span>
          </div>
          <input {...register('contado', { validate: validarMayor0})} placeholder='8000' step={0.01} className=" border-neutral-300 bg-neutral-50 text-teal-950 align-middle w-72 rounded border-2  h-9 p-5 px-8 focus:outline-teal-600 font-semibold lg:w-[100%]" type="number" />
        </div>
          <span className='mt-1 text-red-500 font-normal underline underline-offset-2 lg:text-xs'>{ errors.contado?.message}</span>
      </label>
      <label className='my-2 flex flex-col relative items-center justify-center lg:w-[50%]'>
        <span className='self-start px-1' >Precio en cuotas</span>
        <div className='relative'>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <span className="text-teal-800 sm:text-sm">$</span>
            </div>
          <input {...register('enCuotas', { validate: validarCuotas })} placeholder='12000' step={0.01} className="border-neutral-300 font-semibold text-teal-950 align-middle w-72 rounded border-2  h-9 p-5 px-8 focus:outline-teal-600 bg-neutral-50 lg:w-[100%]" type="number" />
        </div>
          <span className=' w-64 text-center mt-1 text-red-500 font-normal underline underline-offset-2 lg:text-xs'>{ errors.enCuotas?.message}</span>
      </label>
      </div>
      <div className='flex flex-col justify-center items-center lg:flex-row  lg:w-[70%] lg:gap-4'>
        <label className=' flex flex-col lg:w-[50%]'>
          <span className='lg:w-24'>Cantidad de cuotas</span>
          <div className='relative flex flex-col items-center lg:w-[100%]'>
          {
            especial
            ? <div className='relative'>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <span className="text-teal-800 sm:text-sm">#</span>
                </div>
                <input {...register('cuotas', { validate: validarNumCuotas})}  placeholder='36' className=" border-neutral-300 font-semibold text-teal-950 align-middle w-72 rounded border-2  h-9 p-5 px-8 focus:outline-teal-600 bg-neutral-50 lg:w-[100%]" type="number" />
                </div>
            : <select className=" font-semibold text-teal-950 align-middle w-72 rounded border-2 p-3 bg-neutral-50 px-3 focus:outline-teal-600 border-neutral-300 lg:w-[100%]" {...register('cuotas')}>
                <option className='font-semibold' value="1">1</option>
                <option className='font-semibold' value="3">3</option>
                <option className='font-semibold' value="4">4</option>
                <option className='font-semibold' value="6">6</option>
                <option className='font-semibold' value="9">9</option>
                <option className='font-semibold' value="12">12</option>
                <option className='font-semibold' value="18">18</option>
                <option className='font-semibold' value="24">24</option>
                <option className='bg-teal-200 font-semibold' value="otro">Otro</option>
              </select>
            }
            <span className='mt-1 text-red-500 font-normal underline underline-offset-2 lg:text-xs'>{ errors.cuotas?.message}</span>
          </div>
        </label>
        <label className='my-2 flex flex-col relative items-center justify-center lg:w-[50%]'>
          <div className='flex flex-col justify-between w-72 lg:w-[100%]'>
            <span className='px-1 lg:px-0' >Inflación mensual estimada</span>
            <span className=' opacity-70 text-[10px] px-1 lg:px-0' >{inflacion.valor.toFixed(3) * 100 + '%  INDEC, ' + inflacion.fechaFormateada}</span>
          </div>
          <div className='relative'>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <span className="text-teal-800 sm:text-sm">%</span>
              </div>
            <input {...register('ipc')}  placeholder='3.00' step={0.01} className="font-semibold text-teal-950 align-middle w-72 rounded border-2 border-neutral-300 h-9 p-5 px-8 focus:outline-teal-600 bg-neutral-50 lg:w-[100%]" type="number" />
          </div>
        </label>
      </div>
      <div className='flex flex-col items-center justify-center lg:flex-row w-[70%]'>
        <div className=' lg:w-[50%]'>
          {variable &&
            <label className='my-2 flex flex-col relative items-center justify-center'>
            <div className='flex flex-col justify-between w-72 lg:w-[100%]'>
            <span className='px-1 lg:px-0' >Variación de la inflación mensual</span>
                <span className=' opacity-70 text-[10px] px-1 lg:px-0' >{(variacion * 100).toFixed(2) + '% estimada en base a los últimos 12 meses'}</span>
          </div>
            <div className='relative'>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <span className="text-teal-800 sm:text-sm">%</span>
                </div>
              <input {...register('variacion')} defaultValue={(variacion * 100).toFixed(2)} placeholder='0.05' step={0.01} className="border-neutral-300 font-semibold text-teal-950 align-middle w-72 rounded border-2  h-9 p-5 px-8 focus:outline-teal-600 bg-neutral-50 lg:w-[100%]" type="number" />
            </div>
          </label>
          }
        </div>
        <button onClick={handleVariable}type='button' className=' lg:mg-0 self-start lg:self-auto lg:w-[50%] m-1 underline underline-offset-2 hover:text-teal-950 text-[12px] text-teal-700 transition '>{variable ? <p className='text-orange-500 hover:text-orange-700 transition underline underline-offset-2 lg:mt-9'>Prefiero usar inflación constante</p> : 'Inflación variable?'}</button>
      </div>
        <div className='border-t-2 my-4 border-teal-200 w-64 lg:w-[70%] lg:my-2 '></div>
        <button className=' flex items-center justify-center gap-2 rounded p-4 mt-2 hover:bg-teal-800 transition bg-teal-700 text-sm text-white font-bold tracking-widest uppercase w-72 ' type='submit'> Calcular <IoCaretForwardOutline/> </button>
    </form>
  )
}
