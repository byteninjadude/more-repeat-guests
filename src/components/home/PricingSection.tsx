import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    subtitle: "List Builder Launch",
    price: "$497",
    features: [
      "Birthday Free Entrée offer setup",
      "Geo-targeted Facebook ad campaign",
      "Landing page + code/QR delivery",
      "Customer list building & management",
      "Monthly performance report",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    subtitle: "List Builder + Monthly Campaigns",
    price: "$1,000",
    features: [
      "Everything in Starter",
      "Monthly email/SMS remarketing campaigns",
      "Seasonal offer strategy",
      "A/B testing on ads & messaging",
      "Priority support & strategy calls",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    subtitle: "Multi-Location + Advanced Retargeting",
    price: "$1,500",
    features: [
      "Everything in Growth",
      "Multi-location campaign management",
      "Advanced retargeting audiences",
      "Custom analytics dashboard",
      "Dedicated account manager",
    ],
    highlight: false,
  },
];

const PricingSection = () => (
  <section className="py-20 lg:py-28 section-alt">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-4"
      >
        Simple, Outcome-Focused Packages
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto"
      >
        Every package is designed to build your customer list and drive repeat visits. Book a call for exact pricing.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {packages.map((pkg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-xl p-8 border ${
              pkg.highlight
                ? "bg-secondary border-primary amber-glow"
                : "bg-background border-border"
            }`}
          >
            {pkg.highlight && (
              <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Most Popular
              </span>
            )}
            <h3 className={`font-display text-2xl mb-1 ${pkg.highlight ? "text-primary" : ""}`}>{pkg.name}</h3>
            <p className={`text-sm mb-2 ${pkg.highlight ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>{pkg.subtitle}</p>
            <p className={`font-display text-3xl mb-6 ${pkg.highlight ? "text-primary" : ""}`}>{pkg.price}<span className="text-base font-normal text-muted-foreground">/month</span></p>
            <ul className="space-y-3 mb-8">
              {pkg.features.map((f, j) => (
                <li key={j} className={`flex gap-3 text-sm ${pkg.highlight ? "text-secondary-foreground" : ""}`}>
                  <Check className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.highlight ? "text-primary" : "text-primary"}`} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                pkg.highlight
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border-2 border-primary text-primary hover:bg-primary/10"
              }`}
            >
              Get Started
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
