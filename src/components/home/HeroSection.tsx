import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
    {/* Background image overlay */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="Packed restaurant with happy diners" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 hero-gradient opacity-80" />
    </div>

    <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-primary font-semibold text-sm uppercase tracking-widest mb-6"
        >
          For Restaurant Owners
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-8"
          style={{ color: "hsl(40, 33%, 97%)" }}
        >
          Go From Slow Nights + One-Time Diners to a{" "}
          <span className="text-gradient-amber">Growing List of Repeat Customers</span>{" "}
          Who Come Back Month After Month
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-3 mb-10 text-lg"
          style={{ color: "hsl(40, 33%, 85%)" }}
        >
          <p>✓ We run local FB ads to people near your restaurant</p>
          <p>✓ We give them a free birthday entrée, no strings attached</p>
          <p>✓ They sign up to receive a redeemable code or QR code</p>
          <p>✓ Your team redeems it when they visit</p>
          <p>✓ You market to that growing list monthly — bringing them back at full price</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Click here to get more repeat customers every month
            <ArrowRight size={20} />
          </Link>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary/40 px-8 py-4 rounded-lg font-semibold text-primary hover:bg-primary/10 transition-all"
          >
            See how the Birthday List System works
            <ChevronDown size={20} />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
