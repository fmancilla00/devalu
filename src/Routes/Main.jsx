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
    <div className='flex items-center justify-center  w-screen h-screen'>
      <div className='drop-shadow-2xl text-teal-950 container bg-neutral-50 mx-auto min-h-screen p-2 flex flex-col items-center justify-evenly lg:justify-around lg:min-h-fit lg:my-10 lg:rounded w-screen lg:p-10 lg:w-[100%] '>
        <section className=' bg-teal-100 rounded-lg flex items-center justify-between gap-5 text-xs lg:text-base px-5 font-medium mt-20  w-72  lg:mt-0 lg:w-[60%] xl:w-[46%] lg:p-5'>
          <img src={logo} alt="" className='w-20 h-20 rounded-full border-4 border-teal-700 lg:w-28 lg:h-28' />
          <div className='  rounded p-2 md:w-90'>
            <h1 className='uppercase font-bold text-3xl lg:text-5xl titulo'>Devalú</h1>
            <p className=' text-teal-800'>Ingresá los valores y calculá como te conviene comprar:</p>
            <p className='text-sm lg:text-lg my-1 font-semibold text-teal-800'>¿En <b className='text-orange-400'>cuotas</b> o al <b className='text-orange-400'>contado</b>?</p>
          </div>
        </section>
        {error && <p>Hubo un error al recibir los datos actualizados de inflación mensual. Los cálculos ser realizarán con los últimos datos guardados.</p>}
        {loading ? <Loading /> : <MainForm variacion={error ? 0 : variacion} inflacion={error ? defaultVal : IPC} />}
        <footer className='mb-2'>
          <Link to='/explicacion' className='text-sm underline underline-offset-4 hover:font-medium transition'>¿Cómo funciona?</Link>
        </footer>
        </div>
      </div>
  )
}
