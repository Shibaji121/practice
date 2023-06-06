import React from "react";

const Higher = (AnyFunction) => {
  function subject() {
    return <AnyFunction value="Shibaji Sahu" />;
  }
  return subject;
};
export default Higher;
