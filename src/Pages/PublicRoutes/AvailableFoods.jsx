import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedCards from "../../Components/FeaturedCards";
import { Spinner } from "@chakra-ui/react";

const AvailableFoods = () => {
  const [featuredFoods, setFeaturedFoods] = useState([]);
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/availableFoods?sortDate=expiredDate&veri=true`)
      .then((response) => {
        setFeaturedFoods(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [featuredFoods.expiredDate]);
  console.log(featuredFoods);
  return (
    <div>
      {loading ? (
        <p className="text-center my-10">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </p>
      ) : (
        <div>
          <div className="w-full my-6">
            <h2 className="text-center py-4 text-2xl font-bold text-purple-900">
              Search Foods
            </h2>
            <div className="flex w-80 mx-auto justify-center flex-col items-end gap-6">
              <div className="relative h-14 w-full min-w-[200px]">
                <input
                  className="peer  h-full w-full rounded-[7px] border border-red-500 border-t-transparent bg-transparent px-3 py-2.5 text-md font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-red-500 placeholder-shown:border-t-red-500 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-lg font-normal leading-tight text-red-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-red-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-red-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Food Name
                </label>
              </div>
            </div>
          </div>

          <div className="w-[90%] mx-auto pt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredFoods?.map((featuredFood, idx) => (
              <FeaturedCards
                key={idx}
                featuredFood={featuredFood}
              ></FeaturedCards>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailableFoods;
