import { useEffect, useState } from "react";

const useFoodData = () => {
  const [foodData, setFoodData] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setFoodData(data));
  }, []);

  return [foodData];
};

export default useFoodData;
