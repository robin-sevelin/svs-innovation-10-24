import Link from 'next/link';
import React from 'react';

interface Props {
  params: Promise<{ name: string }>;
}

const page = async ({ params }: Props) => {
  const { name } = await params;

  return (
    <div>
      <h2>{name}</h2>
      <Link href={'/mongoDb/view-animals'}>Take me back</Link>
    </div>
  );
};

export default page;
