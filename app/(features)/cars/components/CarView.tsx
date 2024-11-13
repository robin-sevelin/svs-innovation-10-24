import React from 'react';
import { ICar } from '../lib/models/ICar';

interface Props {
  car: ICar;
}

const CarView = ({ car }: Props) => {
  return (
    <div className='flex w-auto gap-2 mb-2'>
      <h3>{car.brand}</h3>
      <p>{car.model}</p>
      <p>{car.year}</p>
    </div>
  );
};

export default CarView;
