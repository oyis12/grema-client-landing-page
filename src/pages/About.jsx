import { motion } from "framer-motion";

// ✅ move images to assets + convert to webp
import img5 from "../assets/image5.jpg";
import img6 from "../assets/image6.jpg";
import img7 from "../assets/image7.jpg";

const About = () => {
  const fadeLeft = {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.7 },
    viewport: { once: true },
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay },
    viewport: { once: true },
  });

  return (
    <section className="w-full bg-gradient-to-b from-[#f9f9f8] to-[#f1f1ef] py-16 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="mb-14 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight">
            About Us
          </h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-[3px] bg-black mt-3 mx-auto md:mx-0"
          />
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* Large Image */}
            <motion.div
              {...fadeLeft}
              className="row-span-2 h-[280px] sm:h-[360px] md:h-[460px] rounded-2xl overflow-hidden group"
            >
              <img
                src={img5}
                loading="lazy"
                alt="Carpet roll"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
            </motion.div>

            {/* Top Right */}
            <motion.div
              {...fadeUp(0.2)}
              className="h-[140px] sm:h-[170px] md:h-[220px] rounded-2xl overflow-hidden group"
            >
              <img
                src={img7}
                loading="lazy"
                alt="Carpet pattern"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>

            {/* Bottom Right */}
            <motion.div
              {...fadeUp(0.3)}
              className="h-[140px] sm:h-[170px] md:h-[220px] rounded-2xl overflow-hidden group"
            >
              <img
                src={img6}
                loading="lazy"
                alt="Fabric texture"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          </div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-snug">
              Crafted for Comfort. Designed for Living.
            </h2>

            <p className="text-gray-600 text-base leading-relaxed max-w-lg mx-auto md:mx-0 mb-6">
              At Gray & Grema Carpets, we combine timeless craftsmanship with
              modern elegance to create pieces that transform your space into a
              statement of comfort and luxury.
            </p>

            <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto md:mx-0">
              Every texture, every pattern, and every fiber is carefully selected
              to deliver not just beauty — but a lasting experience under your
              feet.
            </p>

            {/* CTA */}
            {/* <div className="mt-8">
              <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                Explore Collection
              </button>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;