import React, { useEffect, useState } from "react";

const FetchAndSort = () => {
  const [data, setData] = useState([]);
  const url = "https://reqres.in/api/users";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error(error));
  }, []);
  const handleSort = () => {
    console.log(data);
    const newData = [...data].sort((a, b) =>
      a.first_name.localeCompare(b.first_name)
    );
    setData(newData);
  };
  return (
    <div>
      {data.map((dt) => {
        return (
          <div key={dt.id}>
            {dt.first_name} {dt.last_name}
          </div>
        );
      })}
      <button onClick={() => handleSort()}>sort</button>
    </div>
  );
};

export default FetchAndSort;
