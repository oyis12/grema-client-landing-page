import { motion } from "framer-motion";

// ✅ Move images to assets folder
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";
import user4 from "../assets/user4.jpeg";

const team = [
  {
    name: "Abdullahi Grema",
    role: "Operations Manager",
    bio: "Oversees daily operations, ensuring efficient service delivery and smooth coordination across all departments.",
    image: user1,
  },
  {
    name: "Yusuf Grema",
    role: "Head of Customer Relations",
    bio: "Builds strong client relationships, ensuring customer satisfaction and handling inquiries and support.",
    image: user4,
  },
  {
    name: "Musa Grema",
    role: "Head of Logistics",
    bio: "Manages delivery, inventory, and installation scheduling to ensure timely and efficient service.",
    image: user3,
  },
  {
    name: "Mohammed Grema",
    role: "Marketing Manager",
    bio: "Develops marketing strategies to promote products, attract customers, and grow brand presence.",
    image: user2,
  },
];

const TeamCard = ({ member }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="text-center relative group"
    >
      {/* IMAGE */}
      <div className="overflow-hidden rounded-2xl shadow-xl transition-shadow duration-500 group-hover:shadow-2xl">
        <motion.img
          src={member.image}
          alt={member.name}
          loading="lazy" // ✅ lazy load
          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition duration-500 rounded-2xl" />
      </div>

      {/* INFO */}
      <h3 className="mt-4 font-semibold text-gray-900 text-lg md:text-xl">
        {member.name}
      </h3>

      <p className="text-sm text-gray-500 mt-1">{member.role}</p>

      <p className="text-xs text-gray-400 mt-2 max-w-[220px] mx-auto leading-snug">
        {member.bio}
      </p>
    </motion.div>
  );
};

const Team = () => {
  return (
    <section
      className="min-h-screen flex items-center bg-gradient-to-b from-white to-[#f8f6f4] py-20"
      id="team"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* HEADING */}
        <div className="mb-14 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight">
            Meet Our Team
          </h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-[3px] bg-black mt-3 mx-auto md:mx-0"
          />

          <p className="text-gray-700 mt-4 max-w-lg md:max-w-xl">
            Our leadership and dedicated professionals ensure quality,
            elegance, and excellence in every carpet we deliver.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mt-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
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