import React, { createContext } from "react";

export const MyContext = createContext();

const NodeState = (props) => {
  const state = {
    name: "I am from Context",
  };

  return (
    <MyContext.Provider value={state}>{props.children}</MyContext.Provider>
  );
};

export default NodeState;
