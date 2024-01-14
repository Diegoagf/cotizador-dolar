import { useMemo } from "react";
import { GetCotizacionByName } from "../helpers"
import { HeroeCard } from "./HeroeCard";

export const CotizacionesList = ({name}) => {
  console.log(name)
  const cotizacion = useMemo(() => GetCotizacionByName(name), [name])  
    return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {/* {heroes.map(heroe =>
        (<HeroeCard
        key={heroe.id}
        {...heroe}
        />
        )
        )} */}
        <h2>Cotizacion {name}</h2>
        <p> {JSON.stringify(cotizacion)}</p>
    </div>
  )
}
