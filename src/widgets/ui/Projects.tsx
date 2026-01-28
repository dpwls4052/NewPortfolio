import FrontendProject from "@/src/features/projects/ui/FrontendProject";
import PublisherProject from "@/src/features/projects/ui/PublisherProject";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto ">
      <FrontendProject />
      <PublisherProject className="mt-30" />
    </section>
  );
};

export default Projects;
