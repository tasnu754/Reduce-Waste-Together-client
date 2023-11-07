import axios from "axios";
import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";

const SingleFood = () => {
    const [singleFood, setSingleFood] = useState({});
    const { id } = useParams();


    useEffect(() => {
        axios
          .get(`http://localhost:5000/api/singleFood/${id}`)
          .then((res) => {
            setSingleFood(res.data);
          })
          .catch((error) => {
            console.log(error);
          });

    },[id])
     
    console.log(singleFood , "single");
    return (
      <div className="flex gap-6 p-6">
        <div className="w-1/2 ">
          <img className="rounded-none" src={singleFood.foodImageURL} alt="" />
        </div>

        <div className=" w-1/2 ">
          <div className="space-y-6">
            <div>
              <h2 className=" underline text-2xl font-bold mb-4">
                Donar Information:
              </h2>
              <h3 className="text-xl">
                <span className="font-bold">Name : </span>
                {singleFood.donarName}
              </h3>
              <p className="text-xl">
                <span className="font-bold font-roboto">
                  Pickup Location :{" "}
                </span>{" "}
                {singleFood.pickupLocation}
              </p>
            </div>
            <br />
            <hr />
            <div>
              <h2 className=" underline text-2xl font-bold mb-4">
                Food Information:
              </h2>
              <p className="text-xl">
                {" "}
                <span className="font-bold">Name : </span> {singleFood.foodName}
              </p>
              <p className="text-xl">
                <span className="font-bold">Quanity : </span>{" "}
                {singleFood.foodQuantity}
              </p>
              <p className="text-xl">
                <span className="font-bold">Expired In : </span>{" "}
                {singleFood.expiredDate}
              </p>
            </div>
            <div className=" text-xl w-full">
              <span className="font-bold ">About the Food : </span>
              {singleFood.additionalNotes}
            </div>
          </div>

          <div className=" w-[50%] mx-auto mt-14 ">
            <div className="border-2 border-black rounded-lg h-[120px] space-y-4  px-4 py-2 text-center">
              <h2 className="text-center text-xl font-bold text-black">
                Request For The Food
              </h2>
              <button className="btn btn-outline btn-info">Request</button>
            </div>
          </div>
          {/* {currentDate.toISOString().split("T")[0]} */}
        </div>
      </div>
    );
};

export default SingleFood;