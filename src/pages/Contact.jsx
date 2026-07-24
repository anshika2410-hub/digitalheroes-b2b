import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
export default function Contact() {
    const [formData, setFormData] = useState({
  from_name: "",
  from_email: "",
  company: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  setLoading(true);

  emailjs
    .send(
      "anshika_128",
      "template_shs2mf3",
      formData,
      "vuTwS0lo6kxAmZyrX"
    )
    .then(() => {
      setSuccess("✅ Message sent successfully!");

      setFormData({
        from_name: "",
        from_email: "",
        company: "",
        message: "",
      });

      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setSuccess("❌ Failed to send message.");
      setLoading(false);
    });
};
  return (
            <>
      <Helmet>

        <title>
          Contact Us | DigitalHeroes CRM
        </title>

        <meta
          name="description"
          content="Contact DigitalHeroes CRM team for CRM solutions, sales automation and business growth support."
        />

        <meta
          property="og:title"
          content="Contact DigitalHeroes CRM"
        />

        <meta
          property="og:description"
          content="Get in touch with DigitalHeroes CRM for modern sales and customer management solutions."
        />

        <meta
          property="og:type"
          content="website"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DigitalHeroes CRM",
            "description":
              "AI-powered CRM platform helping businesses manage leads and automate sales workflows.",
            "email": "hello@digitalheroescrm.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bengaluru",
              "addressCountry": "India"
            }
          })}
        </script>

      </Helmet>

    <section className="py-24 bg-slate-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            We'd love to hear from you.
          </p>

        </motion.div>


        <div className="grid lg:grid-cols-2 gap-12 mt-16">


          {/* Contact Info */}
          <motion.div
            initial={{ opacity:0, x:-50 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.6 }}
          >

            <h2 className="text-3xl font-semibold">
              Get in Touch
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Have questions about DigitalHeroes CRM?
              Our team is here to help you.
            </p>


            <div className="mt-8 space-y-5">


              <div className="
                flex items-center gap-4
                text-gray-600
                hover:text-blue-600
                transition
              ">
                <FaEnvelope className="text-blue-600 text-xl"/>
                hello@digitalheroescrm.com
              </div>


              <div className="
                flex items-center gap-4
                text-gray-600
                hover:text-blue-600
                transition
              ">
                <FaPhone className="text-blue-600 text-xl"/>
                +91 98765 43210
              </div>


              <div className="
                flex items-center gap-4
                text-gray-600
                hover:text-blue-600
                transition
              ">
                <FaMapMarkerAlt className="text-blue-600 text-xl"/>
                Bengaluru, India
              </div>


            </div>


          </motion.div>



          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity:0, x:50 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.6 }}

            className="
            bg-white 
            p-8 
            rounded-2xl 
            shadow-md
            hover:shadow-2xl
            transition-all
            duration-300
            "
          >


            <label className="block mb-2 text-gray-700 font-medium">
  Full Name
</label>

<input
  type="text"
  name="from_name"
  value={formData.from_name}
  onChange={handleChange}
  placeholder="Full Name"
  aria-label="Full Name"
  required
  className="
    w-full
    border
    rounded-lg
    p-3
    mb-4
    outline-none
    focus:ring-2
    focus:ring-blue-500
  "
/>

            <label className="block mb-2 text-gray-700 font-medium">
  Email
</label>

<input
  type="email"
  name="from_email"
  value={formData.from_email}
  onChange={handleChange}
  placeholder="Email"
  aria-label="Email"
  required
  className="
    w-full
    border
    rounded-lg
    p-3
    mb-4
    outline-none
    focus:ring-2
    focus:ring-blue-500
  "
/>
            


            <label className="block mb-2 text-gray-700 font-medium">
  Company
</label>

<input
  type="text"
  name="company"
  value={formData.company}
  onChange={handleChange}
  placeholder="Company"
  aria-label="Company"
  className="
    w-full
    border
    rounded-lg
    p-3
    mb-4
    outline-none
    focus:ring-2
    focus:ring-blue-500
  "
/>


            <label className="block mb-2 text-gray-700 font-medium">
  Message
</label>

<textarea
  rows="5"
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Message"
  aria-label="Message"
  required
  className="
    w-full
    border
    rounded-lg
    p-3
    mb-4
    outline-none
    focus:ring-2
    focus:ring-blue-500
  "
/>


            <button
  type="submit"
  disabled={loading}
  className="
    w-full
    bg-blue-600
    text-white
    py-3
    rounded-xl
    font-semibold
    hover:bg-blue-700
    hover:scale-[1.02]
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    focus:ring-offset-2
    transition-all
    duration-300
    disabled:opacity-50
  "
>
  {loading ? "Sending..." : "Send Message →"}
</button>

{success && (
  <p
    className={`mt-4 text-center font-medium ${
      success.includes("successfully")
        ? "text-green-600"
        : "text-red-600"
    }`}
  >
    {success}
  </p>
)}


          </motion.form>


        </div>

      </div>

    </section>
     </>
  );
}