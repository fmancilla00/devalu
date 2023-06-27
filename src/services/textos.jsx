export const obtenerTexto = (contado, ajustado) => {
    const IGUALES = <p>Ambas opciones son <b className="bg-orange-400 tracking-wider uppercase px-1.5 rounded text-white">igual de buenas</b></p>
    const CONVIENE = <p>Te conviene comprar en <b className="bg-orange-400 px-1.5 uppercase rounded tracking-wider text-white">cuotas</b></p>
    const NO_CONVIENE = <p>Te conviene comprar al <b className="bg-orange-400 px-1.5 rounded uppercase tracking-wider text-white">contado</b></p>
    return(
    ajustado < contado
        ? CONVIENE
        : ajustado > contado
            ? NO_CONVIENE
                : IGUALES
    )
}