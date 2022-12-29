import Navbar from "../src/components/Navbar.jsx";
import Home from '../src/components/Home.jsx';
import About from "../src/components/About.jsx";
import Contact from "../src/components/Contact.jsx";
import Skills from "../src/components/Skills.jsx";
import Work from "../src/components/Work.jsx";
 import SocialLinks from "../src/components/SocialLinks.jsx";
function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About />
      <Skills />
      <Work />
      <Contact />
      <SocialLinks />



    </div>
  );
}

export default App;
