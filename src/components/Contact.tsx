import linkedIn from '../assets/linkedinIcon.png'
import instagram from '../assets/instagram.png'
import message from '../assets/message.png'
const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col gap-8 md:gap-12 lg:gap-16 mt-16 md:mt-24 pb-16 md:pb-24 px-4 sm:px-8 lg:px-16 xl:px-24"
    >
      {/* Title Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <p className="text-2xl sm:text-3xl text-purple-500">✺</p>
          <h2 className="font-firago text-white text-2xl sm:text-3xl font-semibold tracking-wider">
            CONTACT
          </h2>
        </div>
        <div className="h-px w-full max-w-md bg-gradient-to-r from-purple-500 to-transparent"></div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
        <p className='font-firago text-gray-300 text-lg md:text-xl leading-relaxed w-full lg:w-1/2'>
          I'm actively seeking new opportunities and looking to contribute my skills as a Front-End React Developer. If you're looking for someone who is passionate, dedicated, and thrives in dynamic environments, I'd love to hear from you. Don't hesitate to get in touch if you have any questions or would like to discuss potential opportunities!
        </p>
        
        <div className="flex flex-col gap-4 p-6 border border-gray-600 rounded-lg bg-gray-900/50 backdrop-blur-sm w-full lg:w-auto">
          <h1 className="font-firago text-white text-lg md:text-xl font-medium">Message me here</h1>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 hover:text-purple-400 transition-colors">
              <img src={linkedIn} alt="linkedIn" className="w-6 h-6"/>
              <a href="https://linkedin.com/in/saba-sebiskveradze" target="_blank" rel="noopener noreferrer" className='font-firago text-gray-300 text-sm md:text-base hover:text-purple-400 transition-colors'>
                Saba Sebiskveradze
              </a>
            </div>
            <div className="flex items-center gap-3 hover:text-purple-400 transition-colors">
              <img src={instagram} alt="instagram" className="w-6 h-6"/>
              <a href="https://instagram.com/ssebiskveradzee" target="_blank" rel="noopener noreferrer" className='font-firago text-gray-300 text-sm md:text-base hover:text-purple-400 transition-colors'>
                @ssebiskveradzee
              </a>
            </div>
            <div className="flex items-center gap-3 hover:text-purple-400 transition-colors">
              <img src={message} alt="message" className="w-6 h-6"/>
              <a href="mailto:ssebiskveradzee@gmail.com" className='font-firago text-gray-300 text-sm md:text-base hover:text-purple-400 transition-colors'>
                ssebiskveradzee@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact