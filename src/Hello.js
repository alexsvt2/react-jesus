import React from "react";

function Hello(props) {
  console.log(props.value);

  return <h1 style={{ textDecoration: "underline" }}>Hello {props.name}</h1>;
}

export default Hello;
