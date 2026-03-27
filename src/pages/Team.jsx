import { motion } from "framer-motion";

const team = [
  {
    name: "Fatima Bello",
    role: "Operations Manager",
    bio: "Oversees daily operations ensuring smooth service delivery.",
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
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="text-center"
    >
      {/* IMAGE */}
      <div className="overflow-hidden rounded-2xl shadow-md">
        <motion.img
          src={member.image}
          alt={member.name}
          className="w-full h-72 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* INFO */}
      <h3 className="mt-4 font-semibold text-gray-800">
        {member.name}
      </h3>

      <p className="text-sm text-gray-500">
        {member.role}
      </p>

      <p className="text-xs text-gray-400 mt-2 max-w-[200px] mx-auto">
        {member.bio}
      </p>
    </motion.div>
  );
};

const Team = () => {
  return (
    <section
      className="min-h-screen flex items-center bg-[#f8f6f4] py-16"
      id="team"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

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
              initial={{ opacity: 0, y: 30 }}
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