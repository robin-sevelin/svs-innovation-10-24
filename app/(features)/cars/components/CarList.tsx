'use client';

import React, { useState } from 'react';
import { carList } from '../lib/constants/cars';
import CarView from './CarView';
import { ICar } from '../lib/models/ICar';

const CarList = () => {
  const [filteredCars, setFilteredCars] = useState<ICar[]>(carList);

  const handleChange = (input: string) => {
    const updatedList = carList.filter((item) =>
      item.brand.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredCars(updatedList);
  };

  return (
    <div>
      <label htmlFor='car-input'>Car filter</label>
      <input
        type='text'
        id='car-input'
        onChange={(e) => handleChange(e.target.value)}
      />
      {filteredCars.map((car) => (
        <CarView key={car.id} car={car} />
      ))}
      {!filteredCars.length && <p>No search result</p>}
    </div>
  );
};

export default CarList;
