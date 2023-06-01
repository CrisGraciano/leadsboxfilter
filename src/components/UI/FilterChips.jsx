import React, { useState } from 'react';
/* eslint-disable react/prop-types */

function FilterChips({ setFilter, filterValues }) {
  const [item, setItem] = useState({ selectedValue: '' });

  const { selectedValue } = item;
  const handleChange = (e) => {
    e.persist();
    setItem({
      selectedValue: e.target.value,
    });
    setFilter(e.target.value);
  };
  return (
    <div className="column-filters">
      <label htmlFor="all">
        All
        <input
          type="radio"
          value=""
          id="all"
          onChange={handleChange}
          checked={selectedValue === ''}
          className="d-none"
        />
      </label>
      {filterValues.map((filterItem) => (
        <label htmlFor={filterItem.value} className="ms-3">
          {filterItem.label}
          <input
            type="radio"
            value={filterItem.value}
            id={filterItem.value}
            onChange={handleChange}
            checked={selectedValue === filterItem.value}
            className="d-none"
          />
        </label>
      ))}
    </div>
  );
}

export default FilterChips;
