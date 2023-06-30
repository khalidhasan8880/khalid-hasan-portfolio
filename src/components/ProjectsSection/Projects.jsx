"use client";
import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import {  motion } from "framer-motion";

import Modal from "../Backdrop&Modal/Modal";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
        setLoading(false);
      });
  }, []);
  console.log(projects);
  if (loading) {
    return <h1 className="text-3xl text-center mt-[40%]">Loading...</h1>;
  }
  console.log(selectedProject);
  return (
    <section className="">
      <SectionTitle title="Here are some of my projects"></SectionTitle>
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="w-full min-h-[400px] relative rounded-2xl project_img  cursor-pointer">
          <div className="img_over_layer">
            <h2 className="font-bold text-1xl sm:text-2xl">Project Name</h2>
            <p>This is an full stack project made with react nodejs and other thing</p>
          </div>
          <img
            className="w-full min-h-[400px] rounded-2xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNVpxM4tpx3mfITtsegz0uVOHEFhCDjLeMUjnm_9ak&s"
            alt=""
          />
        </div>
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {projects.map((project) => (
          <motion.div
            className="w-full min-h-[400px] relative rounded-2xl project_img group cursor-pointer "
            layoutId={project._id}
            onClick={() => setSelectedProject(project)}>
             <button className="absolute-center text-2xl hidden group-hover:block text-white z-50">View Details</button>
            <div className="img_over_layer h-[25%] group-hover:h-[100%] hover:rounded-t-2xl transition-[height] duration-500">
             
              <h2 className="font-extrabold text-1xl sm:text-2xl">{project?.name}</h2>
              <p className="text-semibold">
                {project?.title}
              </p>
            </div>
            <img
              className="w-full min-h-[400px] rounded-2xl hover:transform"
              src={project?.thumbnail}
              alt=""
            />
          </motion.div>
        ))}
      </div>
        {
          selectedProject && <Modal handleClose={()=> setSelectedProject(null)} project={selectedProject}></Modal>
        }
    </section>
  );
};

export default Projects;
// {projects.map((project) => (
//   <motion.div layoutId={project._id} onClick={() => setSelectedProject(project.id)}>
//     <motion.h5>{project?.name}</motion.h5>
//     <motion.h2>{project?.desc}</motion.h2>
//   </motion.div>
// ))}

{/* <AnimatePresence>
{selectedProject && (
  <motion.div className="" layoutId={selectedProject._id}>
    <div className="w-[500px] h-[500px] bg-red-100 "></div>
    <motion.button
      className=""
      onClick={() => setSelectedProject(null)}>
      Close
    </motion.button>
  </motion.div>
)}
</AnimatePresence> */}
