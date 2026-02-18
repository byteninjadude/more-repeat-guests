import { motion } from "framer-motion";
import { Gift, Target, UserPlus, QrCode, ListChecks, Repeat } from "lucide-react";

const steps = [
  { icon: Gift, title: "Set Up Your Birthday Offer", desc: "We create your Birthday Free Entrée offer with clear redemption rules and staff instructions." },
  { icon: Target, title: "Launch Geo-Targeted Ads", desc: "We run Facebook ads to people near your restaurant — only locals who are likely to visit." },
  { icon: UserPlus, title: "Guests Opt In", desc: "Interested locals sign up to claim their birthday code or QR code. No spam, just genuine interest." },
  { icon: QrCode, title: "Redeem In-House", desc: "When the guest visits, your team checks the code. Simpler than processing a gift card." },
  { icon: ListChecks, title: "We Organize Your List", desc: "Every signup goes into your growing customer list — segmented, clean, and ready to use." },
  { icon: Repeat, title: "Monthly Follow-Up Campaigns", desc: "We send email/SMS campaigns to bring guests back again and again — at full price." },
];

const requirements = [
  "Offer approval (we'll help you design it)",
  "Basic brand assets — logo & photos (or we can help source them)",
  "Quick staff brief for code redemption",
  "Optional: POS note for tracking (we keep it simple)",
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 lg:py-28 section-alt">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-4"
      >
        How the Birthday List System Works
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto"
      >
        Six simple steps from setup to packed tables. We handle the heavy lifting.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-background rounded-xl p-6 border border-border relative"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-bold text-primary/60">Step {i + 1}</span>
            </div>
            <h3 className="font-display text-lg mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* What we need from you */}
      <div className="max-w-2xl mx-auto bg-background rounded-xl p-8 border border-primary/20">
        <h3 className="font-display text-xl text-center mb-6">What We Need From You</h3>
        <p className="text-center text-muted-foreground mb-6">Minimal effort on your end. We do the rest.</p>
        <ul className="space-y-3">
          {requirements.map((r, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span className="text-primary font-bold">✓</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
