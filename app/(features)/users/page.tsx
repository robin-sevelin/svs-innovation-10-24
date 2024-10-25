import React from "react";
import UserList from "./components/UserList";
import { getUsers } from "./utils/services/getUserData";

const page = async () => {
const users = await getUsers();

  return (
    <>
      <UserList listOfUsers={users} />
    </>
  );
};

export default page;
