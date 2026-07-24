import { motion } from "framer-motion";
import { FaUsers, FaChartLine, FaHandshake } from "react-icons/fa";
import Features from "../components/Features";
import CTA from "../components/CTA";
import { Helmet } from "react-helmet-async";

export default function Product() {
  const steps = [
    {
      icon: <FaUsers />,
      title: "Capture Leads",
      desc: "Collect leads from forms, campaigns and referrals automatically."
    },
    {
      icon: <FaChartLine />,
      title: "Manage Pipeline",
      desc: "Assign owners, track progress and manage sales activities."
    },
    {
      icon: <FaHandshake />,
      title: "Close Deals",
      desc: "Analyze performance and convert more opportunities faster."
    }
  ];

  
  return (
    <><Helmet>
      <title>
        Product | DigitalHeroes CRM - AI Sales Automation Platform
      </title>
            <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is DigitalHeroes CRM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DigitalHeroes CRM is a B2B sales platform that helps businesses manage leads, automate workflows and improve customer relationships."
      }
    },
    {
      "@type": "Question",
      "name": "Can I automate sales follow-ups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, DigitalHeroes CRM provides workflow automation to simplify follow-ups and sales activities."
      }
    },
    {
  "@type": "Question",
  "name": "Is it suitable for growing teams?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes, our CRM plans are designed for startups and growing sales teams."
  }
}
  ]
})}
</script>
      <meta
        name="description"
        content="Explore DigitalHeroes CRM features including lead management, sales pipeline tracking, AI automation and workflow optimization."
      />

      <meta
        property="og:title"
        content="DigitalHeroes CRM Product Features"
      />

      <meta
        property="og:description"
        content="Manage leads, automate sales workflows and improve team productivity with our AI-powered CRM platform."
      />

      <meta
        property="og:type"
        content="website"
      />
      <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "DigitalHeroes CRM",
    "description":
      "AI-powered CRM platform for lead management, sales automation and customer relationship management.",
    "brand": {
      "@type": "Brand",
      "name": "DigitalHeroes"
    },
    "offers": {
      "@type": "Offer",
      "price": "49",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  })}
</script>

    </Helmet>
      {/* Hero Section */}

      <section className="bg-slate-50 py-24">
        <motion.div
  className="max-w-7xl mx-auto px-6 text-center"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-semibold">
            PRODUCT
          </span>


          <h1 className="
            mt-3 text-4xl md:text-5xl font-bold
          ">
            Built for Modern Sales Teams
          </h1>


          <p className="
            text-gray-600 
            mt-6 
            max-w-3xl 
            mx-auto 
            text-lg 
            leading-8
          ">
            Capture leads, automate follow-ups, collaborate with your team,
            and close deals faster from one centralized CRM platform.
          </p>


          <div className="mt-8 flex justify-center gap-4">
  <span className="
    px-5 py-2 
    rounded-full 
    bg-blue-50 
    text-blue-600 
    font-medium
  ">
    AI Powered CRM
  </span>

  <span className="
    px-5 py-2 
    rounded-full 
    bg-gray-100 
    text-gray-700 
    font-medium
  ">
    Sales Automation
  </span>
</div>

        </motion.div>
      </section>


      {/* Features */}
      <Features />
    

      {/* How It Works */}
      <section className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            How It Works
          </h2>

          <p className="text-gray-600 text-center mt-4">
            Three simple steps to manage your complete sales workflow.
          </p>


          <div className="grid md:grid-cols-3 gap-8 mt-14">


            {steps.map((step,index)=>(
              <motion.div
                key={index}
                initial={{opacity:0,y:40}}
                whileInView={{opacity:1,y:0}}
                viewport={{
  once:true,
  amount:0.3
}}
                transition={{
                  duration:0.5,
                  delay:index*0.1
                }}

                className="
                p-8
                rounded-2xl
                border
                border-gray-200
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                "
              >

                <div className="
                  w-14 h-14
                  rounded-xl
                  bg-blue-100
                  text-blue-600
                  flex
                  items-center
                  justify-center
                  text-2xl
                ">
                  {step.icon}
                </div>


                <h3 className="text-xl font-semibold mt-6">
                  {index+1}. {step.title}
                </h3>


                <p className="
                  mt-3
                  text-gray-600
                  leading-7
                ">
                  {step.desc}
                </p>

                
              </motion.div>
              
            ))}


          </div>

        </div>

      </section>

            <section className="py-20 bg-slate-50">

  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center">
      Frequently Asked Questions
    </h2>

    <div className="mt-10 space-y-6">

      <article>
        <h3 className="text-xl font-semibold">
          What is DigitalHeroes CRM?
        </h3>
        <p className="mt-2 text-gray-600">
          DigitalHeroes CRM is a B2B sales platform that helps businesses
          manage leads, automate workflows and improve customer relationships.
        </p>
      </article>


      <article>
        <h3 className="text-xl font-semibold">
          Can I automate sales follow-ups?
        </h3>
        <p className="mt-2 text-gray-600">
          Yes, DigitalHeroes CRM provides workflow automation to simplify
          follow-ups and sales activities.
        </p>
      </article>


      <article>
        <h3 className="text-xl font-semibold">
          Is it suitable for growing teams?
        </h3>
        <p className="mt-2 text-gray-600">
          Yes, our CRM plans are designed for startups and growing sales teams.
        </p>
      </article>

    </div>

  </div>
  

</section>
      <CTA />

    </>
  );
}