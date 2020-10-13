import React from "react"

function Product(props) {
  return (
    <div className="product">
        <h1>{props.name}</h1>
        <p>Price: {props.price}</p>
        <p>Description: {props.description}</p>
    </div>
  )
}

export default Product