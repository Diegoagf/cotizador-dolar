import { cotizaciones } from "../data/cotizaciones";
import { heroes } from "../data/heroes";

export const GetCotizacionByName =(name)=>{
    return cotizaciones.filter(c => c.nombre===name);
}