import { motion } from "framer-motion";

const About = () => {
  const fadeLeft = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true },
  });

  return (
    <section className="w-full bg-[#f5f5f3] py-12 md:py-20 px-4 sm:px-6 md:px-12 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
            About
          </h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-[3px] bg-black mt-2 mx-auto md:mx-0"
          />
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* IMAGES */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* Large Image */}
            <motion.div
              {...fadeLeft}
              className="row-span-2 h-[260px] sm:h-[320px] md:h-[420px]"
            >
              <img
                src="/image5.jpg"
                alt="Carpet roll"
                className="w-full h-full object-cover rounded-2xl shadow-sm"
              />
            </motion.div>

            {/* Top Right */}
            <motion.div {...fadeUp(0.2)}>
              <img
                src="/image7.jpg"
                alt="Carpet pattern"
                className="w-full h-[120px] sm:h-[150px] md:h-[200px] object-cover rounded-2xl shadow-sm"
              />
            </motion.div>

            {/* Bottom Right */}
            <motion.div {...fadeUp(0.3)}>
              <img
                src="/image6.jpg"
                alt="Fabric texture"
                className="w-full h-[120px] sm:h-[150px] md:h-[200px] object-cover rounded-2xl shadow-sm"
              />
            </motion.div>
          </div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4 leading-snug">
              Gray & Grema Carpets
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0">
              Lorem ipsum dolor sit amet consectetur. A tincidunt dignissim
              pulvinar egestas. Faucibus elit venenatis at auctor. Etiam
              faucibus lacinia sem tempor a vitae ac. Pharetra magna ac porta
              suscipit gravida est diam volutpat.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
