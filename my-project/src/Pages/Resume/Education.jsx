import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="container mx-auto px-5 md:px-10 lg:px-14">
        <div className="py-6 lgl:py-10 font-titleFont flex flex-col gap-4">
          <h6 className="text-2xl md:text-2xl font-bold">Education</h6>
          <p className="text-sm text-designColor tracking-[4px]">2019-2025</p>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[800px] border-l-[3px] border-l-white border-opacity-30 flex flex-col gap-3">
          <ResumeCard
            title="BE in Electronics and Communication"
            subTitle="GRT-IET (2021 - 2025)"
            result="8.4/10"
            des="A 4 years UG program that covers a wide range of topics,including design and development of electronic device and software applications."
          />
          <ResumeCard
            title="Intermediate  Education"
            subTitle="Sai Jyothi Institute(2019 - 2021)"
            result="93.5/100"
            des="Eduaction that covers 3 core fundamental subjects studied within the 10+2 intermediate curriculam."
          />
          <ResumeCard
            title="Java Full-stack Course"
            subTitle="Apex Academy"
            des="Course that covers java,back-end,client-technologies."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
