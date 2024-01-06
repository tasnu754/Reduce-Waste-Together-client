import FeaturedFoods from "./FeaturedFoods";
import Header from "./Header";
import Section from "./Section";
import Team from "./Team";
import WhatWeDo from "./WhatWeDo";

const Home = () => {
    return (
      <div>
        <Header></Header>
        <FeaturedFoods></FeaturedFoods>
        <Team></Team>
        <Section></Section>
        <WhatWeDo></WhatWeDo>
      </div>
    );
};

export default Home;