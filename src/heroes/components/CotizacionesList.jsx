import { useMemo } from "react";
import { GetCotizacionByName } from "../helpers"
import { HeroeCard } from "./HeroeCard";
import { cotizaciones } from "../data/cotizaciones";
import Cotizaciones from "./Cotizaciones";

export const CotizacionesList = ({name}) => {
  // const cotizacion = useMemo(() => GetCotizacionByName(name), [name])  
    return (
    <div className="row rows-cols-1 row-cols-md-1 g-2">
        <Cotizaciones/>
    </div>
  )
}
