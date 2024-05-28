import Layout from "../components/Layout";
import { data } from "../data/data";
/*
  File name: Projects.jsx
  Student Name: Samuel Osoata
  Student ID: 301407126
*/
const Projects = () => {
  return (
    <Layout>
      <section
        id="projects"
        className="projects flex flex-col items-center justify-center w-full"
      >
        <h1 className="font-[700] text-[30px] pb-10">
          Projects I have worked on{" "}
        </h1>
        <div className="flex w-full items-center justify-evenly flex-wrap">
          {data.projects.map((project, index) => (
            <div
              key={index}
              className=" w-[350px] flex flex-col items-center justify-center rounded-[20px] p-2"
            >
              <div>
                <img
                  src={project.img}
                  width={400}
                  height={300}
                  alt=""
                  className="project-image rounded-[20px]"
                />
              </div>
              <div className="flex flex-col justify-between pt-10 gap-y-5">
                <span className="center-content w-full font-[600]">
                  {project.title}
                </span>
                <span className="text-[14px]">{project.description}</span>
                <div className="center-content w-full space-x-5 text-[14px]">
                  
                  <button>
                    <a href={project.link}>Live Demo</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
