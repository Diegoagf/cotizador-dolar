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
    <div>
      {cotizacionData ? (
        // Renderiza todos los datos de cotizaciones
        cotizacionData.map((cotizacion, index) => (
          <Cotizacion key={index} data={cotizacion} />
        ))
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default Cotizaciones;
