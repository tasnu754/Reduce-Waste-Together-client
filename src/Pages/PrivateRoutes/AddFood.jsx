
const AddFood = () => {

    const handleAddProduct = () => {
        
    }


    return (
      <div>
        <section className="bg-white ] dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 className="mb-4 text-5xl font-bold text-[#53346D] dark:text-white text-center">
              Add Food
            </h2>
            <form onSubmit={handleAddProduct} action="#">
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
                    required
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
                    required
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
                    type="text"
                    name="quantity"
                    id="quantity"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Food Quantity"
                    required
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
                    required
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
                    type="date"
                    name="date"
                    id="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Date"
                    required
                  />
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
                    defaultValue="Available"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Food status"
                    required
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
                    name="des"
                    id="description"
                    rows={5}
                    className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your description here"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="w-[80%] mx-auto">
                <button type="submit" className="btn btn-nav md:w-full">
                  Add Food
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
};

export default AddFood;