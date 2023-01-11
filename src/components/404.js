import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="">
        <h1>Page Not Found</h1> 
        <Link to ="/"> Back</Link>
      </div>
    </>
  );
};

export default Error;
