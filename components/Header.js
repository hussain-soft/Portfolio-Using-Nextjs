import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Education from "../components/Education";
import Services from "../components/Services";
import Contact from "../components/Contact";

const Header = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Services />
      <Contact />
    </>
  );
};

export default Header;
