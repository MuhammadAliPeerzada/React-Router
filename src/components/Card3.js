import React from 'react'

function Card3() {
  return (
    <div
        className="card my-5 mx-auto"
        style={{ width: "18rem" }}>
        <img src={"https://images.unsplash.com/photo-1619844175408-c05947985e2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">PORCHE</h5>
          <p className="card-text">Cyan Porche On Road</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
  )
}

export default Card3