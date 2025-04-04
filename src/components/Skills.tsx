import figures from '../assets/figures.png';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      items: ["TypeScript", "Python", "JavaScript"]
    },
    {
      title: "Frameworks",
      items: ["React", "Next.js", "Node.js", "Express"]
    },
    {
      title: "Tools",
      items: ["Figma", "VSCode", "Git", "Docker"]
    },
    {
      title: "Other",
      items: ["HTML", "CSS", "REST", "Tailwind", "GraphQL"]
    }
  ];

  return (
    <section 
      id="skills" 
      className="flex flex-col gap-12 md:gap-16 lg:gap-20 mt-24 pb-24 px-4 sm:px-8 lg:px-16"
    >
      {/* Title Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <p className="text-2xl sm:text-3xl text-purple-500">✺</p>
          <h2 className="font-firago text-white text-2xl sm:text-3xl font-semibold tracking-wider">
            SKILLS
          </h2>
        </div>
        <div className="h-px w-full max-w-md bg-gradient-to-r from-purple-500 to-transparent"></div>
      </div>

      {/* Skills Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Image with glow effect */}
        <div className="relative w-full max-w-sm lg:max-w-xs xl:max-w-sm">
          <div className="absolute inset-0 bg-purple-500 opacity-20 blur-xl rounded-full"></div>
          <img 
            src={figures} 
            alt="Programming skills visualization" 
            className="relative w-full h-auto object-contain z-10 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="flex flex-col gap-4 border border-gray-700 bg-gray-900 bg-opacity-40 p-4 rounded hover:border-purple-500 transition-colors duration-300 hover:shadow-md hover:shadow-purple-500/20"
            >
              <h3 className="font-firago text-white text-lg font-medium border-b border-gray-700 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <span 
                    key={itemIndex}
                    className="text-gray-300 hover:text-white hover:bg-purple-500/20 px-2 py-1 rounded transition-all duration-200 cursor-pointer" 
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;