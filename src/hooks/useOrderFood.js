import { useEffect, useState } from "react";

const useOrderFood = () => {
  const [orderedFoods, setOrderedFoods] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setOrderedFoods(data));
  }, []);

  return [orderedFoods];
};

export default useOrderFood;
