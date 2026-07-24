import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-pink-600 to-indigo-600 py-24">
      
      {/* Background blur effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Grow Your Business?
          </h2>

          <p className="mt-5 text-blue-100 text-lg max-w-2xl mx-auto">
            Join hundreds of businesses using DigitalHeroes CRM 
            to manage customers smarter and grow faster.
          </p>


          <Link
            to="/contact"
            className="
              inline-block mt-8
              bg-white text-blue-600
              px-8 py-3
              rounded-xl
              font-semibold
              shadow-lg
              hover:scale-105
              hover:bg-gray-100
              transition-all duration-300
            "
          >
            Book a Demo →
          </Link>

        </motion.div>

      </div>
    </section>
  );
}