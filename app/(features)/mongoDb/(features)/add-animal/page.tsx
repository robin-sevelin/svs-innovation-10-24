import Link from 'next/link';
import React from 'react';
import Form from './components/Form';

const page = () => {
  return (
    <div>
      <h2>Add animal page</h2>
      <Form />
      <Link href={'/mongoDb'}>Take me back</Link>
    </div>
  );
};

export default page;
