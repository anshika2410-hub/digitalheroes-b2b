import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Digital<span className="text-blue-500">Heroes</span>
            </h2>

            <p className="mt-5 text-gray-400 leading-7">
              Modern CRM platform helping businesses manage leads,
              automate workflows and grow faster.
            </p>
          </div>


          {/* Links */}
          <div>
  <h3 className="text-xl font-semibold text-white mb-5">
    Quick Links
  </h3>

  <ul className="space-y-3">

    {[
      { name: "Home", path: "/" },
      { name: "Product", path: "/product" },
      { name: "Pricing", path: "/pricing" },
      { name: "Contact", path: "/contact" }
    ].map((item) => (
      <li key={item.name}>
        <Link
          to={item.path}
          className="
            cursor-pointer
            hover:text-blue-400
            hover:translate-x-1
            transition-all duration-300
            inline-block
          "
        >
          {item.name}
        </Link>
      </li>
    ))}

  </ul>
</div>


          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <div className="space-y-5">

              <a
  href="mailto:hello@digitalheroescrm.com"
  className="flex items-center gap-3 hover:text-blue-400 transition"
>
  <FaEnvelope className="text-blue-500" />
  hello@digitalheroescrm.com
</a>


<a
  href="https://www.linkedin.com/company/digital-heroes-1/posts/?feedView=all"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 hover:text-blue-400 transition cursor-pointer"
>
  <FaLinkedin className="text-blue-500 text-xl" />
  LinkedIn
</a>


<a
  href="https://github.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 hover:text-blue-400 transition cursor-pointer"
>
  <FaGithub className="text-blue-500 text-xl" />
  GitHub
</a>

            </div>
          </div>

        </div>


        {/* Bottom */}
        <div 
          className="
          border-t border-gray-800 
          mt-12 pt-6 
          text-center text-gray-500
          "
        >
          © 2026 DigitalHeroes CRM. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}