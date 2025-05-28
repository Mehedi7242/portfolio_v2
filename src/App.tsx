
import CustomCursor from "./components/CustomCursor";
import About from "./layout/About";
import Banner from "./layout/Banner";
import Contact from "./layout/Contact";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Project from "./layout/Project";
import Skills from "./layout/Skills";



const App = () => {
  return (
    
    <div className=" max-w-7xl mx-auto">
      <CustomCursor>
      </CustomCursor>
      <Navbar></Navbar>
      <Banner></Banner>
      <Skills></Skills>
      <Project></Project>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;