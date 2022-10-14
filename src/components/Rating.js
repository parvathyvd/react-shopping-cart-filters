import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const Rating = ({ rating, onStarClickHandler }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => {
        return (
          <span
            key={i}
            onClick={() => onStarClickHandler(i)}
            style={{ cursor: "pointer", marginRight: "0.3rem" }}
          >
            {rating > i ? (
              <AiFillStar fontSize="15px" />
            ) : (
              <AiOutlineStar fontSize="15px" />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
