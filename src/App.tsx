
import CustomCursor from "./components/CustomCursor";
import Banner from "./layout/Banner";
import Contact from "./layout/Contact";
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
      <Contact></Contact>
    </div>
  );
};

export default App;