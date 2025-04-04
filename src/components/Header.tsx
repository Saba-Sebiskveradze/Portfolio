import { useState, useEffect } from 'react';
import logo from "../assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "MY WORK", href: "#work" },
    { label: "SKILLS", href: "#skills" },
    { label: "ABOUT ME", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1E1E1E] ">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="flex justify-between items-center py-4 sm:py-6 lg:py-8">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img 
              src={logo} 
              alt="Saba Sebiskveradze logo" 
              className="w-6 h-6 sm:w-8 sm:h-8" 
            />
            <p className="font-firago text-white text-sm sm:text-base md:text-lg font-bold">
              SABA SEBISKVERADZE
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navItems.map((item, index) => {
                const section = item.href.substring(1);
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(item.href);
                      }}
                      className={`font-firago text-xs sm:text-sm font-bold transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#C778DD] after:transition-all hover:after:w-full ${
                        activeSection === section 
                          ? 'text-[#C778DD] after:w-full' 
                          : 'text-white hover:text-[#C778DD]'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6">
            <nav className="px-4">
              <ul className="flex flex-col gap-4">
                {navItems.map((item, index) => {
                  const section = item.href.substring(1);
                  return (
                    <li key={index}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick(item.href);
                        }}
                        className={`font-firago text-sm font-bold block py-2 transition-colors duration-300 ${
                          activeSection === section
                            ? 'text-[#C778DD]'
                            : 'text-white hover:text-[#C778DD]'
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;