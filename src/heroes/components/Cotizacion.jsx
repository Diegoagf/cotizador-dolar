import React, { useState, useEffect } from 'react';

function Cotizacion() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dolarapi.com/v1/dolares');

        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }

        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <p>Los datos de la API son: {JSON.stringify(data)}</p>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default Cotizacion;
