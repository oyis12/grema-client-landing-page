import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleClick = (id) => {
    setOpen(false);
    setActive(id);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll spy (detect active section)
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - 100;
          if (window.scrollY >= top) {
            current = link.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
          
          {/* LOGO */}
          <div
            onClick={() => handleClick("home")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src="/grema_logo.jpeg"
              alt="Logo"
              className="h-12 w-12 object-cover rounded-full"
            />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`relative text-sm font-medium transition ${
                  active === link.id
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {link.name}

                {/* ACTIVE UNDERLINE */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 ${
                    active === link.id ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* MOBILE HAMBURGER */}
          <div className="md:hidden">
            <Hamburger toggled={open} toggle={setOpen} size={22} duration={1.5}/>
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
              transition={{ duration: 0.3 }}
            >
              {/* LINKS */}
              <div className="flex flex-col gap-6 mt-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleClick(link.id)}
                    className={`text-left text-lg font-medium transition ${
                      active === link.id
                        ? "text-black"
                        : "text-gray-600 hover:text-black"
                    }`}
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