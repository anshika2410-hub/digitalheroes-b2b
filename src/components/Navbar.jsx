import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { name: "Home", path: "/" },
  { name: "Product", path: "/product" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header 
      className="
      sticky top-0 z-50 
      bg-white/90 
      backdrop-blur-md
      border-b 
      shadow-sm
      "
    >

      <div className="
        max-w-7xl mx-auto 
        px-6 py-4 
        flex items-center justify-between
      ">


        {/* Logo */}
        <div
  className="
  text-3xl 
  font-extrabold 
  text-blue-600
  cursor-pointer
  hover:scale-105
  transition-all
  duration-300
  "
>
  Digital<span className="text-gray-900">Heroes</span>
</div>



        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">

          {links.map((link) => (

            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `
                relative
                font-medium
                transition-all
                duration-300
                group
                ${
                  isActive
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
                }
                `
              }
            >

              {link.name}

              {/* underline animation */}
              <span
                className="
                absolute
                left-0
                -bottom-2
                h-0.5
                bg-blue-600
                w-0
                group-hover:w-full
                transition-all
                duration-300
                "
              />

            </NavLink>

          ))}

        </nav>



        {/* CTA Button */}
        <button
  className="
  hidden md:block
  bg-blue-600
  text-white
  px-6 py-2.5
  rounded-xl
  font-semibold
  shadow-md
  hover:bg-blue-700
  hover:scale-105
  hover:shadow-xl
  transition-all
  duration-300
  focus:outline-none
  focus:ring-2
  focus:ring-blue-500
  focus:ring-offset-2
  "
>
  Get Started
</button>



        {/* Mobile Menu Button */}
        <button
  className="
  md:hidden 
  text-3xl
  text-gray-700
  hover:text-blue-600
  transition
  focus:outline-none
  focus:ring-2
  focus:ring-blue-500
  rounded
  "
  onClick={() => setOpen(!open)}
  aria-label="Toggle navigation menu"
  aria-expanded={open}
>
  {open ? <HiX /> : <HiOutlineMenuAlt3 />}
</button>


      </div>



      {/* Mobile Menu */}
      {open && (

        <div
          className="
          md:hidden 
          border-t 
          bg-white
          px-6 py-5
          flex flex-col 
          gap-4
          animate-in
          "
        >

          {links.map((link) => (

            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({isActive}) =>
                `
                font-medium
                transition
                ${
                  isActive
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
                }
                `
              }
            >
              {link.name}
            </NavLink>

          ))}


          <button
  className="
    hidden md:block
    bg-blue-600
    text-white
    px-5
    py-2
    rounded-lg
    hover:bg-blue-700
    transition
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    focus:ring-offset-2
  "
>
  Get Started
</button>

        </div>

      )}

    </header>
  );
}