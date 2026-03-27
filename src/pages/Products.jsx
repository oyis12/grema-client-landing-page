// import { motion } from "framer-motion";

// const products = [
//   {
//     title: "Traditional Carpets",
//     desc: "Timeless patterns crafted with heritage.",
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//   },
//   {
//     title: "Modern Carpets",
//     desc: "Clean and stylish designs for modern homes.",
//     image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
//   },
//   {
//     title: "Custom Rugs",
//     desc: "Designed specifically for your space.",
//     image: "https://images.unsplash.com/photo-1600210492493-0946911123ea",
//   },
// ];

// const Products = () => {
//   return (
//     <section className="py-20 bg-[#f8f6f4]" id="products">
//       <div className="max-w-6xl mx-auto px-6 text-center">

//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-3xl font-semibold text-gray-800"
//         >
//           Our Carpets
//         </motion.h2>

//         <div className="grid md:grid-cols-3 gap-8 mt-12">
//           {products.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               whileHover={{ y: -10 }}
//               transition={{ delay: index * 0.1 }}
//               className="group rounded-2xl overflow-hidden shadow-md"
//             >
//               <div className="relative h-64 overflow-hidden">
//                 <motion.img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover"
//                   whileHover={{ scale: 1.1 }}
//                 />
//                 <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
//               </div>

//               <div className="bg-white p-5 text-left">
//                 <h3 className="font-semibold text-gray-800">{item.title}</h3>
//                 <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Products;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import { useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

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
    {
        title: "Hallway Runner",
        image: "https://i.pinimg.com/1200x/17/ce/6c/17ce6c4f56a3515afdf469ab0df7a9c2.jpg",
    },
    {

        title: "Custom Design",
        image: "https://img.fantaskycdn.com/e3443463dc9ca535bb6b98973d90738b_1024x.jpeg",
    },
    {
        title: "Premium Wool Carpet",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267",
    },
    {
        title: "Minimalist Carpet",
        image: "https://i.pinimg.com/1200x/81/e8/20/81e8201b83d3ac0863df018b79d871fa.jpg",
    },
];

const ProductCard = ({ item, isActive }) => {
    const ref = useRef(null);

    // 🧲 Magnetic effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-50, 50], [6, -6]);
    const rotateY = useTransform(x, [-50, 50], [-6, 6]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) / 6);
        y.set((e.clientY - rect.top - rect.height / 2) / 6);
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
                scale: isActive ? 1.1 : 0.9,
                opacity: isActive ? 1 : 0.6,
            }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden shadow-xl bg-white"
        >
            {/* Image */}
            <div className="h-64 overflow-hidden">
                <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                />
            </div>

            <div className="p-4 text-gray-800">
                <h3 className="font-semibold">{item.title}</h3>
            </div>
        </motion.div>
    );
};

export default function ProductsSlider() {
    return (
        <section className="relative py-24 text-white">

            {/* 🎥 Video Background */}
            <div className="absolute inset-0 -z-10">
                <video autoPlay muted loop className="w-full h-full object-cover">
                    <source src="/videos/carpetvid.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-semibold">Our Carpet Collections</h2>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    centeredSlides
                    loop
                    autoplay={{ delay: 4000 }}
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        640: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                        },
                      }}
                    className="mt-16 mySwiper"
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

