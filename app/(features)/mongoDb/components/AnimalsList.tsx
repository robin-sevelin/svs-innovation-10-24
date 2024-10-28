import React from 'react';
import { IAnimal } from '../lib/models/IAnimal';

interface Props {
  animals: IAnimal[];
}

const AnimalsList = ({ animals }: Props) => {
  if (!animals) {
    return <div>No animals here</div>;
  }
  return (
    <div>
      {animals?.map((animal) => (
        <div key={animal.name}>
          <h2>{animal.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default AnimalsList;
