'use client'
import SectionTitle from "../SectionTitle";

const Projects = () => {
  return (
    <section className="flex-center flex-col">
      <SectionTitle title="Here are some of my projects"></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="min-w-[400px] min-h-[400px] relative rounded-2xl project_img  cursor-pointer">
          <div className="img_over_layer ">
            <h2 className="font-bold text-1xl sm:text-2xl">Project Name</h2>
            <p>This is an full stack project made with react nodejs and other thing</p>
          </div>
          <img
            className="min-w-[400px] min-h-[400px]  rounded-2xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNVpxM4tpx3mfITtsegz0uVOHEFhCDjLeMUjnm_9ak&s"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
