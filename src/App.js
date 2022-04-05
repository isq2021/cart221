import React, { useState, useEffect } from "react";
import Products from "./component/Products";
import Navbar from "./component/Navbar";
import Cart from "./component/Cart";
import ProductScreen from "./component/ProductScreen";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    console.log(d);

    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar setShow={setShow} size={cart.length} />{" "}
        {show ? (
          <Route
            path="/"
            exact="true"
            component={() => <Products handleClick={handleClick} />}
          />
        ) : (
          <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
        )}
        <Route path="/item/:id" exact="true" component={ProductScreen} />{" "}
        <Route path="productScreen" exact="true" component={ProductScreen} />{" "}
      </BrowserRouter>{" "}
    </React.Fragment>
  );
};

export default App;
