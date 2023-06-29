import React, { useState } from 'react'
import { useFetch } from '../Hooks/useFetch.js'
import MainForm from '../Components/MainForm.jsx';
import Loading from '../Components/Loading.jsx';
import { Link } from 'react-router-dom';

export default function Main() {
  const url = 'https://apis.datos.gob.ar/series/api/series/?ids=173.1_INUCLEOLEO_DIC-_0_10&format=json'
  const { variacion, IPC, loading, error } = useFetch(url)
  const defaultVal = { valor: 0.078, fechaFormateada: 'Mayo 2023' }
  return (
    <div className='flex flex-col items-center justify-center w-full min-h-screen'>
      <div className='drop-shadow-2xl text-teal-950 md:px-15 lg:rounded-lg sm:rounded-md bg-neutral-50 w-screen lg:w-[80%]  min-h-screen lg:min-h-0 flex flex-col items-center justify-start lg:my-10'>
        <div className='flex items center flex-col justify-center w-full lg:h-full lg:p-5'>
          <section className='mt-10 relative sm:w-72 my-5 w-72 lg:w-full border-4 border-teal-200 p-1  mx-auto rounded-lg flex items-center justify-around gap-3 text-xs lg:text-base font-medium h-fit lg:justify-around'>
              <h1 className='absolute bottom-[90px] lg:bottom-[86px] bg-neutral-50 px-2 uppercase font-bold text-3xl lg:text-4xl  titulo'>Devalu</h1>
            <div className='text-center  rounded p-2 pt-5'>
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
