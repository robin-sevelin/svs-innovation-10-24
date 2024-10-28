import Link from 'next/link';
import React from 'react';
import AnimalsList from '../../components/AnimalsList';
import { IAnimal } from '../../lib/models/IAnimal';

const page = async () => {
  const response = await fetch('http://localhost:3000/mongoDb/api');
  const data = await response.json();
  const animals = data.animals as IAnimal[];

  return (
    <>
      <h2>View animals page</h2>
      <AnimalsList animals={animals} />
      <Link href={'/mongoDb'}>Take me back</Link>
    </>
  );
};

export default page;
