import React from "react";
import profPic from "../assets/prof_pic-color.png";
import {
  HandSVG,
  MedalSVG,
  LinkedInSVG,
  GitSVG,
  WhatsAppSVG,
  EmailSVG,
} from "../constants/svgStrings";

const Home = () => {
  return (
    <section id="Home">
      <div className="grid grid-cols-12  items-center">
        <div className=" col-start-2 col-span-3 ">
          <div className="flex my-1 md:my-5">
            <h5 className=" mr-3 text-sm md:text-xl  font-bold">
              Hello There!
            </h5>

            <HandSVG className="w-4 h-4 md:w-6 md:h-6 animate-wave" />
          </div>
          <div className="flex">
            <div className="font-bold text-2xl md:text-5xl ">
              <p className="flex">
                <span className="font-light text-2xl md:text-4xl pr-4">
                  {" "}
                  I'm
                </span>{" "}
                GETANEH
              </p>

              <p className="py-2">
                Web <span className="text-primary font-light"> | </span>
                Flutter
              </p>
              <p className="tracking-widest my flex-col relative ">
                DEVELOPER
                <div className="flex itesm center justify-center text-center">
                  <div className="absolute my-1 md:my-5 ">
                    <MedalSVG className=" relative text-primary  text-5xl md:text-7xl" />
                    <div className="absolute text-xs left-4 top-6 md:text-lg md:top-7 md:left-7 tracking-tighter">
                      7+
                    </div>
                    <div className="text-[10px] md:text-sm absolute top-4 left-10 md:top-6 md:left-16 leading-normal ">
                      Years of <br />
                      Experience
                    </div>
                  </div>
                </div>
              </p>
            </div>
          </div>
          {/* <button className=" border-4 border-primary rounded-lg px-4 py-2 text-primary text-xl font-bold my-10">
          Contact Me
        </button> */}
        </div>
        <div className=" col-start-6 col-span-7 relative">
          <img src={profPic} alt="My Profile Pic" />
          <div className="absolute bottom-5 right-10 items-center justify-center text-center ">
            <div class=" flex justify-center ">
              <div class=" w-[1px] md:w-[2px] bg-primary h-16 mb-2 md:h-32 md:mb-4"></div>
            </div>
            <a
              href="https://www.linkedin.com/in/getaneh-tsegaye-83b199149/"
              target="_blank"
            >
              <LinkedInSVG className=" text-xl md:text-4xl text-secondary hover:text-[#0a66c2] mb-2 md:mb-4" />
            </a>
            <a href="https://github.com/GetanehTsegaye" target="_blank">
              <GitSVG className=" text-xl md:text-4xl text-secondary hover:text-[#f34f29] mb-2 md:mb-4" />
            </a>
            <a href="https://wa.me/+971586905908" target="_blank">
              <WhatsAppSVG className=" text-xl md:text-4xl text-secondary hover:text-[#1faf38] mb-2 md:mb-4" />
            </a>
            <a href="mailto:getanehtsegaye@gmail.com" target="_blank">
              <EmailSVG className=" text-xl md:text-4xl text-secondary hover:text-[#0a66c2] mb-2 md:mb-4" />{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
