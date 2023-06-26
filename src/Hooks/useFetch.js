import { useEffect, useState } from "react";
import { obtenerUltimoDato, obtenerVariacion } from "../services/operaciones";



export const useFetch = (url) => { 

    const [loading, setLoading] = useState(true)
    const [variacion, setVari] = useState(0);
    const [IPC, setIPC] = useState(null);
    const [error, setError] = useState(false)

    useEffect(() => { 
        setLoading(true);
        fetch(url)
            .then(req => {
                if (!req.ok) {
                    setError(true);
                    setLoading(false)
                    return
                }
                return req.json()
            })
        .then(res => { 
            const { data } = res;
            setIPC(obtenerUltimoDato(data));
            setVari(obtenerVariacion(data));
        })
            .catch(() => { setError(true); setLoading(false) })
            .finally(() =>
                setLoading(false))
    }, [])
    
    return {variacion, IPC, loading, error}
}

