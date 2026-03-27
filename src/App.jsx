import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="team">
        <Team />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
