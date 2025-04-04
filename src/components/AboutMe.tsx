import figures from "../assets/figures.png";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex flex-col gap-8 md:gap-12 lg:gap-16 mt-16 md:mt-24 pb-16 md:pb-24 px-4 sm:px-8 lg:px-16 xl:px-24"
    >
      {/* Title Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <p className="text-2xl sm:text-3xl text-purple-500">✺</p>
          <h2 className="font-firago text-white text-2xl sm:text-3xl font-semibold tracking-wider">
            ABOUT ME
          </h2>
        </div>
        <div className="h-px w-full max-w-md bg-gradient-to-r from-purple-500 to-transparent"></div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
        <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-1/2">
          <p className="font-firago text-gray-300 text-base md:text-lg leading-relaxed">
            Hello, I'm Saba!
          </p>
          <p className="font-firago text-gray-300 text-base md:text-lg leading-relaxed">
            I'm a highly motivated and detail-oriented Front-End React Developer
            with a solid educational foundation in Information Technologies and
            hands-on experience in building dynamic, responsive, and
            user-friendly web applications. I specialize in React, TypeScript,
            JavaScript, HTML, and CSS, with a strong understanding of RESTful
            APIs, version control systems, and responsive design principles.
          </p>
          <p className="font-firago text-gray-300 text-base md:text-lg leading-relaxed">
            My passion lies in continuous learning and innovation, always
            seeking to improve my skills and tackle new challenges. I thrive in
            fast-paced, collaborative environments and excel at pushing the
            boundaries of what's possible. I'm always eager to contribute fresh
            ideas and perspectives, whether I'm working independently or as part
            of a team.
          </p>
        </div>
        <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg">
          <div className="absolute inset-0 bg-purple-500 opacity-20 blur-xl rounded-full"></div>
          <img
            src={figures}
            alt="Programming skills visualization"
            className="relative w-full h-auto object-contain z-10 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
