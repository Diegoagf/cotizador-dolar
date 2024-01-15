import React from 'react';

function Cotizacion({ data }) {
  return (
<div className="col animate__animated animate__fadeIn">
  <div className="card border-light"> {/* Cambiado a border-light */}
    <div className="row no-gutters">
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title text-info">{data.nombre}</h5>
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
