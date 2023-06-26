import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import { mean, divide, multiply } from 'mathjs';

export const obtenerUltimoDato = (data) => {
    let valor = data[data.length - 1][1]
    const fecha = data[data.length - 1][0]
    const fechaFormateada = formatearFecha(fecha)
    
    return {valor, fechaFormateada}
}
 
export const formatearFecha = fecha => { 
    const zonaHoraria = 'America/Argentina/Buenos_Aires';

    const fechaUtc = zonedTimeToUtc(fecha, zonaHoraria);
    const fechaZonaHoraria = utcToZonedTime(fechaUtc, zonaHoraria);

    const fechaFormateada = format(fechaZonaHoraria, 'MMMM yyyy', { locale: es });
    return fechaFormateada;
}

export const obtenerVariacion = data => {
    const ultimos12 = data.length <= 12 ? data : data.slice(-12);
    ultimos12.forEach((dato, index) => { ultimos12[index] = dato[1]})
    return calcularVariacion(ultimos12);
}


const calcularVariacion = datos => {
    let diferencias = Array(datos.length - 1).fill(0)
    for (let i = 0; i < datos.length - 1; i++) {
        diferencias[i] = datos[i + 1] - datos[i]
    }
    diferencias.sort();
    const diferenciasPodada = diferencias.slice(1,-1);
    const mediaPodada = mean(diferenciasPodada);
    
    return mediaPodada;
}

export const calcularPrecio = (IPC, variacion, precio, cuotas) => { 
    const cuota = divide(precio, cuotas)
    const nuevasCuotas = Array(cuotas).fill(0)
    let divisor = 1 + IPC;
    let divAcumulado = divisor;
    let total = 0;
    for (let i = 0; i < cuotas; i++) {
        total += divide(cuota, divAcumulado)
        nuevasCuotas[i] = divide(cuota, divAcumulado)
        divisor += variacion;                                       // La inflación varia
        divAcumulado = multiply(divAcumulado, divisor);             // Se acumula
    }
    return { total, nuevasCuotas };
}



//parseFloat(dato[1].toFixed(3))