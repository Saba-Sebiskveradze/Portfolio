import footballwebsite from "../assets/footballwebsite.png";
import redberrywebsite from "../assets/redberrywebsite.png";
import moviewebsite from "../assets/moviewebsite.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Football Games",
      description: "Football games and quizzes",
      tech: "React, Typescript, Tailwind",
      image: footballwebsite,
      link: "https://saba-sebiskveradze.github.io/Football-Games/"
    },
    {
      id: 2,
      title: "RedBerry",
      description: "Momentum-Progress-Tracking-Software",
      tech: "React, JavaScript, CSS",
      image: redberrywebsite,
      link: "https://saba-sebiskveradze.github.io/Momentum-Progress-Tracking-Software/"
    },
    {
      id: 3,
      title: "Movie Website",
      description: "Popular movies with search",
      tech: "React, Typescript, Tailwind",
      image: moviewebsite,
      link: "https://saba-sebiskveradze.github.io/MoviePortalSite/"
    }
  ];

  return (
    <section id="work" className="flex flex-col gap-12 sm:gap-16 lg:gap-20 mt-16 sm:mt-24 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <p className="text-2xl sm:text-3xl text-[#C778DD]">✺</p>
            <h2 className="font-firago text-white text-2xl sm:text-3xl font-medium">
              PROJECTS
            </h2>
          </div>
          <div className="h-px w-24 sm:w-40 md:w-64 lg:w-96 bg-gradient-to-r from-[#C778DD] to-transparent"></div>
        </div>
        <a href="" className="text-white cursor-pointer hover:text-[#C778DD] transition-colors flex items-center gap-2 mt-2 sm:mt-0">
          View all <span className="text-[#C778DD]">➯</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project) => (
          <a 
            key={project.id} 
            href={project.link} 
            target="_blank"
            rel="noopener noreferrer" 
            className="group border border-[#ABB2BF] hover:border-[#C778DD] transition-all duration-300 flex flex-col h-full"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="border-t border-[#ABB2BF] p-2 font-firago text-white text-xs">
              {project.tech}
            </div>
            <div className="p-4 flex flex-col gap-3 flex-grow">
              <h3 className="font-firago text-white text-lg sm:text-xl font-medium group-hover:text-[#C778DD] transition-colors">
                {project.title}
              </h3>
              <p className="font-firago text-[#ABB2BF] text-sm">
                {project.description}
              </p>
              <div className="mt-auto pt-4">
                <button className="border border-[#C778DD] text-white px-4 py-2 text-sm hover:bg-[#C778DD33] transition-colors w-max">
                  View Project
                </button>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;