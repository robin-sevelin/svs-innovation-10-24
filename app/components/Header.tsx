import React from "react";
import Navigation from "./Navigation";
import Clock from "./Clock";

const Header = () => {
  return (
    <header>
      <Clock />
      <Navigation />
    </header>
  );
};

export default Header;
