import React from 'react';
import { IAnimal } from '../lib/models/IAnimal';
import Link from 'next/link';

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
          <Link href={`/mongoDb/view-animals/${animal.name}`}>
            <h2>{animal.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AnimalsList;
