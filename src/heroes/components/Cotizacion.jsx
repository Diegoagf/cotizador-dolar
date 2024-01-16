import React from 'react';

function Cotizacion({ data }) {
  return (
<div className="col animate__animated animate__fadeIn">
  <div className="card border-light" style={{ color: '#333' }}>
    <div className="row no-gutters">
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title" >{data.nombre}</h5>

          <p className="card-text">
            <span style={{ color: '#000' }}>Compra:</span> <span style={{ color: '#2ecc71'  }}>{data.compra}</span>
          </p>
          <p className="card-text">
            <span style={{ color: '#000' }}>Venta:</span> <span style={{ color: '#2ecc71'  }}>{data.venta}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


  );
}

export default Cotizacion;
