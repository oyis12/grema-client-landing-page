import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Team from "./pages/Team";

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
    </div>
  );
}

export default App;
