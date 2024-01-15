import React from 'react';

function Cotizacion({ data }) {
  return (
    // <div>
    //   <h2>{data.nombre}</h2>
    //   <p>Compra: {data.compra}</p>
    //   <p>Venta: {data.venta}</p>
    //   <p>Fecha de Actualización: {data.fechaActualizacion}</p>
    // </div>
    <div className="col animate__animated animate__fadeIn">
    <div className="card">
        <div className="row no-gutters">
            <div className="col-4">
                {/* <img src={HeroImagePath} alt={superhero} className="card-img"/> */}
            </div>
            <div className="col-8">
                <div className="card-body">
                    <h5 className="card-title">{data.nombre}</h5>
                    <p className="card-text">Compra: {data.compra}</p>
                    <p className="card-text">Venta: {data.venta}</p>    
                    <p className="card-text">Fecha de Actualización: {data.fechaActualizacion}</p>            
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Cotizacion;
