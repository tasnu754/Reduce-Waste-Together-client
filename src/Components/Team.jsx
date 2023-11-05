import { BiDonateHeart } from "react-icons/bi";
import { LiaPlaceOfWorshipSolid } from "react-icons/lia";
import { SiHomeadvisor } from "react-icons/si";
import { HiAcademicCap } from "react-icons/hi";

const Team = () => {
  return (
    <div>
      <div className="pt-14 space-y-6 bg-neutral-900">
        <div className="text-center space-y-10 text-white mx-6">
          <p className="text-3xl font-bold ">Meet our Team</p>
          <h2 className="text-5xl font-extrabold text-orange-300">
            Awesome guys behind our <br /> charity activities
          </h2>
        </div>
        <div className="flex min-h-screen items-center justify-center bg-neutral-900 ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
            <div className="group relative item-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-md">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500"
                  src="https://i.ibb.co/yBtzPQt/meysam-jarahkar-LI7j-B1925j0-unsplash.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0  flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                <div>
                  <LiaPlaceOfWorshipSolid className="text-5xl text-yellow-200"></LiaPlaceOfWorshipSolid>
                </div>
                <h1 className="text-3xl font-bold text-[#D3959B]">
                  Donald John
                </h1>
                <p className="text-xl italic text-whitemb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#b8a6c1] mt-28">
                  Founder And CEO of Reduce Waste Together Charity
                </p>
              </div>
            </div>
            <div className="group relative item-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-md">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500"
                  src="https://i.ibb.co/tHLTDWt/lethicia-matos-CSh-h-NHc3-Y8-unsplash.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0  flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                <div>
                  <BiDonateHeart className="text-5xl text-yellow-200"></BiDonateHeart>
                </div>
                <h1 className="text-3xl font-bold text-[#D3959B]">
                  Phillips Dal
                </h1>
                <p className="text-xl italic text-whitemb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#a590af] mt-36">
                  Chef Executive of Reduce Waste Together Charity
                </p>
              </div>
            </div>
            <div className="group relative item-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-md">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500"
                  src="https://i.ibb.co/Zx4kW6V/ana-nichita-BI91-Nrpp-E38-unsplash.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0  flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                <div>
                  <SiHomeadvisor className="text-5xl text-yellow-200"></SiHomeadvisor>
                </div>
                <h1 className="text-3xl font-bold text-[#D3959B]">
                  Thomas Olsen
                </h1>
                <p className="text-lg italic text-whitemb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#ab93b5] mt-36">
                  Chef Advisor of Reduce Waste Together Charity
                </p>
              </div>
            </div>
            <div className="group relative item-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-md">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500"
                  src="https://i.ibb.co/qkxk422/arrul-lin-s-Yh-Uhse5u-T8-unsplash.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0  flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                <div>
                  <HiAcademicCap className="text-5xl text-yellow-200"></HiAcademicCap>
                </div>
                <h1 className="text-3xl font-bold text-[#D3959B]">
                  James Alien
                </h1>
                <p className="text-lg italic text-whitemb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#bfa4cc] mt-36">
                  Advisor of Reduce Waste Together Charity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
