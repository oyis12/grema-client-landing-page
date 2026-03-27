import { motion } from "framer-motion";

const ceo = {
  name: "Ahmad Abdullahi",
  role: "CEO & Founder",
  image: "https://randomuser.me/api/portraits/men/32.jpg",
};

const team = [
  {
    name: "Fatima Bello",
    role: "Operations Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ibrahim Musa",
    role: "Head of Sales",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Zainab Aliyu",
    role: "Customer Relations",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Usman Garba",
    role: "Installation Supervisor",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

const Team = () => {
  return (
    <section
      className="min-h-screen flex items-center bg-[#f8f6f4] py-16"
      id="team"
    >
      <div className="max-w-6xl mx-auto px-6 text-center w-full">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-semibold text-black"
        >
          Meet Our Team
        </motion.h2>

        <p className="text-black/80 mt-3 max-w-xl mx-auto">
          Our leadership and dedicated professionals ensure quality,
          elegance, and excellence in every carpet we deliver.
        </p>

        {/* ================= MAIN LAYOUT ================= */}
        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* LEFT SIDE (2 members) */}
          <div className="flex flex-col gap-8">
            {team.slice(0, 2).map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full object-cover shadow-lg"
                />
                <h4 className="mt-3 font-semibold text-black">
                  {member.name}
                </h4>
                <p className="text-sm text-black/70">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CEO CENTER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            <motion.img
              src={ceo.image}
              alt={ceo.name}
              className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-black"
              whileHover={{ scale: 1.05 }}
            />

            <h3 className="mt-5 text-xl font-semibold text-black">
              {ceo.name}
            </h3>

            <p className="text-black/80">{ceo.role}</p>
          </motion.div>

          {/* RIGHT SIDE (2 members) */}
          <div className="flex flex-col gap-8">
            {team.slice(2, 4).map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full object-cover shadow-lg"
                />
                <h4 className="mt-3 font-semibold text-black">
                  {member.name}
                </h4>
                <p className="text-sm text-black/70">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Team;