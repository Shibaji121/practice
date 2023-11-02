import React, { useState } from "react";

const StarPattern = (props) => {
  const [lim, setLim] = useState(props.limit);
  return (
    <div>
      {[...new Array(10)].map((val, index) => {
        return (
          <span
            key={index}
            onClick={() => {
              setLim(index + 1);
            }}
          >
            {index < lim ? "🌟" : "⭐"}
          </span>
        );
      })}
    </div>
  );
};

export default StarPattern;
