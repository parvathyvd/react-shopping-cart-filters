import React from "react";
import { Form, Button } from "react-bootstrap";
import { useGlobalContext } from "../context/CartContext";
import Rating from "./Rating";

const Filter = () => {
  const {
    productState: { byStock, byFastDelivery, byRating, sort },
    productDispatch,
  } = useGlobalContext();

  return (
    <div className="filters">
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onClick={() => {
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            });
          }}
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onClick={() => {
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            });
          }}
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onClick={() => {
            productDispatch({
              type: "OUT_OF_STOCK",
            });
          }}
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onClick={() => {
            productDispatch({
              type: "FAST_DELIVERY",
            });
          }}
          checked={byFastDelivery}
        />
      </span>
      <span className="ratings">
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          onStarClickHandler={(i) => {
            productDispatch({
              type: "RATING",
              payload: i + 1,
            });
          }}
        />
      </span>
      <Button
        variant="light"
        onClick={() => {
          productDispatch({
            type: "CLEAR",
          });
        }}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filter;
