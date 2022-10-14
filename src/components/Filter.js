import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Rating from "./Rating";

const Filter = () => {
  const [rate, setRate] = useState(0);
  const onRatingClick = (i) => {
    setRate(i + 1);
  };
  return (
    <div className="filters">
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
        />
      </span>
      <span className="ratings">
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating rating={rate} onStarClickHandler={onRatingClick} />
      </span>
      <Button variant="light">Clear Filters</Button>
    </div>
  );
};

export default Filter;
