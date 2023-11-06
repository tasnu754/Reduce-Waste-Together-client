import PropTypes from "prop-types";

const FeaturedCards = ({ featuredFood }) => {
  console.log(featuredFood);
  return (
    <div className="">
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-[90%] mx-auto rounded-xl bg-clip-border">
        <h2 className="text-center md:text-xl lg:text-2xl font-bold text-green-700">
          {featuredFood.foodName}
        </h2>
        <div className="relative mx-4 mt-2 lg:mt-4 bg-cover overflow-hidden text-gray-700 bg-white shadow-2xl  rounded-xl bg-clip-border lg:h-72">
          <img
            className="object-cover w-full h-[100%]"
            src={featuredFood.foodImageURL}
            alt="profile-picture"
          />
        </div>
        <div className="p-2 lg:p-6 text-left flex gap-2">
          <div>
            <img
              className="w-8 h-8 rounded-full inline ml-2 lg:ml-4"
              src={featuredFood.donarImg}
              alt=""
            />
          </div>
          <h4 className="block md:text-xl lg:text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {featuredFood.donarName}
          </h4>
        </div>
        <div className="p-4 lg:p-6 space-y-2 lg:space-y-4 font-roboto">
          <div className="flex justify-between">
            <p>
              <span className="font-bold">Quantity : </span>
              {featuredFood.foodQuantity}
            </p>
            <p>
              {" "}
              <span className="font-bold">Expired In : </span>{" "}
              {featuredFood.expiredDate}
            </p>
          </div>
          <div>
            <p className="text-md">
              <span className="font-bold mr-2">Pickup Location : </span>
              {featuredFood.pickupLocation}
            </p>
          </div>
          <p>
            {" "}
            <span className="font-bold">Note :</span>{" "}
            {featuredFood.additionalNotes}
          </p>
          <button className="btn btn-neutral w-full">View Details</button>
        </div>
      </div>
    </div>
  );
};

FeaturedCards.propTypes = {
  featuredFood: PropTypes.object.isRequired,
};

export default FeaturedCards;
