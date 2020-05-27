import React, { useState } from "react";
import bottle1a from "../Images/bottle1a.png";
import "./Phials.css";

const Phials = (props) => {
  const [quantity, setQuantity] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const onIncreaseCounter = () =>
    setQuantity(quantity + 1) & setSubTotal((quantity + 1) * props.price);

  const onDecreaseCounter = () =>
    setQuantity(quantity - 1) & setSubTotal((quantity - 1) * props.price);
  

  return (
    <div className="scent">
      <h3 className="title">{props.title}</h3>
      <h3 className="name">{props.name}</h3>

      <img class="image1" src={bottle1a} alt="Perfume Bottle" />

      <div className="qty">
        <button className="off" onClick={onDecreaseCounter}>
          -
        </button>
        <>
          <h3 className="amount">{quantity}</h3>
          <button className="add" onClick={onIncreaseCounter}>
            +
          </button>
        </>
      </div>
      <h3 className="price">Price £{props.price}</h3>

      <div className="subtotal">
        Subtotal:
        <p className="line-total">£{subTotal.toFixed(2)}</p>
      </div>
    </div>
  );
};
export default Phials;
