import React from "react";

function Card1(props) {
  return (
    <>
      <div
        className="card my-5 mx-auto"
        style={{ width: "18rem" }}>
        <img src={"https://images.unsplash.com/photo-1618782658650-2c6eb20e62ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{"Ford"}</h5>
          <p className="card-text">{"Ford Mustang Black Color Muscle Car"}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </>
  );
}

export default Card1;


