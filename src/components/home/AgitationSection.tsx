import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

const oldWay = [
  "Hoping for walk-ins and unpredictable weekends",
  "Paying for ads that get likes but not real customers",
  "Posting on social media with little to show for it",
  "Discounting with coupons that attract deal-seekers who never return",
  "Using delivery apps that cut margins and don't build loyalty",
  '"I need more customers" but no reliable way to reach them again',
];

const newWay = [
  "A permission-based customer list that grows every month",
  "Activate your list whenever you need traffic — especially slow nights",
  "No discount machine — guests come back at full price",
  "The birthday entrée is the first-visit catalyst, not the long-term strategy",
  "Own your customer data — no algorithm changes can take it away",
  "Simple, repeatable system your staff can handle",
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }),
};

const AgitationSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-4"
      >
        There's a Better Way to Fill Your Restaurant
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto"
      >
        Stop gambling on tactics that don't build loyalty. Start building an asset you own.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
        {/* Old Way */}
        <div className="bg-card rounded-xl p-8 border border-accent/20">
          <h3 className="font-display text-2xl text-accent mb-6">The Old Way</h3>
          <ul className="space-y-4">
            {oldWay.map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex gap-3 text-muted-foreground"
              >
                <XCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* New Way */}
        <div className="bg-secondary rounded-xl p-8 border border-primary/20 amber-glow">
          <h3 className="font-display text-2xl text-primary mb-6">The Birthday List Way</h3>
          <ul className="space-y-4">
            {newWay.map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex gap-3 text-secondary-foreground"
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AgitationSection;
