/* eslint-disable react/prop-types */
import { FaCheckCircle } from "react-icons/fa";
import Layout from "../components/Layout";
import { data } from "../data/data";

const SkillSection = ({ title, skills }) => (
  <div className="w-[25%] h-[420px] pb-5 bg-[#041E42] flex flex-col items-start justify-between">
    <div className="end-content w-full">
      <h2 className="curve-heading">{title}</h2>
    </div>
    {skills.map((skill, index) => (
      <div key={index} className="pl-10">
        <div className="flex items-center justify-center space-x-3">
          <div>
            <div className="text-regular_brown">
              <FaCheckCircle />
            </div>
          </div>
          <div className="text-[14px]">
            {skill.skill} ({skill.proficiency})
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Skills = () => {
  const sections = [
    { title: "Frontend Skills", skills: data.skills.frontend },
    { title: "Backend Skills", skills: data.skills.backend },
    { title: "Other Skills", skills: data.skills.technogies },
  ];

  return (
    <Layout>
      <section id="skills" className="center-content w-full flex-col">
        <h1 className="font-[700] text-[30px] pb-10">Skills</h1>
        <div className="center-content w-full space-x-10">
          {sections.map((section, index) => (
            <SkillSection key={index} title={section.title} skills={section.skills} />
          ))}
        </div>
      </section>
    </Layout>
  );
};
export default Skills;
