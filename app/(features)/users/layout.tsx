import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
};

const layout = ({ children }: Props) => {
  return <section className="users-container">{children}</section>;
};

export default layout;
