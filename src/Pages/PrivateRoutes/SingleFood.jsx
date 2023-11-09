import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { AuthProvider } from "../../Auth/Authenticate";
import swal from "sweetalert";

const SingleFood = () => {

  const [singleFood, setSingleFood] = useState({});
  const { id } = useParams();
  const { user } = useContext(AuthProvider);
  const [sameUser, setSameUser] = useState(false);
  const [err, setErr] = useState(false);
   
  if (sameUser) {
    const modal = document.getElementById("my_modal_5");
       if (modal) {
         modal.close();
       }
    swal("You can`t request your own food!", "Warning", "warning");
  }



  useEffect(() => {
    const userEmail = { email: user.email };
    axios
      .get(`https://reduce-waste-together-server.vercel.app/api/singleFood/${id}`, {
        params: userEmail,
        withCredentials: true,
      })
      .then((res) => {
        setSingleFood(res.data);
      })
      .catch((error) => {
        console.log(error);
        setErr(true)
      });
  }, [user.email, id]);
  

  
     
  const handleRequest = (e) => {
      
    e.preventDefault();

     if (user?.email === singleFood?.donarEmail) {
       
       return setSameUser(!sameUser);
     }
    const donatMoney = parseInt(e.target.money.value) || 0;
    const additionalNotes = e.target.note.value;
    const today = new Date();
    const requestDate = format(today, "yyyy-MM-dd HH:mm:ss");
    const foodName = singleFood.foodName;
    const foodImageURL = singleFood.foodImageURL;
    const foodId = singleFood._id;
    const pickupLocation = singleFood.pickupLocation;
    const expiredDate = singleFood.expiredDate;
    const donarName = singleFood.donarName;
    const donarEmail = singleFood.donarEmail;
    const requesterEmail = user.email; 
    const requesterName = user.displayName; 
    const requesterPhoto = user.photoURL; 

    const requestedFood = {
      foodName,
      foodImageURL,
      donarName,
      donarEmail,
      requesterPhoto,
      requesterName,
      requesterEmail,
      requestDate,
      pickupLocation,
      expiredDate,
      additionalNotes,
      donatMoney,
      foodId,
    };
    e.target.reset();
    const modal = document.getElementById("my_modal_5");
    if (modal) {
      modal.close();

    }

    axios
      .post("https://reduce-waste-together-server.vercel.app/api/requestedFoods", requestedFood)
      .then((response) => {
        console.log(response.data);
        if (response.data.insertedId) {
          swal("Requested!", "Successfully", "success");
        }
      })
      .catch((error) => {
        console.log(error);
      });



  }
  // singleFood.length==0 ? <h3>Not Valid</h3> :
     console.log(singleFood);

    return (
      <div>
        {err ? (
          <h3 className="text-center font-bold py-10 text-3xl">Not Valid Token</h3>
        ) : (
          <div className="lg:flex gap-6 p-6">
            <div className="lg:w-1/2 text-center">
              <img
                className="rounded-none mb-6"
                src={singleFood.foodImageURL}
                alt=""
              />
            </div>

            <div className=" lg:w-1/2 ">
              <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
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
                    <span className="font-bold">Name : </span>{" "}
                    {singleFood.foodName}
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

              <div className=" md:w-[50%] mx-auto mt-14 ">
                <div className="border-2 border-black rounded-lg md:h-[120px] space-y-4  px-4 py-2 text-center">
                  <h2 className="text-center text-xl font-bold text-black">
                    Request For The Food
                  </h2>

                  {/* Request modal  */}
                  <button
                    className="btn btn-outline btn-info"
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                  >
                    Request
                  </button>
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle px-6 md:px-2"
                  >
                    <div className="modal-box">
                      <form onSubmit={handleRequest}>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="money"
                            className="block mb-2 text-xl font-medium text-cyan-700 dark:text-white"
                          >
                            Want to donate some money?
                          </label>
                          <input
                            type="number"
                            name="money"
                            placeholder="Amount"
                            className="input input-bordered input-info w-full max-w-xs"
                          />
                        </div>
                        <div className="sm:col-span-2 mt-4">
                          <label
                            htmlFor="note"
                            className="block my-2 text-xl font-medium text-cyan-700 dark:text-white"
                          >
                            Additional Notes
                          </label>
                          <textarea
                            name="note"
                            id="note"
                            rows={5}
                            className=" block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Your description here"
                            defaultValue={""}
                            required
                          />
                        </div>

                        {/* if there is a button in form, it will close the modal */}
                        <div className="mt-6">
                          <button type="submit" className="btn btn-info">
                            Request
                          </button>
                        </div>
                      </form>
                      <div className="modal-action flex justify-center"></div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default SingleFood;