import React, { useCallback, useEffect, useState } from "react";
import { useGlobalContext } from "../context/CartContext";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = useGlobalContext();

  console.log("produc", products);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const getFilteredProducts = useCallback(() => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }
    setFilteredProducts(sortedProducts);
  }, [sort, byStock, byFastDelivery, byRating, searchQuery, products]);

  useEffect(() => {
    getFilteredProducts();
  }, [getFilteredProducts]);

  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {filteredProducts.map((product) => {
          return <SingleProduct product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
