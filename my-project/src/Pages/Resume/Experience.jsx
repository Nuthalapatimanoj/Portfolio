import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div className="container mx-auto px-5 md:px-10 lg:px-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Intern Experience</h2>
        </div>
        <div className="mt-14 w-full h-[500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full-Stack Developer Intern"
            subTitle="Apex Academy - (08/2024 - 10/2024)"
            result="Tiruttani"
            des="Internship that provides a hands-on experience in web pages design using reactJS and so on..."
          />
          <ResumeCard
            title="Mathwork Internship"
            result="AICTE- Online"
            des="Internship that provides a python development practices."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
