import React from "react";
import "bootstrap/dist/css/bootstrap.css";

let Button = ({ data, className }) => {
  return (
    <>
      <button className={className}>{data}</button>
    </>
  );
};
export default Button;
