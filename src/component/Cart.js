import React, { useState, useEffect } from "react";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(1);
  console.log(price, "price");

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price]);

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" />
            <p> {item.name} </p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}> + </button>
            <button> {item.amount} </button>
            <button onClick={() => handleChange(item, -1)}> - </button>
          </div>
          <div>
            <span> {item.price} som </span>
            <button onClick={() => handleRemove(item.id)}> Remove </button>
          </div>
        </div>
      ))}
      <div className="total">
        <span> Total Price of your Cart </span>
        <span> {`Всего : ${price} som`} </span>
      </div>
    </article>
  );
};

export default Cart;
