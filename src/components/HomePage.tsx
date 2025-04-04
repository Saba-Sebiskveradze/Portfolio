import download from "../assets/download.png";
import monitor from "../assets/monitor.png";
import quote from "../assets/quote.png";

const HomePage = () => {
  return (
    <section
      id="home"
      className="flex flex-col  gap-16 sm:gap-20 md:gap-24 lg:gap-32"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full lg:w-1/2">
          <h1 className="font-firago text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            I'm Saba, a<span className="text-[#C778DD]"> React Developer</span>
          </h1>
          <p className="font-firago text-[#ABB2BF] text-lg sm:text-xl">
            I Build Fast, Beautiful, and Dynamic Web Apps
          </p>
          <a
            href="/Saba_Sebiskveradze_CV.pdf"
            download="Saba_Sebiskveradze_CV.pdf"
            className="flex items-center justify-between border border-[#C778DD] w-[170px] p-[10px] cursor-pointer hover:bg-[#C778DD20] transition-colors duration-300"
          >
            <img src={download} alt="download icon" className="w-5 h-5 mr-3" />
            <p className="font-firago text-white text-sm sm:text-base group-hover:text-[#C778DD] transition-colors duration-300">
              DOWNLOAD CV
            </p>
          </a>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-[#C778DD] opacity-10 blur-lg rounded-lg transform -translate-x-2 translate-y-2"></div>
            <img
              src={monitor}
              alt="Computer monitor with code"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md relative z-10 hover:transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      <div className="relative border border-[#ABB2BF] p-6 sm:p-8 md:p-10 font-firago text-white text-lg sm:text-xl md:text-2xl font-medium flex justify-center items-center mx-4 sm:mx-12 md:mx-16 lg:mx-24">
        Coding by Day, Searching and Fixing Errors by Night
        <img
          src={quote}
          alt="quote mark"
          className="absolute top-0 left-4 transform -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8"
        />
        <img
          src={quote}
          alt="quote mark"
          className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-180 w-6 h-6 sm:w-8 sm:h-8"
        />
      </div>
    </section>
  );
};

export default HomePage;
