import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero";
import Features from "../components/Features";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Helmet>

        <title>
          DigitalHeroes CRM | AI Powered B2B Sales Software
        </title>

        <meta
          name="description"
          content="DigitalHeroes CRM helps businesses manage leads, automate workflows and grow sales with AI-powered CRM solutions."
        />

        <meta
          property="og:title"
          content="DigitalHeroes CRM | AI Powered CRM Platform"
        />

        <meta
          property="og:description"
          content="Manage leads, automate workflows and close deals faster with DigitalHeroes CRM."
        />

        <meta
          property="og:type"
          content="website"
        />

      </Helmet>


      <Hero />

      <Features />

      <CTA />

    </>
  );
}