import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
    <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl lg:text-5xl mb-6"
        style={{ color: "hsl(40, 33%, 97%)" }}
      >
        Ready to Stop Guessing and Start{" "}
        <span className="text-gradient-amber">Growing?</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-lg mb-10 max-w-2xl mx-auto"
        style={{ color: "hsl(40, 33%, 80%)" }}
      >
        Join restaurants that are building a repeat customer list they own, powered by a genuine birthday offer and smart monthly follow-up.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-5 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Click here to get more repeat customers every month
          <ArrowRight size={20} />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
