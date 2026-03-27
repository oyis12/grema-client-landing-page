import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const team = [
  {
    name: "Fatima Bello",
    role: "Operations Manager",
    image: "/user1.jpeg",
  },
  {
    name: "Ibrahim Musa",
    role: "Head of Sales",
    bio: "Leads sales strategy and customer acquisition.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Zainab Aliyu",
    role: "Customer Relations",
    bio: "Ensures top-tier customer satisfaction and support.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Usman Garba",
    role: "Installation Supervisor",
    bio: "Manages carpet installation with precision.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

const TeamCard = ({ member }) => {
  const ref = useRef(null);

  // 🧲 Magnetic effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / 6);
    y.set((e.clientY - rect.top - rect.height / 2) / 6);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.05 }}
      className="relative group rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* IMAGE */}
      <motion.img
        src={member.image}
        alt={member.name}
        className="w-full h-80 object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6 }}
      />

      {/* ✨ GLOW EFFECT */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition duration-300" />

      {/* 🌫️ GLASS OVERLAY */}
      <div className="absolute inset-0 backdrop-blur-lg bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center p-6 text-center">

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="text-white text-lg font-semibold"
        >
          {member.name}
        </motion.h3>

        <p className="text-white/80 text-sm mt-1">
          {member.role}
        </p>

        <p className="text-white/70 text-xs mt-3">
          {member.bio}
        </p>
      </div>

      {/* 🎯 SPOTLIGHT */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)]" />
    </motion.div>
  );
};

const Team = () => {
  return (
    <section
      className="min-h-screen flex items-center bg-[#f8f6f4] py-16"
      id="team"
    >
      <div className="max-w-6xl mx-auto px-6  w-full">

        {/* Heading */}
    
           <div className="mb-10 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
            Meet Our Team
          </h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-[3px] bg-black mt-2 mx-auto md:mx-0"
          />
          <p className="text-black/80 mt-3 max-w-xl">
          Our leadership and dedicated professionals ensure quality,
          elegance, and excellence in every carpet we deliver.
        </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mt-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;