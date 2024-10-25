import React from "react";
import { IUser } from "../lib/models/IUser";
import Link from "next/link";

interface UserViewProps {
    user: IUser;
  }

const UserView = ({user}: UserViewProps) => {
  return (
    <div>
      <Link href={`/users/${user.id.toString()}`}>{user.firstName}</Link>
    </div>
  );
};

export default UserView;
