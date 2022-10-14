import React from "react";
import { useGlobalContext } from "../context/CartContext";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
  } = useGlobalContext();

  console.log("produc", products);

  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {products.map((product) => {
          return <SingleProduct product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
