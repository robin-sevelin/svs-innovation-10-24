import React from "react";
import UserView from "./UserView";
import { IUser } from "../lib/models/IUser";

interface Props {
  listOfUsers: IUser[];
}

const UserList = ({ listOfUsers }: Props) => {
  return (
    <section>
      {listOfUsers.map((user) => (
        <UserView key={user.id} user={user} />
      ))}
    </section>
  );
};

export default UserList;
