import { GiBowlOfRice, GiChickenOven } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiOutlineHeatMap } from "react-icons/ai";
import { FaBottleWater } from "react-icons/fa6";
import { MdFoodBank } from "react-icons/md";

const WhatWeDo = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className="w-full text-center py-14 space-y-10 px-6"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">What we do?</h3>
        <p className="text-4xl font-bold">
          We believe that we can save more lifes and <br />
          prevent waste foods with you
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex items-center gap-6">
          <GiBowlOfRice className="text-9xl px-4 text-orange-400 border-r-2 border-orange-400"></GiBowlOfRice>
          <div className="text-left space-y-4">
            <h2 className="text-2xl font-bold">Provide Healthy Food</h2>
            <p className="text-gray-600">
              Improving health through better food & nutrition research,
              education, programs & policies. Communities face significant
              barriers to getting fresh, nutritious, and plentiful food.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <IoFastFoodOutline className="text-9xl px-4 text-orange-400 border-r-2 border-orange-400"></IoFastFoodOutline>
          <div className="text-left space-y-4">
            <h2 className="text-2xl font-bold">Collect Foods</h2>
            <p className="text-gray-600">
              Food For The Poor is God`s instrument to help the materially poor
              and to renew the poor in spirit.Think shelf-stable dried and
              canned goods—pantry staples like beans, rice, pasta, soup, peanut
              butter, cereal.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <GiChickenOven className="text-9xl px-4 text-orange-400 border-r-2 border-orange-400"></GiChickenOven>
          <div className="text-left space-y-4">
            <h2 className="text-2xl font-bold">Delivered Food to poors</h2>
            <p className="text-gray-600">
              Donate food. Food banks are helping more people than ever. Support
              your local food bank by donating food and other essentials.
              mergency Support. If you`re struggling, find out how to get help
              from your local food bank.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <AiOutlineHeatMap className="text-9xl px-4 text-orange-400 border-r-2 border-orange-400"></AiOutlineHeatMap>
          <div className="text-left space-y-4">
            <h2 className="text-2xl font-bold">Determine Food Quality</h2>
            <p className="text-gray-600">
              f you want the growth of the world, then you should and must
              educate poor kids who do not have money to have a good education.
              There are people who are also struggling to have shelter and
              clothes.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <FaBottleWater className="text-8xl px-4 text-orange-400 border-r-2 border-orange-400"></FaBottleWater>
          <div className="text-left space-y-4">
            <h2 className="text-2xl font-bold">Pure Water</h2>
            <p className="text-gray-600">
              Water and poverty are inextricably linked. Poor access to water
              and insufficient sanitation affect the health of the poor, their
              food security, and their prospects for making a living.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <MdFoodBank className="text-9xl px-4 text-orange-400 border-r-2 border-orange-400"></MdFoodBank>
          <div className="text-left space-y-4">
            <h2 className="text-2xl font-bold">Distribute Foods</h2>
            <p className="text-gray-600">
              Producing. Handling and storage. Processing and packaging, similar
              to eCommerce packaging and subscription box packaging
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
