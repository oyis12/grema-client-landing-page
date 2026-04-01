import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import bg from "../assets/splash_bg.jpg"

const images = [
  {
    src: image4,
    title: "STYLE. COMFORT. QUALITY.",
    subtitle: "Redefine Your Living Space",
  },
  {
    src: image1,
    title: "TIMELESS ELEGANCE",
    subtitle: "Where Tradition Meets Modern Design",
  },
  {
    src: image2,
    title: "UNMATCHED COMFORT",
    subtitle: "Feel the Difference Under Every Step",
  },
  {
    src: image3,
    title: "MAKE A STATEMENT",
    subtitle: "Rugs That Speak Luxury",
  },
];

const Home = () => {
  const [index, setIndex] = useState(0);

  // ✅ Auto-slide (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      className="w-full bg-cover bg-center py-6 sm:py-8 md:py-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* MAIN IMAGE */}
      <div className="relative overflow-hidden rounded-lg w-[95%] sm:w-[90%] md:w-4/5 mx-auto">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index].src}
            alt=""
            loading="eager" // main image loads fast
            className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }} // ✅ reduced animation cost
          />
        </AnimatePresence>

        {/* OVERLAY TEXT */}
        <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 bg-black/50 px-3 sm:px-6 py-2 sm:py-4 rounded backdrop-blur-sm">
          <p className="text-white text-[10px] sm:text-sm md:text-base font-semibold">
            {images[index].title}
          </p>
          <h2 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            {images[index].subtitle}
          </h2>
        </div>

        {/* ARROWS */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 transition p-2 text-white rounded-full"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={next}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 transition p-2 text-white rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* THUMBNAILS */}
      <div className="mt-4 px-2 sm:px-0">
        <div className="flex gap-2 sm:gap-3 justify-start sm:justify-center overflow-x-auto">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`flex-shrink-0 cursor-pointer border-2 rounded overflow-hidden transition-all duration-300 ${
                i === index
                  ? "border-red-500 scale-105"
                  : "border-transparent opacity-70"
              }`}
            >
              <img
                src={img.src}
                alt=""
                loading="lazy" // ✅ huge performance win
                className="w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-20 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
