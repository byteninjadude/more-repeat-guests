import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import AgitationSection from "@/components/home/AgitationSection";
import ObjectionsSection from "@/components/home/ObjectionsSection";
import ProofSection from "@/components/home/ProofSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import IdealClientSection from "@/components/home/IdealClientSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <Layout>
    <Helmet>
      <title>The Birthday Club - Turn Birthday Visitors Into Lifelong Regulars</title>
      <meta name="description" content="We help restaurant owners build a customer list that drives repeat visits on demand using our proven Birthday Free Entrée system." />
      <meta property="og:title" content="The Birthday Club - Turn Birthday Visitors Into Lifelong Regulars" />
      <meta property="og:description" content="We help restaurant owners build a customer list that drives repeat visits on demand using our proven Birthday Free Entrée system." />
    </Helmet>
    <HeroSection />
    <AgitationSection />
    <HowItWorksSection />
    <ObjectionsSection />
    <ProofSection />
    <IdealClientSection />
    <PricingSection />
    <FAQSection />
    <CTASection />
  </Layout>
);

export default Index;
