import React, { useState } from 'react';
import './App.scss';
import DbResponse from './JSON/getAllEstimatesResponse.json';
import FilterChips from './components/UI/FilterChips';

function App() {
  // 1. Respuesta que obtenemos del servidor en formato JSON.
  // Podes verla en la consola del navegador.
  // Procesa los datos para que puedas usarlos en el componente de la forma que quieras.
  // Los datos que te serviran son dentro de las quotes: status_label, status_class, quote_status_id
  // Y ME OLVIDE DE MOSTRATE: "quote_statuses" es un array de objetos que tiene los datos base los status.
  const data = DbResponse;
  console.log(data);

  // 2. Este es el array de objetos que se esta usando para mostrar los filtros. Te recomiendo crear uno nuevo a partir de los datos sin procesar con los datos extras necesarios cumplir los requirimientos.
  // Tene en cuenta al procesar los datos que te da el servidor, que el valor de "value" tiene que ser unico (por eso no solo usamos Active, etc).
  // El valor de "label" es el que se muestra en pantalla.
  // Extra: el valor no necesariamente es una sola pablabra, puede ser un string con espacios, como "partially paid".
  const filterArray = [
    {
      value: 'filter__Active',
      label: 'Active',
    },
    {
      value: 'filter__Declined',
      label: 'Declined',
    },
    {
      value: 'filter__Accepted',
      label: 'Accepted',
    },
    {
      value: 'filter__Converted',
      label: 'Converted',
    },
    {
      value: 'filter__Expired',
      label: 'Expired',
    },
  ];

  const [filterSelected, setFilterSelected] = useState('');
  const handleFilter = (filter) => {
    setFilterSelected(filter);
  };
  return (
    <div className="App m-5">
      <h1>Hello LeadsBox!</h1>
      <h2 className="mb-5">Filter chips component</h2>

      <p>Requisitos:</p>
      <ol>
        <li>Cada chip debe tener un color que lo distinga de los demas</li>
        <li>Debe poder seleccionarse un reset de estado (all) </li>
        <li>
          Se debe mostar la cantidad de elementos existentes de cada tipo de
          filtro
        </li>
      </ol>

      <hr />
      <FilterChips setFilter={handleFilter} filterValues={filterArray} />
      <p className="mt-3">
        Filter seleted: <strong>{filterSelected}</strong>{' '}
      </p>
    </div>
  );
}

export default App;
