import React from 'react';
import Link from 'next/link';
import { getUser } from '../utils/services/getUserData';

interface Props {
  params: Promise<{ userId: string }>;
}

const page = async ({ params }: Props) => {
  const { userId } = await params;

  const foundUser = await getUser(userId);

  if (!foundUser) {
    return <div>User not found</div>;
  }

  return (
    <div className='flex flex-col gap-2'>
      <h2>Name: {foundUser.firstName}</h2>
      <p>Age: {foundUser.age}</p>
      <p>Gender: {foundUser.gender}</p>
      <Link href={'/users'}>Take me back..</Link>
    </div>
  );
};

export default page;
