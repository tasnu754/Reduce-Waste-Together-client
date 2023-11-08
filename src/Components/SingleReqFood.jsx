import { Button, Heading, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";


const SingleReqFood = ({ manageReqFood, handleDeli }) => {
  //   const [allFoods, setAllFoods] = useState([]);
  //   const [reqFoods, setReqFoods] = useState([]);

  //   const id = manageReqFood?.foodId;

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:5000/api/availableFoods")
  //       .then((res) => setAllFoods(res.data))
  //       .catch((err) => console.log(err.message));
  //     axios
  //       .get(`http://localhost:5000/api/requestedFoods/${id}`)
  //       .then((res) => {
  //         setManageReqFoods(res.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, [id, setManageReqFoods]);

  //   const handleDeli = () => {
  //     swal({
  //       title: "Are you sure?",
  //       text: "You want to deliverd the food",
  //       icon: "warning",
  //       dangerMode: true,
  //     })
  //       .then((willDelete) => {
  //         if (willDelete) {
  //           axios
  //             .delete(`http://localhost:5000/api/delivered/${id}`)
  //             .then((res) => {
  //               console.log(res);
  //               if (res.data.result1.deletedCount > 0) {
  //                 const remain1 = allFoods.filter((food) => food._id != id);
  //                 const remain2 = reqFoods.filter((food) => food._id != id);

  //                 swal("Deliverd!", "You changed the status!", "success");
  //                 setAllFoods(remain1);
  //                 setReqFoods(remain2);
  //               }
  //             });
  //         }
  //       })
  //       .catch((err) => console.log(err.message));
  //   };

  return (
    <div className="py-6  md:px-0 text-center md:text-left my-10 md:flex items-center justify-center gap-6 border-2 rounded-lg border-yellow-800 bg-amber-200">
      <div className="pl-24 md:pl-0">
        <Image
          borderRadius="full"
          boxSize="130px"
          src={manageReqFood.requesterPhoto}
          alt="Dan Abramov"
        />
      </div>
      <div className="space-y-4 px-2 md:px-0">
        <Heading>{manageReqFood.requesterName}</Heading>
        <Heading>{manageReqFood.requesterEmail}</Heading>
        <Heading>{manageReqFood.requestDate}</Heading>
      </div>
      <Button onClick={handleDeli} colorScheme="orange">
        Deliver?
      </Button>
    </div>
  );
};

SingleReqFood.propTypes = {
  manageReqFood: PropTypes.object,
  handleDeli: PropTypes.func,
};
export default SingleReqFood;
