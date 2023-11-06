import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedCards from "./FeaturedCards";

const FeaturedFoods = () => {
  const [featuredFoods, setFeaturedFoods] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/availableFoods")
      .then((response) => {
        setFeaturedFoods(response.data);
        //   console.log(response);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="w-[90%] mx-auto py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {featuredFoods?.map((featuredFood, idx) => (
        <FeaturedCards key={idx} featuredFood={featuredFood}></FeaturedCards>
      ))}
    </div>
  );
};

export default FeaturedFoods;
