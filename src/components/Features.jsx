import { motion } from "framer-motion";
import {
  FaUsers,
  FaChartLine,
  FaRobot,
  FaShieldAlt,
  FaCloud,
  FaMobileAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUsers />,
    title: "Lead Management",
    desc: "Capture, organize and manage every lead from a single dashboard.",
  },
  {
    icon: <FaChartLine />,
    title: "Sales Analytics",
    desc: "Visual reports and insights to help your team close more deals.",
  },
  {
    icon: <FaRobot />,
    title: "AI Automation",
    desc: "Automate repetitive workflows and follow-up reminders.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Platform",
    desc: "Enterprise-grade security with role-based access control.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Based",
    desc: "Access your CRM securely from anywhere in the world.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Friendly",
    desc: "Fully responsive experience across mobile, tablet and desktop.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-semibold">
            FEATURES
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Everything Your Sales Team Needs
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Powerful tools designed to simplify customer management,
            automate workflows and accelerate business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-10 rounded-2xl border border-gray-200 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}