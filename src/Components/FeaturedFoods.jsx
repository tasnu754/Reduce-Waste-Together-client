import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedCards from "./FeaturedCards";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FeaturedFoods = () => {
    const [featuredFoods, setFeaturedFoods] = useState([]);
  useEffect(() => {
    axios
      .get(`https://reduce-waste-together-server.vercel.app/api/availableFoods2?sortField=foodQuantity&sortOrder=desc&veri=true`)
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
       { featuredFoods?.length > 6 &&  <Link to="/availableFoods">
          <motion.button animate={{rotate:360 , scale:1.5}} className="btn btn-outline btn-primary">Show All</motion.button>
        </Link>}
      </div>
    </div>
  );
};

export default FeaturedFoods;
