import { useEffect, useState } from "react";

const useFoodData = () => {
  const [foodData, setFoodData] = useState();

  useEffect(() => {
    fetch("https://glacial-tor-09174.herokuapp.com/foods")
      .then((res) => res.json())
      .then((data) => setFoodData(data));
  }, []);

  return [foodData];
};

export default useFoodData;
