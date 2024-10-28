import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div>
      <h2>Add user page</h2>
      <Link href={'/mongoDb'}>Take me back</Link>
    </div>
  );
};

export default page;
