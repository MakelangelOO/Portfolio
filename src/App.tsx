import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Experience } from "./components/experience";
import { Education } from "./components/education";
import { Contact } from "./components/contact";
import { Navigation } from "./components/navigation";

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
