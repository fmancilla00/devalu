import React from 'react'
import { Link } from 'react-router-dom'
import { IoCaretBackOutline } from "react-icons/io5";

export default function Explicacion() {
  return (
    <div className='flex flex-col items-center justify-center w-full min-h-screen'>
      <div className='drop-shadow-2xl text-teal-950 md:px-15 lg:rounded-lg sm:rounded-md bg-neutral-50 w-full sm:min-h-0 sm:w-[80%] xl:w-[65%] xl:p-10 min-h-screen xl:h-[95%] flex flex-col items-center justify-start md:my-5 lg:my-10'>
              <h2 className='w-full px-5 pt-8  text-xl lg:text-3xl'>¿Cómo se calcula?</h2>
        <section className='w-full p-5'>
          <article className='py-2 border-y-2 border-teal-300'>
            <p className='my-4 text-xs font-normal lg:text-sm'>
              Para calcular qué te conviene, a cada cuota le descontamos la inflación mensual acumulada hasta ese mes. Luego realizamos la sumatoria de todas ellas y obtenemos así el llamado <b className='text-emerald-600'>"precio ajustado"</b>. Este precio se compara con el precio al contado para determinar un resultado.  
            </p>
          </article>
          <article>
            <h3 className='w-full pt-3 text-lg lg:text-xl'>Pongamos algunos ejemplos</h3>
                    <p className='my-4 text-xs font-normal lg:text-sm'>
                        Si tenemos los siguientes datos:
                    </p>
                    <ul className='list-disc list-inside border-2 border-teal-400 rounded m-1 p-1 flex flex-col justify-center items-center my-4 text-xs  font-normal w-full max-w-sm bg-teal-100'>
                        <li className='text-[12px] lg:text-xs flex justify-between items center w-[70%]'><span>Inflación mensual:</span> <b className='text-emerald-600 text-start  w-[30%]'>20%</b></li>
                        <li className=' text-[12px] lg:text-xs flex justify-between items center w-[70%]'><span>Cantidad de cuotas:</span> <b className='text-emerald-600 w-[30%]'>2</b></li>
                        <li className=' text-[12px] lg:text-xs flex justify-between items center w-[70%] '><span>Valor de cada cuota:</span> <b className='text-emerald-600 w-[30%]'>$4200.00</b></li>
                    </ul>
                    <p className='my-4 text-xs font-normal lg:text-sm'>
                        Podremos entonces calcular:
                    </p>
                    <div className='list-disc list-inside bg-teal-100 border-2 border-teal-400 rounded m-1 p-1 flex flex-col justify-center items-center my-4 text-xs font-normal w-full gap-2 py-5 lg:flex-row lg:text-sm'>
                      <div className='flex gap-1 flex-col justify-center items-center text-center border-2 w-52 rounded  border-teal-200 bg-neutral-50'>
                        <h6 className='text-center border-b-teal-400 border-b p-1 w-24'>
                          Cuota 1:
                        </h6>
                        <b className='text-emerald-600 w-[30%] mt-'>$3500.00</b>
                        <span className='flex flex-col text-[14px] text-teal-900 '>
                        <small>Se obtiene de:</small>
                          <small className='mb-1'>
                        ( $4200  ÷ (1 + 20/100) )
                        </small>
                        </span>
                        
              </div>
                      <span> + </span>
                    <div className='flex gap-1 flex-col justify-center items-center text-center border-2 w-52 rounded  border-teal-200 bg-neutral-50'>
                        <h6 className='text-center border-b-teal-400 border-b p-1 w-24'>
                          Cuota 2:
                        </h6>
                        <b className='text-emerald-600 w-[30%] mt-'>$2916.67</b>
                        <span className='flex flex-col text-[14px] text-teal-900 '>
                        <small>Se obtiene de:</small>
                          <small className='mb-1'>
                        $4200  ÷ (1 + 20/100) ÷ (1 + 20/100)
                        </small>
                        </span>
                        
              </div>
              <span>=</span>
                      <div className='flex gap-1 flex-col justify-center items-center text-center border-2 w-52 rounded  border-teal-200 bg-neutral-50'>
                        <h6 className='text-center border-b-teal-400 border-b p-1 w-36'>
                          Precio ajustado:
                        </h6>
                        <b className='text-emerald-600 w-[30%] mt-'>$6416.67</b>
                        <span className='flex flex-col text-[14px] text-teal-900 '>
                        <small>Se obtiene de:</small>
                          <small className='mb-1'>
                            $3500.00 + $2916.67 
                        </small>
                        </span>
                      </div>
                    </div>
          </article>
          
          <article className='my-10 border-y-2 border-teal-300'>
            <p className='my-5 text-xs font-normal lg:text-sm'>
                      También tenés la opción de calcularlo con una inflación mensual <b className='text-emerald-600'>variable</b>. Esta se estima mediante los datos de variación de un mes a otro durante los últimos doce meses.
            </p>
            
            <p className='text-xs font-normal my-3 lg:text-sm'>
              Tomando los siguientes datos:
            </p>

            <ul className='list-disc list-inside bg-teal-100 border-2 border-teal-400 rounded m-1 p-1 flex flex-col justify-center items-center my-4 text-xs font-normal w-full max-w-sm'>
              <li className='text-[12px] lg:text-xs flex justify-between items center w-[70%]'><span>Inflación mensual:</span> <b className='text-emerald-600 text-start  w-[30%]'>20%</b></li>
              <li className='text-[12px] lg:text-xs flex justify-between items center w-[70%]'><span>Variación mensual: </span> <b className='text-emerald-600 text-start  w-[30%]'>5%</b></li>
              <li className=' text-[12px] flex justify-between items center w-[70%]'><span>Cantidad de cuotas:</span> <b className='text-emerald-600 w-[30%]'>2</b></li>
              <li className=' text-[12px] flex justify-between items center w-[70%] '><span>Valor de cada cuota:</span> <b className='text-emerald-600 w-[30%]'>$4200.00</b></li>
            </ul>

            <p className='text-xs font-normal my-3 lg:text-sm'>
              Ahora podemos calcular: 
            </p>

            <div className='list-disc list-inside bg-teal-100 rounded m-1 p-1 flex flex-col justify-center items-center my-4 text-xs font-normal w-full gap-2 py-5 lg:flex-row lg:text-sm border-2 border-teal-400'>
                      <div className='flex gap-1 flex-col justify-center items-center text-center border-2 w-52 rounded  border-teal-200 bg-neutral-50'>
                        <h6 className='text-center border-b-teal-400 border-b p-1 w-24'>
                          Cuota 1:
                        </h6>
                        <b className='text-emerald-600 w-[30%] mt-'>$3500.00</b>
                        <span className='flex flex-col text-[14px] text-teal-900 '>
                        <small>Se obtiene de:</small>
                          <small className='mb-1'>
                        ( $4200  ÷ (1 + 20/100) )
                        </small>
                        </span>
                        
              </div>
                      <span> + </span>
                    <div className='flex gap-1 flex-col justify-center items-center text-center border-2 w-52 rounded  border-teal-200 bg-neutral-50'>
                        <h6 className='text-center border-b-teal-400 border-b p-1 w-24'>
                          Cuota 2:
                        </h6>
                        <b className='text-emerald-600 w-[30%] mt-'>$2800.00</b>
                        <span className='flex flex-col text-[13px] text-teal-900 '>
                        <small>Se obtiene de:</small>
                          <small className='mb-1'>
                        $4200  ÷ (1 + 20/100) ÷ (1+  20/100 + 5/100)
                        </small>
                        </span>
                        
              </div>
              <span>=</span>
                      <div className='flex gap-1 flex-col justify-center items-center text-center border-2 w-52 rounded  border-teal-200 bg-neutral-50'>
                        <h6 className='text-center border-b-teal-400 border-b p-1 w-36'>
                          Precio ajustado:
                        </h6>
                        <b className='text-emerald-600 w-[30%] mt-'>$6300.00</b>
                        <span className='flex flex-col text-[14px] text-teal-900 '>
                        <small>Se obtiene de:</small>
                          <small className='mb-1'>
                            $3500.00 + $2800.00
                        </small>
                        </span>
              </div>
            </div>
          </article>
          <Link className=' flex items-center mx-auto justify-center gap-2 rounded p-2 w-[50%] self-center text-center mt-10 hover:bg-teal-800 transition bg-teal-700 text-sm text-white font-bold tracking-widest uppercase' to="/"><IoCaretBackOutline/> Volver</Link>
        </section>
        </div>
    </div>
  )
}

// En este caso si tomamos una inflación mensual del 20%, una variación del 5% y tenemos dos cuotas de $4000, entonces el precio actualizado de la primera cuota será de $3500 ( $4000  ÷ 20/100), mientras que el de la segunda cuota será de  $2892.55 ( $4000  ÷ 20/100 ÷ ( 20/100 + 5/100) ) ya que ahora la inflación no solo se acumula, sino que también varía (en este caso aumenta). Obtenemos así el precio ajustado: XXX
//¿Cómo se calcula?

// Si tenemos en cuenta que el objetivo es actualizar el valor de cada cuota para que refleje su equivalente en la actualidad, podemos entonces decsontarle a cada una de ellas la inflación mensual acumulada correspondiente.
 
// Una vez hecho esto vamos a realizar la suma de todas estas cuotas para así obtener lo que llamaremos "precio ajustado". Por último, se comparará el precio al contado con el precio ajustado y se arrojará un resultado.

// Por ejemplo si tomamos una inflación mensual del 20% constante y tenemos 2 cuotas de $4000, entonces el precio actualizado de la primera cuota será de $3500 ( $4000  ÷ 20/100), mientras que el de la segunda cuota será de  $2777.77  ( $4000  ÷ 20/100 ÷ 20/100). De esta forma el precio ajustado que obtenemos es de XXXX

// También tenés la opción de calcularlo con una inflación mensual variable. Esta se estima mediante los datos de variación de un mes a otro durante los últimos doce meses. 
