import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      // 🔌 Replace with your API
      await new Promise((res) => setTimeout(res, 1000));

      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 sm:px-6 md:px-12">
        <div className="mb-10">
        <h1 className="text-lg sm:text-3xl md:text-2xl font-semibold text-gray-800">
          Contact
        </h1>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "3rem" }}
          transition={{ duration: 0.5 }}
          className="h-[3px] bg-black  mt-2"
        />
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* LEFT - INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>

          <p className="text-gray-600 mb-6 max-w-md">
            Have questions about our rugs or need help choosing the perfect fit
            for your space? Reach out to us — we’re here to help.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin size={20} />
              <span> Plot 1698, Aminu Kanu Crescent,<br />
            Wuse II, Abuja, Nigeria.</span>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <Phone size={20} />
              <span>08184343338<br /> 08130262533<br /> 08033212840</span>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <Mail size={20} />
              <span>info@rugstore.com</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT - FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 p-6 rounded-2xl shadow-sm space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-600 text-sm">{success}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;