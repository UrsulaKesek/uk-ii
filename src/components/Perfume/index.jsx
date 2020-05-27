import React from "react";
import Phials from "../Phials/index.jsx";
import "./Perfume.css";
const Perfume = () => {
  const database = [
    {
      title: "Scent No.1",
      name:"Poets of Berlin: A blend of Wild green orris,vanilla,blueberry,lemon,vetiver.",
      prefix:"£",
      price: 185.0,
      quantity: 0,
      subTotal:0,
      id: 1,
    },
    {
      title: "Scent No.2",
      name: "Basso Continuo in Noto :A blend of:Marsala Cask Whisky/Sandalwood/Vetiver/Leather.",
      prefix:"£",
      price: 145.0,
      quantity: 0,
      subTotal:0,
      id: 2,
    },
    {
      title: "Scent No.3",
      name: "Toamasina Ensemble:An Island Blend:Grapefruit/Cardomom/Vetiver/Vanilla.",
      prefix:"£",
      price: 160.0,
      quantity: 0,
      subTotal:0,
      id: 3,
    },
    {
      title: "Scent No.4",
      name: "Jazz New York:A classic blend of:Patchouli/Cedar/Lime.",
      prefix:"£",
      price: 150.0,
      quantity: 0,
      subTotal:0,
      id: 4,
    },
  ];
  return (
    <div className="card">
      {database.map((item) => (
        <Phials
          title={item.title}
          name={item.name}
          prefix={item.prefix}
          price={item.price}
          quantity={item.quantity}
          subTotal={item.price * item.quantity}
          key={item.id}
        />
      ))}
    </div>
  );
};
export default Perfume;
