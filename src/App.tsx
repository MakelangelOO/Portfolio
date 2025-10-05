import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { About } from "./features/about/about";
import { Skills } from "./features/skills/skills";
import { Experience } from "./features/experience/experience";
import { Education } from "./features/education/education";
import { Contact } from "./features/contact/contact";
import { Hero } from "./features/hero/hero";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
