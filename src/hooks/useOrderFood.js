import { useEffect, useState } from "react";

const useOrderFood = () => {
  const [orderedFoods, setOrderedFoods] = useState();

  useEffect(() => {
    fetch("https://glacial-tor-09174.herokuapp.com/foods")
      .then((res) => res.json())
      .then((data) => setOrderedFoods(data));
  }, []);

  return [orderedFoods];
};

export default useOrderFood;
