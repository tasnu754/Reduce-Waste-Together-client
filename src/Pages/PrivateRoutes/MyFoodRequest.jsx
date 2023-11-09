import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../Auth/Authenticate";
import axios from "axios";
import swal from "sweetalert";
import { Spinner } from "@chakra-ui/react";

const MyFoodRequest = () => {
    const [myFoodReg, setMyFoodReq] = useState([]);
    const { user } = useContext(AuthProvider);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(false);
    
        useEffect(() => {
          axios
            .get(
              `https://reduce-waste-together-server.vercel.app/api/requestedFoods?requesterEmail=${user.email}` , {withCredentials:true}
            )
              .then((res) => {
                  setMyFoodReq(res.data);
                  setLoading(false)
              })
              .catch((err) => {
                  setErr(true);
                  console.log(err.message)
              });
        }, [user.email]);
    
    const handleCancelReq = (id) => {
       
                swal({
                  title: "Are you sure?",
                  text: "You want to cancel the request",
                  icon: "warning",
                  dangerMode: true,
                })
                  .then((willDelete) => {
                    if (willDelete) {
                      axios
                        .delete(
                          `https://reduce-waste-together-server.vercel.app/api/requestedFoods/${id}`
                        )
                        .then((res) => {
                          console.log(res);
                          if (res.data.deletedCount > 0) {
                            const remain = myFoodReg.filter(
                              (food) => food._id != id
                            );

                            swal(
                              "Canceled!",
                              "Your request has been canceled!",
                              "success"
                            );
                            setMyFoodReq(remain);
                          }
                        });
                    }
                  })
                  .catch((err) => console.log(err.message));
      
    }
    
    
    return (
      <div>
        {err ? (
          <h3 className="text-center font-bold py-10 text-3xl">Not Valid Token</h3>
        ) : (
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
              <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 place-content-center">
                {myFoodReg.length === 0 ? (
                  <h2>No food Requested yet</h2>
                ) : (
                  myFoodReg?.map((food) => (
                    <div className="card glass" key={food._id}>
                      <div className="card-body">
                        <h2 className="card-title">Donor: {food.donorName}</h2>
                        <p className="font-bold">
                          Pickup Location: {food.pickupLocation}
                        </p>
                        <p className="font-bold">
                          Expired In: {food.expiredDate}
                        </p>
                        <p className="font-bold">
                          Requested Date: {food.requestDate}
                        </p>
                        <p className="font-bold">
                          Your Donation Amount: $
                          {food.donatMoney !== 0
                            ? food.donatMoney
                            : "No donation"}
                        </p>
                        <div className="card-actions justify-center mt-6">
                          <button
                            onClick={() => handleCancelReq(food._id)}
                            className="btn btn-accent"
                          >
                            Cancel Request
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
};

export default MyFoodRequest;