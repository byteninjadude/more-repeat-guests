import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      await fetch("https://formsubmit.co/ajax/kalin_marinov@hotmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl text-center mb-4"
          >
            Let's Fill Your Restaurant With Repeat Customers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto"
          >
            No pressure. We'll map out a plan and tell you if it's a fit.
          </motion.p>

          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-secondary rounded-xl p-12 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl text-secondary-foreground mb-4">We Got Your Message!</h2>
                  <p className="text-secondary-foreground/70">We'll review your details and get back to you within 1 business day. Talk soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Your Name *</label>
                      <input required name="name" type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" placeholder="John Smith" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Restaurant Name *</label>
                      <input required name="restaurant" type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" placeholder="The Copper Pan" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email *</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" placeholder="john@restaurant.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" placeholder="(555) 123-4567" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Location / City</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" placeholder="Dallas, TX" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Best Time to Reach You</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" placeholder="Mornings before 11am" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Current Monthly Covers (approx.)</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" placeholder="e.g., 2,000" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Biggest Challenge Right Now</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none" placeholder="Tell us what's keeping you up at night..." />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                  >
                    Click here to get more repeat customers every month
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg mb-4">Book a Strategy Call</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Prefer to talk live? Book a free 15-minute strategy call and we'll map out how the Birthday List System can work for your restaurant.
                </p>
                <div className="bg-muted rounded-lg p-8 text-center text-sm text-muted-foreground">
                  <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <p className="font-semibold">Calendar Booking Coming Soon</p>
                  <p>For now, fill out the form and we'll schedule a call.</p>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border space-y-4">
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-sm font-semibold">Call Us</p>
                    <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-sm font-semibold">Based In</p>
                    <p className="text-sm text-muted-foreground">Serving restaurants nationwide</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <p className="text-sm text-secondary-foreground/80 italic">
                  "No pressure. We'll map out a plan and tell you if it's a fit. If it's not right for your restaurant, we'll be honest about that too."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
