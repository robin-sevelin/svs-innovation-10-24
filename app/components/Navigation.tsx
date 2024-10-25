import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/users'}>Users</Link></li>
        <li><Link href={'/products'}>Products</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;