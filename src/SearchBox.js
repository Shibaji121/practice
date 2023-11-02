import React, { useState } from "react";

const SearchBox = () => {
  let SearchItems = ["Apple", "Kiwi", "Orange"];
  const [text, setText] = useState("");
  //   const [Sitem, setSitem] = useState(SearchItems);

  //   const handleChange = (value) => {
  //     setSitem((prev) => prev.filter((item) => item.includes(value)));
  //   };

  SearchItems = SearchItems.filter((item) =>
    item.toLowerCase().includes(text.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the item"
        onChange={(e) => setText(e.target.value)}
      />
      <ul>
        {SearchItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchBox;
