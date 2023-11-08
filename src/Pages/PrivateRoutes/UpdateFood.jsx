import { useContext, useState } from "react";
import { AuthProvider } from "../../Auth/Authenticate";
import axios from "axios";
import swal from "sweetalert";
import { useLoaderData } from "react-router-dom";

const UpdateFood = () => {
    const [dateError, setDateError] = useState(false);
    const { user } = useContext(AuthProvider);
    const upFooditem = useLoaderData();
 

    const donarEmail = user?.email;
    const donarImg = user?.photoURL;
    const donarName = user?.displayName;

    const handleAddProduct = (e) => {
      e.preventDefault();

      setDateError(false);

      const form = e.target;
      const foodName = form.name.value;
      const foodImageURL = form.image.value;
      const foodQuantity = parseInt(form.quantity.value);
      const pickupLocation = form.location.value;
      const foodStatus = form.status.value;
      const expiredDate = form.date.value;
      const additionalNotes = form.note.value;

      const datePattern = /^\d{4}-\d{2}-\d{2}$/;
      if (!datePattern.test(expiredDate)) {
        return setDateError(true);
      }

      const updateFooditem = {
        foodName,
        foodImageURL,
        foodQuantity,
        pickupLocation,
        expiredDate,
        additionalNotes,
        foodStatus,
        donarEmail,
        donarImg,
        donarName,
      };

    //   form.reset();
      axios
        .put(
          `http://localhost:5000/api/availableFoods/update/${upFooditem._id}`,
          updateFooditem
        )
        .then((response) => {
          console.log(response.data);
          if (response.data.modifiedCount > 0) {
            swal("Food Updated!", "Successfully", "success");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return (
      <div>
        <section className="bg-white ] dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 className="mb-4 text-5xl font-bold text-[#53346D] dark:text-white text-center">
              Update Food
            </h2>
            <form onSubmit={handleAddProduct}>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Food Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type Food name"
                    defaultValue={upFooditem.foodName}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Food Image
                  </label>
                  <input
                    type="text"
                    name="image"
                    id="image"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Image"
                    defaultValue={upFooditem.foodImageURL}
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="type"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Food Quantity"
                    defaultValue={upFooditem.foodQuantity}
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="location"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Location"
                    defaultValue={upFooditem.pickupLocation}
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="date"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Expired Date
                  </label>
                  <input
                    type="text"
                    name="date"
                    id="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="yyyy-mm-dd"
                    defaultValue={upFooditem.expiredDate}
                  />
                  {dateError && (
                    <p className="text-red-500 mt-2">
                      Please give valid date format <br />
                      (yyyy-mm-dd)
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <label
                    htmlFor="text"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Status
                  </label>
                  <input
                    type="text"
                    name="status"
                    id="status"
                    defaultValue={upFooditem.foodStatus}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Food status"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Additional Notes
                  </label>
                  <textarea
                    name="note"
                    id="note"
                    rows={5}
                    className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your description here"
                    defaultValue={upFooditem.additionalNotes}
                  />
                </div>
              </div>
              <div className="w-[80%] mx-auto">
                <button type="submit" className="btn btn-nav md:w-full">
                  Update
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
};

export default UpdateFood;