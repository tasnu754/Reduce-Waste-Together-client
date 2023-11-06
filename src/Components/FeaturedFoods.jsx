import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedCards from "./FeaturedCards";
import { Link } from "react-router-dom";

const FeaturedFoods = () => {
    const [featuredFoods, setFeaturedFoods] = useState([]);
    
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/availableFoods?sortField=foodQuantity&sortOrder=desc`)
      .then((response) => {
        setFeaturedFoods(response.data);
        //   console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="w-[90%] mx-auto pt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredFoods?.slice(0, 6).map((featuredFood, idx) => (
          <FeaturedCards key={idx} featuredFood={featuredFood}></FeaturedCards>
        ))}
      </div>
      <div className="text-center my-10">
        <Link to="/availableFoods">
          <button className="btn btn-outline btn-primary">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedFoods;
