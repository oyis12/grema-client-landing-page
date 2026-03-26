import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/image4.jpg",
    title: "STYLE. COMFORT. QUALITY.",
    subtitle: "Redefine Your Living Space",
  },
  {
    src: "/image1.jpg",
    title: "TIMELESS ELEGANCE",
    subtitle: "Where Tradition Meets Modern Design",
  },
  {
    src: "/image2.jpg",
    title: "UNMATCHED COMFORT",
    subtitle: "Feel the Difference Under Every Step",
  },
  {
    src: "/image3.jpg",
    title: "MAKE A STATEMENT",
    subtitle: "Rugs That Speak Luxury",
  },
];

const Home = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full bg-[url('/splash_bg.jpg')] bg-cover bg-center py-6 sm:py-8 md:py-10 h-3/4">
      
      {/* MAIN IMAGE */}
      <div className="relative overflow-hidden rounded-lg w-[95%] sm:w-[90%] md:w-4/5 mx-auto">
        
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index].src}
            alt=""
            className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        {/* OVERLAY TEXT */}
        {images[index].title && (
          <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 bg-black/50 px-3 sm:px-6 py-2 sm:py-4 rounded">
            <p className="text-white text-[10px] sm:text-sm md:text-base font-semibold">
              {images[index].title}
            </p>
            <h2 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              {images[index].subtitle}
            </h2>
          </div>
        )}

        {/* ARROWS */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-black/50 p-1 sm:p-2 text-white rounded-full"
        >
          <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={next}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-black/50 p-1 sm:p-2 text-white rounded-full"
        >
          <ChevronRight size={18} className="sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* THUMBNAILS */}
      <div className="mt-4 px-2 sm:px-0">
        <div className="flex gap-2 sm:gap-3 justify-start sm:justify-center">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`flex-shrink-0 cursor-pointer border-2 transition-all duration-300 ${
                i === index
                  ? "border-red-500 scale-105"
                  : "border-transparent opacity-70"
              }`}
            >
              <img
                src={img.src}
                alt=""
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