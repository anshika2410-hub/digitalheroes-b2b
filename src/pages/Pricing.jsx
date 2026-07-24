import CTA from "../components/CTA";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
const plans = [
  {
    name: "Starter",
    price: "$19",
    features: [
      "Up to 500 Leads",
      "Basic Analytics",
      "Email Support",
      "1 Team Member",
    ],
  },
  {
    name: "Professional",
    price: "$49",
    popular: true,
    features: [
      "Unlimited Leads",
      "Advanced Analytics",
      "Workflow Automation",
      "5 Team Members",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited Everything",
      "Dedicated Manager",
      "API Access",
      "Priority Support",
    ],
  },
];

export default function Pricing() {
  return (
    <> <Helmet>
        <title>
          Pricing | DigitalHeroes CRM - Plans For Every Business
        </title>

        <meta
          name="description"
          content="Explore DigitalHeroes CRM pricing plans. Choose flexible CRM plans with lead management, analytics, automation and team collaboration features."
        />

        <meta
          property="og:title"
          content="DigitalHeroes CRM Pricing Plans"
        />

        <meta
          property="og:description"
          content="Choose the right CRM plan for your business growth with DigitalHeroes."
        />

        <meta
          property="og:type"
          content="website"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            "name": "DigitalHeroes CRM Pricing Plans",
            "itemListElement": plans.map((plan) => ({
              "@type": "Offer",
              "name": plan.name,
              "price": plan.price === "Custom" 
                ? "0" 
                : plan.price.replace("$", ""),
              "priceCurrency": "USD"
            }))
          })}
        </script>

      </Helmet>
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Simple Pricing</h1>
          <p className="mt-5 text-gray-600">
            Choose the plan that fits your business.
          </p>

       <div className="grid md:grid-cols-3 gap-8 mt-16">
  {plans.map((plan, index) => (
    <motion.div
      key={plan.name}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative p-8 rounded-2xl border bg-white 
        hover:shadow-2xl hover:-translate-y-2 
        transition-all duration-300
        ${
          plan.popular
            ? "border-blue-600 shadow-xl scale-105"
            : "border-gray-200"
        }`}
    >
      {plan.popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 
        bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      )}

      <h2 className="text-2xl font-bold mt-2">
        {plan.name}
      </h2>

      <p className="text-5xl font-bold mt-6 text-gray-900">
        {plan.price}
      </p>

      <ul className="mt-8 space-y-4 text-gray-600">
        {plan.features.map((item) => (
          <li 
            key={item}
            className="flex items-center gap-2"
          >
            <span className="text-blue-600">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <button
        className={`mt-8 w-full py-3 rounded-xl font-semibold
        transition-all duration-300
        ${
          plan.popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }`}
      >
        Choose Plan
      </button>

    </motion.div>
  ))}
</div>
        </div>
      </section>

      <CTA />
    </>
  );
}