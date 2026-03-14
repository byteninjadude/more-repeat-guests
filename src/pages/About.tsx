import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Eye, Handshake, Award } from "lucide-react";

const values = [
  { icon: Heart, title: "Hospitality First", desc: "We believe a birthday gift is hospitality, not discounting. We help you build genuine relationships with guests." },
  { icon: Eye, title: "Transparency Always", desc: "Clear reporting, honest expectations, and no hidden fees. You always know exactly what's working." },
  { icon: Handshake, title: "Simple Systems", desc: "If your staff can't handle it, we don't recommend it. Every process is designed for real-world restaurant operations." },
  { icon: Award, title: "Measurable Outcomes", desc: "We focus on signups, redemptions, and return visits — not likes, impressions, or vanity metrics." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="py-20 lg:py-28 hero-gradient">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl mb-6"
          style={{ color: "hsl(40, 33%, 97%)" }}
        >
          We Help Restaurants Build a Reliable Guest Pipeline
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg leading-relaxed"
          style={{ color: "hsl(40, 33%, 80%)" }}
        >
          The Birthday Club exists for one reason: to help restaurant owners stop gambling on unpredictable marketing and start building a customer list that drives repeat visits on demand.
        </motion.p>
      </div>
    </section>

    {/* Mission */}
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="font-display text-3xl mb-6">Our Philosophy</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Most restaurant marketing is backwards. It focuses on getting attention - likes, views, impressions - instead of building something lasting. We take a different approach.
          </p>
          <p>
            <strong className="text-foreground">One great first visit → relationship → repeat visits.</strong> That's the formula. The Birthday Free Entrée is the catalyst that gets guests through the door. But the real magic happens after, when you can reach those guests directly, month after month, bringing them back at full price.
          </p>
          <p>
            We specialize exclusively in restaurants. We understand the margins, the staffing challenges, the slow nights, and the seasonal swings. Everything we build is designed for the real world of restaurant operations.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-16 section-alt">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="font-display text-3xl mb-10 text-center">What We Stand For</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-xl p-6 border border-border"
            >
              <v.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust */}
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="bg-secondary rounded-xl p-8 md:p-12 text-center">
          <h2 className="font-display text-3xl text-secondary-foreground mb-6">Why Restaurant Owners Trust Us</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold text-primary mb-2">8+</p>
              <p className="text-sm text-secondary-foreground/70">Years of local marketing experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">Done-For-You</p>
              <p className="text-sm text-secondary-foreground/70">Complete execution - we handle everything</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">100%</p>
              <p className="text-sm text-secondary-foreground/70">Restaurant-focused expertise</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-center">
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg"
      >
        Click here to get more repeat customers every month
        <ArrowRight size={20} />
      </Link>
    </section>
  </Layout>
);

export default About;
