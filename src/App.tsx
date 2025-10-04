import { Hero } from "./shared/components/hero";
import { About } from "./features/about/about";
import { Skills } from "./features/skills/skills";
import { Experience } from "./features/experience/experience";
import { Education } from "./features/education/education";
import { Contact } from "./features/contact/contact";
import { Navigation } from "./shared/components/navigation";

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
