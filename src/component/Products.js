import React, { useState } from "react";
import list from "../data";
import Card from "./Card";

const Products = ({ handleClick }) => {
  const [data, setData] = useState(list);

  const filterResult = (catItem) => {
    const result = list.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };
  return (
    <>
      <div>
        <div className="category">
          <button onClick={() => filterResult("dress")}>Dresses</button>
          <button onClick={() => filterResult("jacket")}>Jackets</button>
        </div>
      </div>
      <section className="products">
        {data.map((item) => (
          <Card key={item.id} handleClick={handleClick} item={item} />
        ))}
      </section>
    </>
  );
};

export default Products;
