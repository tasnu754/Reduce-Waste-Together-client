import { BiDonateHeart } from "react-icons/bi";

const Header = () => {
  return (
    <div className=" relative mt-10">
      <div className="banner w-full h-screen "></div>
      <div className="absolute top-0">
        <div className="flex justify-center items-center h-screen w-1/2 mx-auto ">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-white space-y-4 "
          >
            <h2 className=" text-center text-5xl font-bold">
              Let`s Be Involved <br /> With Helping Hands
            </h2>
            <p className="text-2xl text-justify">
              A large number of the people will spend tonight hungry, not
              knowing where their next meal may come from. Despite significant
              progress by efforts to reduce poverty in the area, the price of
              food is almost unaffordable to most, who do not earn enough due to
              rampant unemployment to provide for their families.
            </p>
            <div className="flex justify-center items-center gap-4 text-3xl text-center">
              <BiDonateHeart></BiDonateHeart>
              <span className="text-2xl font-bold">Donation Charity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
