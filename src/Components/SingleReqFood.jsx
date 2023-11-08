import { Button, Heading, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";

const SingleReqFood = ({ manageReqFood }) => {
    // console.log(manageReqFood);
  
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
      <Button>Deliver</Button>
    </div>
  );
};

SingleReqFood.propTypes = {
  manageReqFood: PropTypes.object.isRequired,
};
export default SingleReqFood;
