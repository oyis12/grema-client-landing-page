import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import carpetvid from "../assets/videos/carpetvid.mp4";

import { motion } from "framer-motion";
import { useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

// ================= PRODUCTS =================
const products = [
  {
    title: "Traditional Carpet",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Modern Carpet",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  },
  {
    title: "Luxury Rug",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea",
  },
  {
    title: "Persian Carpet",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
  },
  {
    title: "Office Carpet",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
  },
  {
    title: "Bedroom Carpet",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
  },
];

// ================= VIDEO BACKGROUND =================
const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 },
    );

    if (video) observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none" // ✅ important
        poster="/video-poster.jpg" // ✅ add this image
        className="w-full h-full object-cover"
      >
        {/* <source src={carpetvid} type="video/webm" /> */}
        <source src={carpetvid} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
    </div>
  );
};

// ================= PRODUCT CARD =================
const ProductCard = ({ item, isActive }) => {
    const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-40, 40], [5, -5]);
  const rotateY = useTransform(x, [-40, 40], [-5, 5]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / 8);
    y.set((e.clientY - rect.top - rect.height / 2) / 8);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY }}
      animate={{
        scale: isActive ? 1.05 : 0.9,
        opacity: isActive ? 1 : 0.6,
      }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl overflow-hidden shadow-xl bg-white will-change-transform"
    >
      {/* Image */}
      <div className="h-64 overflow-hidden">
        <motion.img
          src={`${item.image}?auto=format&fit=crop&w=800&q=70`}
          loading="lazy"
          alt={item.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
        />
      </div>

            <div className="p-4 text-gray-800">
                <h3 className="font-semibold">{item.title}</h3>
            </div>
        </motion.div>
    );
};

// ================= MAIN COMPONENT =================
export default function ProductsSlider() {
  return (
    <section className="relative py-24 text-white">
      {/* 🎥 Optimized Video */}
      <VideoBackground />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold">Our Carpet Collections</h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          centeredSlides
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={20}
          className="mt-16"
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <ProductCard item={item} isActive={isActive} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
