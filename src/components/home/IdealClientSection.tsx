import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const perfectFor = [
  "You want more repeat customers and predictable traffic",
  "You're tired of relying on discounts, delivery apps, or random busy nights",
  "You want to own a customer list you can market to every month",
  "You want a simple system that staff can handle",
  "You run an independent restaurant, bar & grill, family dining, or casual dining spot",
];

const notFit = [
  "You don't want to honor a genuine free birthday entrée",
  "You refuse to follow basic redemption rules",
  "You want overnight results with no testing",
];

const IdealClientSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-16"
      >
        Is This Right for Your Restaurant?
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-secondary rounded-xl p-8"
        >
          <h3 className="font-display text-2xl text-primary mb-6">Perfect for you if…</h3>
          <ul className="space-y-4">
            {perfectFor.map((item, i) => (
              <li key={i} className="flex gap-3 text-secondary-foreground">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl p-8 border border-border"
        >
          <h3 className="font-display text-2xl text-accent mb-6">Not a fit if…</h3>
          <ul className="space-y-4">
            {notFit.map((item, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground">
                <XCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default IdealClientSection;
