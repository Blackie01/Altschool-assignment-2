import React from "react";
import "./error404.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="errorMessage">
      <h1>You took a wrong turn!</h1>

      <Link to="/">
        <button>Let's go home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
