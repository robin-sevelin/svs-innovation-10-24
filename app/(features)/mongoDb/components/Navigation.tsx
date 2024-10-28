import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={'mongoDb/add-animal'}>Add animal</Link>
        </li>
        <li>
          <Link href={'mongoDb/view-animals'}>Animallist</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
