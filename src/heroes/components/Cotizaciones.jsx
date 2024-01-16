import React, { useState, useEffect } from 'react';
import Cotizacion from './Cotizacion'; // Asegúrate de ajustar la ruta correcta

function Cotizaciones() {
  const [cotizacionData, setCotizacionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dolarapi.com/v1/dolares');

        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }

        const result = await response.json();

        setCotizacionData(result);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);
return (
  <div className="col animate__animated animate__fadeIn">
    {cotizacionData ? (
      // Renderiza todos los datos de cotizaciones
      <>
        <h2 className="modal-title">Fecha de Actualización: {cotizacionData[0].fechaActualizacion}</h2>
        {cotizacionData.map((cotizacion, index) => (
          <div key={index}>
            <Cotizacion data={cotizacion} />
          </div>
        ))}
      </>
    ) : (
      <p>Cargando datos...</p>
    )}
  </div>
);
}

export default Cotizaciones;
