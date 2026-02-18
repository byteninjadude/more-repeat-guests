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
import SocialProofBar from "@/components/home/SocialProofBar";

const Index = () => (
  <Layout>
    <HeroSection />
    <AgitationSection />
    <HowItWorksSection />
    <ObjectionsSection />
    <ProofSection />
    <SocialProofBar />
    <IdealClientSection />
    <PricingSection />
    <FAQSection />
    <CTASection />
  </Layout>
);

export default Index;
