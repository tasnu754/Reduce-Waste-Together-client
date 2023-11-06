import FeaturedFoods from "./FeaturedFoods";
import Header from "./Header";
import Team from "./Team";
import WhatWeDo from "./WhatWeDo";

const Home = () => {
    return (
      <div>
        <Header></Header>
        <FeaturedFoods></FeaturedFoods>
        <Team></Team>
        <WhatWeDo></WhatWeDo>
      </div>
    );
};

export default Home;