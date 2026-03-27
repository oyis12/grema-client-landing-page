import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Products", id: "products" },
  { name: "Services", id: "services" },
  { name: "Our Team", id: "team" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          w-full sticky top-0 z-50 bg-white duration-300
        `}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
          {/* LOGO */}
          <h1 className="text-xl font-bold">MyBrand</h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className="text-gray-700 hover:text-black transition cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* MOBILE HAMBURGER */}
          <div className="md:hidden">
            <Hamburger toggled={open} toggle={setOpen} size={24} />
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* SIDEBAR */}
            <motion.div
              className="fixed top-0 left-0 h-full w-64 bg-white z-50 p-6 shadow-lg"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {/* LINKS */}
              <div className="flex flex-col gap-6 mt-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleClick(link.id)}
                    className="text-left text-gray-700 text-lg hover:text-black transition"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
