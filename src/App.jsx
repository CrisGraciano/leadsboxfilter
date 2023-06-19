import React, { useState, useEffect } from 'react';
import { fetchEstimates, searchEstimateByFilter } from './components/utils';

// 1. Respuesta que obtenemos del servidor en formato JSON.
// Podes verla en la consola del navegador.
// Procesa los datos para que puedas usarlos en el componente de la forma que quieras.
// Los datos que te serviran son dentro de las quotes: status_label, status_class, quote_status_id
// Y ME OLVIDE DE MOSTRATE: "quote_statuses" es un array de objetos que tiene los datos base los status.
// eslint-disable-next-line no-console
// 2. Este es el array de objetos que se esta usando para mostrar los filtros. Te recomiendo crear uno nuevo a partir de los datos sin procesar con los datos extras necesarios cumplir los requirimientos.
// Tene en cuenta al procesar los datos que te da el servidor, que el valor de "value" tiene que ser unico (por eso no solo usamos Active, etc).
// El valor de "label" es el que se muestra en pantalla.
// Extra: el valor no necesariamente es una sola pablabra, puede ser un string con espacios, como "partially paid".
function App() {
  return (
    <div className="App m-5">
      <h1>Hello LeadsBox!</h1>
      <h2 className="mb-5">Filter chips component</h2>
    </div>
  );
  const [hits, setHits] = useState();
  
  const filters = [
    { label: 'All', value: 'All' },
    { label: 'Active', value: 'Active' },
    { label: 'Converted', value: 'Converted' },
    { label: 'Declined', value: 'Declined' },
    { label: 'Expired', value: 'Expired' },
  ];

  const [selectedFilter, setSelectedFilter] = useState({
    label: 'All',
    value: 'All',
  });

  useEffect(() => {
    const getEstimates = async () => {
      const data = await fetchEstimates();
      setHits(data);
    };
    if (selectedFilter.value === 'All') {
      getEstimates();
    }
  }, [selectedFilter]);

  const filterByChips = async (filter) => {
    const data = await searchEstimateByFilter(filter.value);
    setSelectedFilter(filter);
    setHits(data);
  };
}

export default App;
