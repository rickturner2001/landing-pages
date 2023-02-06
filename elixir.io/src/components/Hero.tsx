import GetStarted from "./hero/GetStarted";
import heroBg from "../../src/assets/hero-bg.png";
import { heroSection } from "../constants";

const Hero = () => {
  return (
    <section className=" px-6 md:px-24 pt-32 pb-12 relative md:h-screen ">
      <div className="text-white  flex flex-col w-full md:flex-row md:h-full ">
        <div className="relative flex flex-col w-full  md:max-w-3xl  z-10 items-center whitespece-pre h-full justify-between">
          <div className="flex flex-col space-y-12  ">
            <div className="relative">
              <h1 className="text-5xl font-poppins  md:text-left text-center  md:text-8xl font-bold relative z-20">
                {" "}
                {heroSection.titleTop}{" "}
                <span className="text-gradient md:text-left font-poppins text-center relative z-20">
                  {heroSection.titleSpecial}
                </span>{" "}
                {heroSection.titleBottom}
              </h1>
              <div className="z-10 rounded-full bg-gradient-to-br from-cyan-300 to-transparent absolute w-20 h-20 md:w-40 md:h-40 top-0  left-0 "></div>
              <div className="z-10 rounded-full bg-gradient-to-tl from-cyan-300 to-transparent absolute w-20 h-20 md:w-40 md:h-40 bottom-0  right-[5%] md:right-[20%] "></div>
            </div>
            <p className=" mr-auto text-xl md:text-3xl font-poppins text-slate-300 max-w-2xl">
              {heroSection.subtitle}
            </p>
          </div>
          <GetStarted className="hidden md:block relative -top-10 " />
        </div>

        <div className="md:absolute w-full md:max-w-3xl mx-auto md:mx-0 bottom-[5%] right-[5%]">
          <img src={heroBg} className="relative z-10 w-full" />
        </div>
      </div>
      {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" /> */}
      <div className="absolute top-0 left-0 z-[10] w-[40%] h-[60%] rounded-full white__gradient " />
      {/* <div className="white__gradient w-1/4 h-1/4 absolute z[1] right-0 top-0"></div> */}

      {/* <div className="absolute z-[20]  w-[40%] h-[50%] right-20 bottom-40 blue__gradient" /> */}

      <div className="md:hidden">
        <GetStarted className=" mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
