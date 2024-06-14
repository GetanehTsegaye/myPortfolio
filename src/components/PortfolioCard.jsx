import React from "react";

const PortfolioCard = ({
  projectImage,
  prjectHoverDescription,
  projectName,
  projectBottomDescription,
  technologiesUsed,
}) => {
  return (
    <div className="portfolioCard bg-gradient-to-r from-gray-800 to-cardGray overflow-hidden rounded-3xl pb-3 my-2 mb:my-5">
      <div className="group relative flex mb-2">
        <img className=" order-1" src={projectImage} />
        {/* <div className="order-2 bg-black bg-opacity-60  absolute h-full flex text-center items-center justify-center hidden group-hover:block content-center"> This is just for the hover to appear*/}
        <div className="order-2 bg-black bg-opacity-60  absolute h-full flex text-center items-center justify-center   transform translate-x-full group-hover:translate-x-0 transition duration-600 ease-in-out content-center">
          <div>
            <p className=" text-lg md:text-2xl font-bold pb-2 ">
              Technologies Used
            </p>
            <div className="flex  justify-center">
              <div className="size-4 md:size-8 gap-4 rounded-sm group flex items-center justify-center text-center relative ">
                {technologiesUsed.map((item) => (
                  <div
                    className=" text-2xl group-hover:scale-125 transition duration-500 ease-in-out order-1 "
                    key={item.title}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <p className=" text-xs md:text-sm px-10 md:px-12 pt-2 md:pt-4">
              {prjectHoverDescription}
            </p>

            <div className=" flex gap-4 md:gap-6 justify-center">
              <button className=" border-4 border-primary rounded-lg px-4 py-1 text-primary text-base font-bold mt-5 bg-black bg-opacity-80">
                Live
              </button>
              <button className=" border-4 border-primary rounded-lg px-4 py-1 text-primary text-base font-bold mt-5 bg-black bg-opacity-80">
                Repository
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="font-bold text-lg md:text-3xl pl-4">{projectName}</p>
      <div className="grid grid-cols-12 px-4">
        <div className="h-0 w-10 md:w-16 border-primary border-2 col-span-1 mt-3"></div>
        <p className="text-xs md:text-lg col-start-3 col-span-10">
          {projectBottomDescription}
        </p>
      </div>
    </div>
  );
};

export default PortfolioCard;
