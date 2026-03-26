import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full bg-[#f5f5f3] py-10 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* IMAGES */}
        <div className="grid grid-cols-2 gap-4">
          
          {/* Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="row-span-2"
          >
            <img
              src="/images/rug1.jpg"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          {/* Top Right */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/public/image7.jpg"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          {/* Bottom Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src="/public/image6.jpg"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        </div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Traditional and <br className="hidden sm:block" />
            contemporary design
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consectetur. A tincidunt dignissim
            pulvinar egestas. Faucibus elit venenatis at auctor. Etiam faucibus
            lacinia sem tempor a vitae ac. Pharetra magna ac porta suscipit
            gravida est diam volutpat.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;