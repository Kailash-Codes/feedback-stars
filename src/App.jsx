import React, { useState } from "react";
import { BiStar } from "react-icons/bi";
import Star from "./components/Star";
const App = () => {
  const [number, setNumber] = useState(0);
  const [starArr, setArr] = useState([
    { id: 1, clicked: false },
    { id: 2, clicked: false },
    { id: 3, clicked: false },
    { id: 4, clicked: false },
    { id: 5, clicked: false },
  ]);
  const handleStarClick = (number) => {
    setNumber(number);
    // setArr();
    const mapped = starArr.map((each) => {
      if (each.id <= number) {
        each.clicked = true;
      } else {
        each.clicked = false;
      }
      return each;
    });
    setArr(mapped);
  };

  const iconSize = 30;
  return (
    <div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        {starArr.map((eachStar, index) => {
          return (
            <Star
              key={eachStar.id}
              handleStarClick={handleStarClick}
              starIndex={eachStar.id}
              clicked={eachStar.clicked}
            />
          );
        })}
        <p style={{ fontSize: "20px" }}>{number}</p>
      </div>
    </div>
  );
};

export default App;
