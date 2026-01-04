import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        padding: "20px",
        borderRadius: "16px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          {/* ✅ SAFE ICON SIZE (circle break nahi hoga) */}
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[65%] h-[65%] object-contain"
          />
        </div>
      }
    >
      {/* 🔥 CARD BODY */}
      <div
        className="
          relative group
          transition-all duration-300 ease-in-out
          hover:scale-[1.04]
          hover:shadow-2xl
          hover:shadow-purple-500/30
        "
      >
        {/* 🔥 FLOATING TITLE (hover par upar bahar niklega) */}
        <div
          className="
            absolute -top-4 left-1/2
            -translate-x-1/2

            bg-purple-600/95
            px-3 py-2
            rounded-lg
            font-bold
            text-white
            text-center

            opacity-0
            translate-y-2
            transition-all duration-300 ease-out
            group-hover:-translate-y-8
            group-hover:opacity-100

            shadow-xl
            z-20
          "
        >
          <div className="text-[18px]">{experience.title}</div>
          <div className="text-sm text-purple-200">
            {experience.company_name}
          </div>
        </div>

        {/* 🖼️ IMAGE */}
        {experience.image && (
          <img
            src={experience.image}
            alt={experience.company_name}
            className="
              mt-4
              w-full
              object-cover
              rounded-lg
              transition-transform duration-300
              group-hover:scale-105
            "
          />
        )}

        {/* OPTIONAL POINTS */}
        {experience.points && (
          <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
              <li
                key={index}
                className="text-white-100 text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      {/* ✅ FIXED HEADING (REFRESH SAFE) */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-30"
      >
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      {/* 🔥 TIMELINE */}
      <div className="mt-28 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
