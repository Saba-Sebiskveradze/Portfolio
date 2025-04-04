import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="bg-[#1E1E1E] min-h-screen">
      <Header />
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24">
        <main>
          <section id="home" className="scroll-mt-24"><HomePage /></section>
          <section id="work" className="scroll-mt-24"><Projects /></section>
          <section id="skills" className="scroll-mt-24"><Skills /></section>
          <section id="about" className="scroll-mt-24"><AboutMe /></section>
          <section id="contact" className="scroll-mt-24"><Contact /></section>
        </main>
        <footer className="py-8 text-center text-[#ABB2BF] text-sm mt-24 border-t border-[#ABB2BF]">
          <p>© {new Date().getFullYear()} Saba Sebiskveradze. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;