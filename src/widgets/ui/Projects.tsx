import FrontendProject from "./ProjectDetails/FrontendProject";
import PublisherProject from "./ProjectDetails/PublisherProject";

// Projects.tsx
const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto ">
      <FrontendProject />
      <PublisherProject className="mt-30" />
    </section>
  );
};

export default Projects;
