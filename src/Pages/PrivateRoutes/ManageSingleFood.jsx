import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleReqFood from "../../Components/SingleReqFood";
import { Heading } from "@chakra-ui/react";
import swal from "sweetalert";

const ManageSingleFood = () => {
    const { id } = useParams();
    const [manageReqFoods, setManageReqFoods] = useState([]);
    const [allFoods, setAllFoods] = useState([]);
   
  

    useEffect(() => {
         axios
           .get("https://reduce-waste-together-server.vercel.app/api/availableFoods")
           .then((res) => setAllFoods(res.data))
           .catch((err) => console.log(err.message));
      axios
        .get(`https://reduce-waste-together-server.vercel.app/api/requestedFoods/${id}`)
          .then((res) => {
            // console.log(res.data);
          setManageReqFoods(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [id]);

 const handleDeli = () => {
   swal({
     title: "Are you sure?",
     text: "You want to deliverd the food",
     icon: "warning",
     dangerMode: true,
   })
     .then((willDelete) => {
       if (willDelete) {
         axios
           .delete(`https://reduce-waste-together-server.vercel.app/api/delivered/${id}`)
           .then((res) => {
             console.log(res);
             if (res.data.result1.deletedCount > 0) {
               const remain1 = allFoods.filter((food) => food._id != id);
               const remain2 = manageReqFoods.filter((food) => food.foodId != id);

               swal("Deliverd Food!", "You changed the status!", "success");
               setAllFoods(remain1);
               setManageReqFoods(remain2);
             }
           });
       }
     })
     .catch((err) => console.log(err.message));
 };


    return (
      <div>
        <Heading className="text-center my-10">Requested Users</Heading>

        {manageReqFoods.length ? (
          <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            {manageReqFoods?.map((manageReqFood, idx) => (
              <SingleReqFood
                key={idx}
                manageReqFood={manageReqFood}
                handleDeli={handleDeli}
              ></SingleReqFood>
            ))}
          </div>
        ) : (
          <h2 className="text-3xl text-center font-bold my-6">
            No Requested in this food yet
          </h2>
        )}
      </div>
    );
};

export default ManageSingleFood;