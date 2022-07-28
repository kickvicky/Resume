import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import "./index.css"
import Timeline from "./components/Timeline/Timeline"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Socials from "./components/Socials/Socials"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Timeline />
      <Projects />
      <Skills />
      <Socials />
    </div>
  );
}

export default App;
