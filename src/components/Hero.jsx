import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import homeImg from "../assets/images/home.jpg";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            🚀 Trusted by Growing Businesses
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Grow Faster With A
            <span className="text-blue-600"> Modern CRM Platform</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Manage leads, automate follow-ups, monitor sales pipelines and
            collaborate with your team from one powerful dashboard.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              AI-powered workflow automation
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Real-time sales analytics
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Unlimited lead management
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/pricing"
              className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold transition"
            >
              Start Free Trial
            </Link>

            <Link
              to="/Product"
              className="border border-gray-300 hover:bg-gray-100 px-7 py-3 rounded-xl font-semibold transition"
            >
              Explore Product
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-14">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
              <p className="text-gray-500">Businesses</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">98%</h3>
              <p className="text-gray-500">Client Satisfaction</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
              <p className="text-gray-500">Support</p>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={homeImg}
            alt="CRM Dashboard"
            loading="lazy"
            className="w-full max-w-2xl rounded-3xl shadow-2xl"
          />
      </motion.div>

      </div>
    </section>
  );
}