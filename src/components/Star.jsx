import React from "react";
import { BiStar } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
const Star = ({ handleStarClick, clicked, starIndex }) => {
  return (
    <div>
      {clicked ? (
        <AiFillStar
          style={{ cursor: "pointer" }}
          size={30}
          color="red"
          onClick={() => handleStarClick(starIndex)}
        />
      ) : (
        <BiStar
          style={{ cursor: "pointer" }}
          size={30}
          color="red"
          onClick={() => handleStarClick(starIndex)}
        />
      )}
    </div>
  );
};

export default Star;
