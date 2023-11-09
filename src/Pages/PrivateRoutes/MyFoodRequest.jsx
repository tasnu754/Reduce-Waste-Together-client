import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../Auth/Authenticate";
import axios from "axios";
import swal from "sweetalert";

const MyFoodRequest = () => {
    const [myFoodReg, setMyFoodReq] = useState([]);
    const { user } = useContext(AuthProvider);
    
        useEffect(() => {
          axios
            .get(
              `http://localhost:5000/api/requestedFoods?requesterEmail=${user.email}`
            )
            .then((res) => setMyFoodReq(res.data))
            .catch((err) => console.log(err.message));
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
                          `http://localhost:5000/api/requestedFoods/${id}`
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
      <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 place-content-center">
        {myFoodReg.length === 0 ? (
          <h2>No food Requested yet</h2>
        ) : (
          myFoodReg?.map((food) => (
            <div className="card  glass" key={food._id}>
              <div className="card-body">
                <h2 className="card-title">Donar: {food.donarName}</h2>
                <p className="font-bold">
                  Pickup Location: {food.pickupLocation}{" "}
                </p>
                <p className="font-bold">Expired In: {food.expiredDate} </p>
                <p className="font-bold">Requested Date: {food.requestDate} </p>
                <p className="font-bold">
                  Your Donation Amount: $
                  {food.donatMoney != 0 ? food.donatMoney : "No doantion"}{" "}
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
    );
};

export default MyFoodRequest;