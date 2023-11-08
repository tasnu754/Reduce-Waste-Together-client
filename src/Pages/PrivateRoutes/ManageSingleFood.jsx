import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleReqFood from "../../Components/SingleReqFood";
import { Heading } from "@chakra-ui/react";

const ManageSingleFood = () => {
    const { id } = useParams();
    const [manageReqFoods, setManageReqFoods] = useState([]);
    // const foodId = {
    //             id: id,
    //         };

    useEffect(() => {
      axios
        .get(`http://localhost:5000/api/requestedFoods/${id}`)
          .then((res) => {
            // console.log(res.data);
          setManageReqFoods(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [id]);

    console.log(manageReqFoods);

    return (
        <div >
            <Heading className="text-center">Requested Users</Heading>
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {manageReqFoods?.map((manageReqFood, idx) => (
            <SingleReqFood
              key={idx}
              manageReqFood={manageReqFood}
            ></SingleReqFood>
          ))}
        </div>
      </div>
    );
};

export default ManageSingleFood;