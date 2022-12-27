import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./notfound.css";
const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className="body">
      <img src="" alt="" />
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>

      <div className="helpfulLinks">
        <button className="backHomeBtn">
          <Link to={"/"}>Home</Link>
        </button>
        <button
          className="goBackBtn"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Notfound;
