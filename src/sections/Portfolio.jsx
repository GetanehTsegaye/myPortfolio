import React from "react";
import project1 from "../assets/Project1.png";
import project2 from "../assets/Project2.png";
import project3 from "../assets/Project3.png";
import project4 from "../assets/section.jpg";
import {
  ReactSVG,
  JavaScriptSVG,
  FirebaseSVG,
  APISVG,
} from "../constants/svgStrings";

import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  return (
    <section id="MyPortfolio" className="bg-clothBlack pb-10 px-10 ">
      <div className="  flex  pt-10">
        <p className="font-bold text-2xl md:text-5xl pb-4 md:pb-10">
          My Portfolio{" "}
        </p>
      </div>
      <div className="grid grid-cols-12">
        <div className="h-0 w-6 md:w-16 border-primary border-2 col-span-1 mt-3"></div>
        <p className="text-sm md:text-xl col-span-11">
          Explore my creative web design and development capabilities. This
          portfolio features a variety of projects, demonstrating my proficiency
          in crafting user-friendly and visually appealing web experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 md:mt-8 mx-6">
        <PortfolioCard
          projectImage={project4}
          prjectHoverDescription="Completly built with hooks and functional components. Real-time
        updates on stock and portfolio performance, visualized with
        interactive charts"
          projectName="Film Tera"
          projectBottomDescription={
            <>
              {" "}
              <a href="#" className="text-primary font-bold">
                FilmTera.com
              </a>{" "}
              is your ultimate destination for exploring the exciting world of
              cinema. Dive into a vast collection of movies, from the latest
              blockbusters to timeless classics.
            </>
          }
          technologiesUsed={[
            <ReactSVG />,
            <JavaScriptSVG />,
            <FirebaseSVG />,
            <APISVG />,
          ]}
        />
        <PortfolioCard
          projectImage={project1}
          prjectHoverDescription="Completly built with hooks and functional components. Real-time
        updates on stock and portfolio performance, visualized with
        interactive charts"
          projectName="Film Tera"
          projectBottomDescription={
            <>
              {" "}
              <a href="#" className="text-primary font-bold">
                FilmTera.com
              </a>{" "}
              is your ultimate destination for exploring the exciting world of
              cinema. Dive into a vast collection of movies, from the latest
              blockbusters to timeless classics.
            </>
          }
          technologiesUsed={[
            <ReactSVG />,
            <JavaScriptSVG />,
            <FirebaseSVG />,
            <APISVG />,
          ]}
        />
        <PortfolioCard
          projectImage={project3}
          prjectHoverDescription="Completly built with hooks and functional components. Real-time
        updates on stock and portfolio performance, visualized with
        interactive charts"
          projectName="Film Tera"
          projectBottomDescription={
            <>
              {" "}
              <a href="#" className="text-primary font-bold">
                FilmTera.com
              </a>{" "}
              is your ultimate destination for exploring the exciting world of
              cinema. Dive into a vast collection of movies, from the latest
              blockbusters to timeless classics.
            </>
          }
          technologiesUsed={[
            <ReactSVG />,
            <JavaScriptSVG />,
            <FirebaseSVG />,
            <APISVG />,
          ]}
        />
        <PortfolioCard
          projectImage={project2}
          prjectHoverDescription="Completly built with hooks and functional components. Real-time
        updates on stock and portfolio performance, visualized with
        interactive charts"
          projectName="Film Tera"
          projectBottomDescription={
            <>
              {" "}
              <a href="#" className="text-primary font-bold">
                FilmTera.com
              </a>{" "}
              is your ultimate destination for exploring the exciting world of
              cinema. Dive into a vast collection of movies, from the latest
              blockbusters to timeless classics.
            </>
          }
          technologiesUsed={[
            <ReactSVG />,
            <JavaScriptSVG />,
            <FirebaseSVG />,
            <APISVG />,
          ]}
        />
      </div>
    </section>
  );
};

export default Portfolio;
