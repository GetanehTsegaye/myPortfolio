import React from "react";
import {
  ReactSVG,
  NodeSVG,
  ExpressSVG,
  DartSVG,
  FlutterSVG,
  HTMLSVG,
  CSSSVG,
  JavaScriptSVG,
  TypeScriptSVG,
  SQLSVG,
  FirebaseSVG,
  MongoDBSVG,
  FigmaSVG,
  PhotoshopSVG,
  GitSVG,
} from "../constants/svgStrings";
import SkillCard from "../components/SkillCard";

const About = () => {
  return (
    <section
      id="About"
      className=" bg-sectionGray pt-5 md:pt-20 pb-4 md:pb-10 px-10"
    >
      {/* ++++++++++++++               About -START               +++++++++++ */}
      <p className="font-bold text-2xl md:text-5xl pb-4 md:pb-10">About</p>

      <div className="grid grid-cols-12">
        <div className="h-0 w-6 md:w-16 border-primary border-2 col-span-1 mt-3"></div>
        <p className="text-sm md:text-xl col-span-11">
          I am passionate about building software that improves the lives of
          those around me. I specialize in creating software for clients
          reanging from individuals and small businesses all the way to large
          enterprise corporations. I have 7+ years of web and mobile
          development. I enjoy building a user-friendly cross-platform apps and
          staying up-to-date with the latest technologies.
        </p>
      </div>
      {/* ++++++++++++++               About -END               +++++++++++ */}

      {/* ++++++++++++++               My Skills -START               +++++++++++ */}
      <section>
        <div className="  flex justify-center items-center pt-3 md:pt-5 ">
          <p className="font-bold text-xl md:text-3xl ">My Skills </p>
        </div>
        <div className="  flex justify-center ">
          <div className="   justify-center  ">
            <div className="flex gap-3 md:gap-6 justify-center">
              <SkillCard svgElement={<ReactSVG />} skillName="React.js" />
              <SkillCard svgElement={<NodeSVG />} skillName="Node.js" />
              <SkillCard svgElement={<ExpressSVG />} skillName="Express.js" />
              <SkillCard svgElement={<DartSVG />} skillName="Dart" />
              <SkillCard svgElement={<FlutterSVG />} skillName="Flutter" />
            </div>
            <div className="flex gap-3 md:gap-6 justify-center">
              <SkillCard svgElement={<HTMLSVG />} skillName="HTML" />
              <SkillCard svgElement={<CSSSVG />} skillName="CSS" />
              <SkillCard
                svgElement={<JavaScriptSVG />}
                skillName="JavaScript"
              />
              <SkillCard
                svgElement={<TypeScriptSVG />}
                skillName="TypeScript"
              />
            </div>
            <div className="flex gap-3 md:gap-6 justify-center">
              <SkillCard svgElement={<SQLSVG />} skillName="SQL" />
              <SkillCard svgElement={<FirebaseSVG />} skillName="Firebase" />
              <SkillCard svgElement={<MongoDBSVG />} skillName="MongoDB" />
            </div>
            <div className="flex gap-3 md:gap-6 justify-center">
              <SkillCard svgElement={<FigmaSVG />} skillName="Figma" />
              <SkillCard svgElement={<PhotoshopSVG />} skillName="Photoshop" />
            </div>
            <div className="flex gap-3 md:gap-6 justify-center">
              <SkillCard svgElement={<GitSVG />} skillName="Git Hub" />
            </div>
          </div>
        </div>
      </section>
      <section id="Portfolio"></section>
    </section>
  );
};

export default About;
