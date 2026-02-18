import { motion } from "framer-motion";
import { TrendingUp, Users, CalendarCheck, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const caseStudies = [
  {
    name: "Local Grill House",
    icon: TrendingUp,
    stat: "427",
    label: "Birthday signups in 60 days",
    detail: "Filled Tuesday nights with monthly offers sent to their growing list. Average party size: 3.2 guests per birthday visit.",
  },
  {
    name: "Family Italian Spot",
    icon: Users,
    stat: "312",
    label: "New contacts collected",
    detail: "18% returned within 45 days for a full-price visit. Monthly email campaigns now drive consistent mid-week traffic.",
  },
  {
    name: "Neighborhood Diner",
    icon: CalendarCheck,
    stat: "89%",
    label: "Consistent monthly list growth",
    detail: "Measurable repeat visits tracked through redemption codes. Owner reports 'best marketing investment we've ever made.'",
  },
];

const testimonials = [
  {
    quote: "Finally, something that brings people in AND gives me a list I can text and email later. Game changer.",
    name: "Mike R.",
    role: "Owner, Smoky Joe's BBQ",
  },
  {
    quote: "We used to boost posts and pray. Now we can actually reach our customers whenever we need to fill seats.",
    name: "Sarah L.",
    role: "GM, Bella Cucina",
  },
  {
    quote: "I was skeptical about giving away free entrées. But the return visits more than make up for it — and my staff loves the birthday energy.",
    name: "James T.",
    role: "Owner, The Copper Pan",
  },
  {
    quote: "In 90 days we had over 500 people on our list. Our slow Mondays aren't slow anymore.",
    name: "Linda K.",
    role: "Owner, Main Street Diner",
  },
];

const ProofSection = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const next = () => setTestimonialIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setTestimonialIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-4"
        >
          Real Results for Real Restaurants
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto"
        >
          Here's what happens when restaurants stop guessing and start building a customer list.
        </motion.p>

        {/* Case Studies */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary rounded-xl p-8 text-center"
            >
              <cs.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg text-secondary-foreground mb-2">{cs.name}</h3>
              <p className="text-4xl font-bold text-primary mb-1">{cs.stat}</p>
              <p className="text-sm text-primary/80 font-semibold mb-4">{cs.label}</p>
              <p className="text-sm text-secondary-foreground/70 leading-relaxed">{cs.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-xl p-8 md:p-12 border border-border relative">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <motion.blockquote
              key={testimonialIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-lg md:text-xl text-center font-display leading-relaxed mb-6"
            >
              "{testimonials[testimonialIdx].quote}"
            </motion.blockquote>
            <p className="text-center font-semibold">{testimonials[testimonialIdx].name}</p>
            <p className="text-center text-sm text-muted-foreground">{testimonials[testimonialIdx].role}</p>

            <div className="flex justify-center gap-4 mt-8">
              <button onClick={prev} className="p-2 rounded-full border border-border hover:border-primary transition-colors" aria-label="Previous testimonial">
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIdx(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${i === testimonialIdx ? "bg-primary" : "bg-border"}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button onClick={next} className="p-2 rounded-full border border-border hover:border-primary transition-colors" aria-label="Next testimonial">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
