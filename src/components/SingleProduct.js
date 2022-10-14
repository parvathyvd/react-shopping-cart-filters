import React from "react";
import { Button, Card } from "react-bootstrap";
import { useGlobalContext } from "../context/CartContext";
import Rating from "./Rating";

const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = useGlobalContext();
  console.log(cart);
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle>
          {`$ ${product.price}`}
          {product.fastDelivery ? (
            <div>Fast Delivery</div>
          ) : (
            <div> 4 Days Delivery</div>
          )}
          <Rating rating={product.ratings} />
        </Card.Subtitle>
        {cart.some((cart) => {
          return cart.id === product.id;
        }) ? (
          <Button
            variant="danger"
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: product.id,
              });
            }}
          >
            Remove From Cart
          </Button>
        ) : (
          <Button
            variant="success"
            disabled={!product.inStock}
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: product,
              });
            }}
          >
            {product.inStock > 0 ? "Add To Cart" : "Out of Stock"}
          </Button>
        )}
      </Card>
    </div>
  );
};

export default SingleProduct;
