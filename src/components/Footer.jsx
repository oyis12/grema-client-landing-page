import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  // Animation for icons
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <footer className="bg-black text-white py-10 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        
        {/* BRAND */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Grey and Grema</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium rugs crafted for comfort, style, and durability. Transform
            your living space with timeless and modern designs.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg font-medium mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2 text-gray-400 text-sm">
            <button onClick={() => scrollToSection("home")} className="hover:text-white text-left">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="hover:text-white text-left">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="hover:text-white text-left">
              Services
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-white text-left">
              Contact
            </button>
          </div>
        </div>

        {/* CONTACT + SOCIAL */}
        <div>
          <h3 className="text-lg font-medium mb-3">Contact</h3>

          <p className="text-gray-400 text-sm mb-4">
            Plot 1698, Aminu Kanu Crescent,<br />
            Wuse II, Abuja, Nigeria.
            info@rugstore.com <br />
            08184343338, 08130262533, 08033212840
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            {[
              { icon: <FaFacebookF size={18} />, link: "#" },
              { icon: <FaInstagram size={18} />, link: "#" },
              { icon: <FaXTwitter size={16} />, link: "#" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                custom={i}
                variants={iconVariants}
                initial="hidden"
                whileInView="show"
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 hover:shadow-lg hover:shadow-white/10 transition"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 mt-8 pt-4 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Grey and Grema. All rights reserved.<br/>
        <span>Powered by - www.mahvion.com</span>
      </div>
    </footer>
  );
};

export default Footer;