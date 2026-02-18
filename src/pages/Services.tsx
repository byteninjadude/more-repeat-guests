import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Gift, Users, Repeat, Shield, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Local Facebook Ads Management",
    slug: "local-facebook-ads",
    desc: "Geo-targeted ads that reach hungry locals near your restaurant — not random clicks from across the country.",
  },
  {
    icon: Gift,
    title: "Birthday Offer Funnel Setup",
    slug: "birthday-offer-funnel",
    desc: "Complete signup-to-code delivery system that turns birthday interest into in-restaurant visits.",
  },
  {
    icon: Users,
    title: "Customer List Building & Management",
    slug: "customer-list-building",
    desc: "Build, segment, and maintain a permission-based customer list you own and control.",
  },
  {
    icon: Repeat,
    title: "Monthly Remarketing Campaigns",
    slug: "monthly-remarketing",
    desc: "Email and SMS campaigns designed to bring birthday guests back at full price — month after month.",
  },
  {
    icon: Shield,
    title: "Offer Strategy & Redemption Guardrails",
    slug: "offer-strategy",
    desc: "Smart rules that prevent abuse, protect your brand, and ensure the free entrée drives real value.",
  },
  {
    icon: BarChart3,
    title: "Tracking & Reporting",
    slug: "tracking-reporting",
    desc: "Clear monthly reports on redemptions, list growth, and return visits. No vanity metrics.",
  },
];

const Services = () => (
  <Layout>
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl text-center mb-4"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto"
        >
          Everything you need to turn birthday visitors into lifelong regulars. Each service is designed specifically for restaurant owners.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={`/services/${svc.slug}`}
                className="block bg-card rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all group h-full"
              >
                <svc.icon className="w-10 h-10 text-primary mb-4" />
                <h2 className="font-display text-xl mb-3 group-hover:text-primary transition-colors">{svc.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{svc.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
