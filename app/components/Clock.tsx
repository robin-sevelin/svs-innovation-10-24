"use client";

import React from "react";
import { useGetTime } from "../utils/hooks/useGetTime";

const Clock = () => {
  const { time } = useGetTime();

  return <div>{time}</div>;
};

export default Clock;
