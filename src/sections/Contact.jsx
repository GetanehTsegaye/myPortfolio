import React from "react";
import {
  EmailSVG,
  LocationSVG,
  LinkedInSVG,
  GitSVG,
  WhatsAppSVG,
} from "../constants/svgStrings";
const Contact = () => {
  return (
    <section id="Contact" className=" bg-sectionGray py-5 md:py-10">
      <div className="grid grid-cols-12  px-8">
        <div class=" flex  items-center col-span-4 ">
          <div class="w-full bg-primary h-[1px] md:h-[2px] "></div>
        </div>
        <div class=" flex items-center justify-center col-span-4 ">
          <p className="font-bold text-xl md:text-5xl ">Contact Me </p>
        </div>
        <div class=" flex items-center col-span-4 ">
          <div class="w-full bg-primary h-[1px] md:h-[2px]  "></div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-2">
        <a
          className="bg-customGray flex gap-4 rounded-xl col-start-2 col-span-6 md:col-start-2 md:col-span-4 justify-center items-center"
          href="#"
        >
          <a href="mailto:getanehtsegaye@gmail.com" target="_blank">
            <EmailSVG className=" text-xl md:text-4xl text-secondary hover:text-[#0a66c2]" />
          </a>
          <h3 className="  text-primary text-sm md:text-2xl ">
            getanehtsegaye@gmail.com
          </h3>
        </a>
        <a className="bg-customGray flex gap-4 rounded-xl  col-start-8 col-span-4 justify-center items-center py-5 ">
          <LocationSVG className="text-xl md:text-4xl  text-secondary hover:text-primary " />

          <h3 className="  text-primary text-sm md:text-2xl ">Sharjah, UAE</h3>
        </a>
      </div>

      <div className="grid grid-cols-12  mx-8 ">
        <div class=" flex  items-center col-span-4 ">
          <div class="w-full bg-primary h-[1px] md:h-[2px]  "></div>
        </div>
        <div class=" flex items-center justify-center gap-2 md:gap-6 col-span-4 ">
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
        </div>
        <div class=" flex items-center col-span-4 ">
          <div class="w-full bg-primary h-[1px] md:h-[2px]  "></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
