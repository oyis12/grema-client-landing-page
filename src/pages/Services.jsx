import { motion } from "framer-motion";

import img8 from "../assets/image8.jpg";
import img9 from "../assets/image9.jpg";
import img10 from "../assets/image10.png";
import img11 from "../assets/image11.jpg";

const services = [
  {
    title: "Carpet Installation",
    desc: "Professional fitting for homes and offices.",
    image: img8,
  },
  {
    title: "Custom Carpet Design",
    desc: "Tailor-made carpets for your style.",
    image: img9,
  },
  {
    title: "Cleaning & Maintenance",
    desc: "Keep carpets fresh and long-lasting.",
    image: img10,
  },
  {
    title: "Repair & Restoration",
    desc: "Restore carpets to original beauty.",
    image: img11, // ✅ FIXED PATH
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f7f7f6]">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-14 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight">
            Our Services
          </h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-[3px] bg-black mt-3 mx-auto md:mx-0"
          />

          <p className="text-gray-500 mt-4 max-w-lg mx-auto md:mx-0">
            Premium carpet solutions tailored to elevate your space.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
            >

              {/* IMAGE */}
              <div className="relative h-60 overflow-hidden">
                <motion.img
                  src={service.image}
                  loading="lazy" // ✅ IMPORTANT
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {service.desc}
                </p>

                {/* PREMIUM UNDERLINE */}
                <motion.div
                  className="h-[2px] bg-black mt-4 w-0"
                  whileHover={{ width: "60%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-white/10 backdrop-blur-[2px]" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;