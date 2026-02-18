import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { stars: 5, text: "Best marketing decision we ever made for our restaurant.", author: "Tony M." },
  { stars: 5, text: "Simple, effective, and my staff actually understands it.", author: "Debra S." },
  { stars: 5, text: "We went from 0 to 600+ contacts in 3 months.", author: "Chris W." },
];

const SocialProofBar = () => (
  <section className="py-16 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm uppercase tracking-widest text-secondary-foreground/50 mb-8"
      >
        Trusted by restaurant owners across the country
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(r.stars)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-secondary-foreground/80 italic mb-2">"{r.text}"</p>
            <p className="text-xs text-secondary-foreground/50 font-semibold">— {r.author}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofBar;
