import { Helmet } from "react-helmet";

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
      {/* GLOBAL SEO */}
      <Helmet>
        <title>Grema Rugs | Quality Rugs & Carpets in Abuja Nigeria</title>

        <meta
          name="description"
          content="Grema Rugs offers high-quality rugs and carpets in Abuja, Nigeria. Shop luxury, modern, and affordable carpets for homes, offices, and mosques."
        />

        <meta
          name="keywords"
          content="rugs in Abuja, carpets in Abuja, carpet store Nigeria, luxury rugs Abuja, mosque carpets Nigeria"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Grema Rugs Abuja" />
        <meta
          property="og:description"
          content="Buy quality rugs and carpets in Abuja. Affordable and luxury options available."
        />
        <meta property="og:image" content="/grema_logo.jpeg" />
        <meta property="og:type" content="website" />

        {/* Canonical */}
        <link rel="canonical" href="https://gremacarpet.com/" />
      </Helmet>

      <Navbar />

      {/* HOME */}
      <section id="home">
        <Home />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* PRODUCTS */}
      <section id="products">
        <Products />
      </section>

      {/* SERVICES */}
      <section id="services">
        <Services />
      </section>

      {/* TEAM */}
      <section id="team">
        <Team />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
