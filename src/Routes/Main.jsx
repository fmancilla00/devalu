import React, { useState } from 'react'
import { useFetch } from '../Hooks/useFetch.js'
import MainForm from '../Components/MainForm.jsx';
import Loading from '../Components/Loading.jsx';
import logo from '../../public/logotipo.jpeg'
import { Link } from 'react-router-dom';

export default function Main() {
  const url = 'https://apis.datos.gob.ar/series/api/series/?ids=173.1_INUCLEOLEO_DIC-_0_10&format=json'
  const { variacion, IPC, loading, error } = useFetch(url)
  const defaultVal = { valor: 0.078, fechaFormateada: 'Mayo 2023' }
  return (
    <div className='flex flex-col items-center justify-center w-screen min-h-screen'>
      <div className='drop-shadow-2xl text-teal-950 md:px-20 lg:rounded-lg sm:rounded-md bg-neutral-50 w-full sm:min-h-0 sm:w-[80%] xl:w-[60%]  min-h-screen  xl:h-[95%] flex flex-col items-center justify-center'>
        <div className='flex items center flex-col justify-center w-full lg:h-full lg:p-5'>
          <section className=' sm:w-72 my-5 w-72 lg:w-full border-4 border-teal-200 p-1  mx-auto bg-teal-100 rounded-lg flex items-center justify-around gap-3 text-xs lg:text-base font-medium h-fit lg:justify-around'>
            <img src={logo} alt="" className='w-20 h-20 rounded-full border-4 border-teal-700 lg:w-28 lg:h-28' />
            <div className='  rounded p-2 w-[60%]'>
              <h1 className='uppercase font-bold text-3xl lg:text-5xl titulo'>Devalú</h1>
              <p className=' text-teal-800'>Ingresá los valores y calculá cómo te conviene comprar:</p>
              <p className='text-sm lg:text-lg my-1 font-semibold text-teal-800'>¿En <b className='text-orange-400'>cuotas</b> o al <b className='text-orange-400'>contado</b>?</p>
            </div>
          </section>
          {error && <p>Hubo un error al recibir los datos actualizados de inflación mensual. Los cálculos ser realizarán con los últimos datos guardados.</p>}
          {loading ? <Loading /> : <MainForm variacion={error ? 0 : variacion} inflacion={error ? defaultVal : IPC} />}
      <footer className='w-100'>
        <Link to='/explicacion' className='my-2 mb-4 text-center flex justify-center items-center underline underline-offset-4 hover:font-medium transition text-xs sm:my-2 sm:mb-4'>¿Cómo funciona?</Link>
      </footer>
      </div>
      </div>
      </div>
  )
}
