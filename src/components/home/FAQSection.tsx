import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do you prevent people from claiming multiple offers?",
    a: "Each birthday offer is tied to a unique code or QR code linked to the individual's information. Our system flags duplicates automatically, and your staff verifies the code at redemption. One birthday per person, per year.",
  },
  {
    q: "What if we get too many redemptions?",
    a: "You control the pace. We set ad budgets and geographic targeting based on your capacity. If volume gets high, we dial it back. You're always in the driver's seat.",
  },
  {
    q: "Do we need email or SMS tools?",
    a: "We handle the tech. Whether it's email, SMS, or both, we set up and manage the tools. You don't need to learn any new software.",
  },
  {
    q: "Can this work for bars, diners, or fine casual restaurants?",
    a: "Absolutely. The Birthday List System works for any restaurant concept where guests dine in. We tailor the offer and messaging to match your brand and audience.",
  },
  {
    q: "What results should we expect in 30/60/90 days?",
    a: "In 30 days: your offer is live and signups are flowing. In 60 days: you have a meaningful list and first return visits. In 90 days: monthly campaigns are driving predictable repeat traffic. Exact numbers depend on your market and budget.",
  },
  {
    q: "What ad budget is recommended?",
    a: "Most restaurants start with $300–$800/month in ad spend (separate from our management fee). We'll recommend the right budget based on your area and goals during our strategy call.",
  },
  {
    q: "How quickly can we launch?",
    a: "Most restaurants are live within 7–10 business days from kickoff. We handle the setup — you just approve the offer and provide basic brand assets.",
  },
];

const FAQSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-4"
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto"
      >
        Still have questions? We're happy to chat — book a free call anytime.
      </motion.p>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
              <AccordionTrigger className="font-display text-left text-base py-5 hover:no-underline hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
