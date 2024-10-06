import React, { useState } from "react";
import Education from "../Pages/Resume/Education";
import Skills from "../Pages/Resume/Skills";
import Experience from "../Pages/Resume/Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  return (
    <section
      id="resume"
      className=" bg-black text-white w-full py-20 border-b-[1px] border-b-white"
    >
      <div className="container mx-auto px-5 md:px-10 lg:px-14">
        <h2 className="text-4xl font-bold text-center mb-12">Resume</h2>
        <ul className="w-full grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            EDUCATION
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            PROFESSIONAL SKILLS
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            EXPERIENCE
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
    </section>
  );
};

export default Resume;
