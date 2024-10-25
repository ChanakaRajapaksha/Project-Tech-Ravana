import About from "./sections/About";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Services from "./sections/Services";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";
import Who from "./sections/Who";
import Tech from "./sections/Tech";

import Cursor from "./components/Cursor";
import Works from "./sections/Works";
import CounterPage from "./components/CounterPage";

const App = () => {
  return (
    <main>
      <Cursor />
      <Navbar />
      <Hero />
      <div className="max-w-[1400px] mx-auto relative">
        <About />
        <Who />
        <Experience />
        <Services />
        <Works />
        <CounterPage />
        <Clients />
        <Tech />
        <Contact />
        <Footer />
      </div>
    </main>
  )
};

export default App;