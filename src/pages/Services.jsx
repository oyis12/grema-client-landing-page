import { motion } from "framer-motion";

const services = [
    {
        title: "Carpet Installation",
        desc: "Professional fitting for homes and offices.",
        image: "/image8.jpg",
    },
    {
        title: "Custom Carpet Design",
        desc: "Tailor-made carpets for your style.",
        image: "/image9.jpg",
    },
    {
        title: "Cleaning & Maintenance",
        desc: "Keep carpets fresh and long-lasting.",
        image: "/image10.png",
    },
    {
        title: "Repair & Restoration",
        desc: "Restore carpets to original beauty.",
        image: "image11.jpg",
    },
];

const Services = () => {
    return (
        //bg-[#f8f6f4]
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-semibold text-gray-800"
                >
                    Our Services
                </motion.h2>

                <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                    Premium carpet solutions tailored to elevate your space.
                </p>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="overflow-hidden  group cursor-pointer"
                        >
                            {/* rounded-2xl shadow-md*/}

                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                <motion.img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300" />
                            </div>

                            {/* Content */}
                            <div className="bg-white p-5 text-left">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 text-sm mt-2">
                                    {service.desc}
                                </p>

                                {/* Animated underline */}
                                <motion.div
                                    className="h-[2px] bg-gray-800 mt-3 w-0"
                                    whileHover={{ width: "100%" }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;