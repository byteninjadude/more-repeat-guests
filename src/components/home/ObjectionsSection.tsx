import { motion } from "framer-motion";
import { Shield, BarChart3, Users, Smartphone, ClipboardCheck, Zap } from "lucide-react";

const objections = [
  {
    icon: Shield,
    question: '"Will this attract freeloaders?"',
    answer: "The free entrée is birthday-only and code-based. One code per person, verified at redemption. No mass coupon abuse possible.",
  },
  {
    icon: BarChart3,
    question: '"Will I get crushed by redemptions?"',
    answer: "We control pacing through ad budgets and geographic targeting. You approve the volume before we scale.",
  },
  {
    icon: Users,
    question: '"Will it cheapen my brand?"',
    answer: "A genuine birthday gift elevates your brand. It's hospitality, not discounting. Guests remember restaurants that made their birthday special.",
  },
  {
    icon: ClipboardCheck,
    question: '"How do I track results?"',
    answer: "You get monthly reports on signups, redemptions, list growth, and return visits. Clear numbers, no vanity metrics.",
  },
  {
    icon: Smartphone,
    question: '"Do I need new tech or complicated systems?"',
    answer: "No new hardware or software. We handle everything. Your staff just checks a code - it's simpler than processing a gift card.",
  },
  {
    icon: Zap,
    question: '"What if I\'ve tried ads before and they didn\'t work?"',
    answer: "Most restaurant ads fail because they drive awareness, not action. Our system captures contact info so you can re-engage guests repeatedly.",
  },
];

const ObjectionsSection = () => (
  <section className="py-20 lg:py-28 section-alt">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-4"
      >
        We Know What You're Thinking
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto"
      >
        Every restaurant owner has the same concerns. Here's how we've built guardrails into the system.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {objections.map((obj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
          >
            <obj.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display text-lg mb-3">{obj.question}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{obj.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ObjectionsSection;
