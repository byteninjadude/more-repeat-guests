import Layout from "@/components/Layout";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ServiceData {
  title: string;
  meta: string;
  hero: string;
  whoFor: string[];
  problems: string[];
  included: string[];
  outcomes: string[];
  faqs: { q: string; a: string }[];
}

const serviceData: Record<string, ServiceData> = {
  "local-facebook-ads": {
    title: "Local Facebook Ads Management",
    meta: "Geo-targeted Facebook ads that bring local diners to your restaurant",
    hero: "We don't run ads to the whole internet. We target people within driving distance of your restaurant who are most likely to walk through your door.",
    whoFor: ["Independent restaurants wanting more local foot traffic", "Multi-location groups needing geo-specific campaigns", "Any restaurant tired of wasting ad budget on irrelevant clicks"],
    problems: ["Wasting money on ads that reach people 50 miles away", "Getting likes and comments but no actual customers", "No idea how to target the right audience on Facebook"],
    included: ["Custom audience creation based on your location", "Ad creative designed for restaurant conversions", "Ongoing optimization and A/B testing", "Monthly budget management and pacing", "Performance reporting with real metrics"],
    outcomes: ["More local diners discovering your restaurant", "Lower cost per lead than traditional advertising", "A steady flow of birthday offer signups"],
    faqs: [
      { q: "What ad budget do I need?", a: "Most restaurants start with $300-$800/month. We'll recommend the right budget for your market during our strategy call." },
      { q: "How is this different from boosting posts?", a: "Boosted posts optimize for engagement (likes, comments). We optimize for signups — real people who give you their info and visit your restaurant." },
      { q: "Do I need a Facebook page?", a: "Yes, but it doesn't need to be fancy. We can help you set one up if needed." },
    ],
  },
  "birthday-offer-funnel": {
    title: "Birthday Offer Funnel Setup",
    meta: "Complete birthday signup and code delivery system for restaurants",
    hero: "We build the entire funnel — from ad click to birthday code delivery. Guests opt in, receive their code, and visit your restaurant. Simple for them, simple for your staff.",
    whoFor: ["Restaurants wanting a proven first-visit incentive", "Owners who want automated lead capture", "Teams needing a hands-off signup system"],
    problems: ["No system to capture guest information before they visit", "Manual processes that fall apart when staff gets busy", "No way to deliver offers consistently"],
    included: ["Custom landing page for birthday signups", "Automated code/QR code generation and delivery", "Email/SMS confirmation sequences", "Staff redemption guide", "Mobile-optimized experience"],
    outcomes: ["Automated lead capture running 24/7", "Professional first impression before guests even visit", "A growing database of verified birthday contacts"],
    faqs: [
      { q: "How do guests receive their codes?", a: "Via email and/or SMS — whichever you prefer. We set up automated delivery so it happens instantly." },
      { q: "Can guests share codes with friends?", a: "Codes are unique and tied to individual signups. Your staff verifies at redemption." },
    ],
  },
  "customer-list-building": {
    title: "Customer List Building & Management",
    meta: "Build and manage a permission-based customer list for your restaurant",
    hero: "Your customer list is the most valuable marketing asset your restaurant can own. We build it, organize it, and keep it clean — so you can reach your guests whenever you want.",
    whoFor: ["Restaurants with no existing customer database", "Owners who want to stop relying on third-party platforms", "Multi-location operators needing centralized lists"],
    problems: ["No way to contact past guests directly", "Relying on social media algorithms to reach customers", "Customer data scattered across multiple systems"],
    included: ["List setup and segmentation", "Ongoing data hygiene and deduplication", "Integration with email/SMS platforms", "Monthly list growth tracking", "GDPR/CAN-SPAM compliance guidance"],
    outcomes: ["A growing, permission-based customer database", "Direct communication channel with past guests", "Independence from third-party platforms"],
    faqs: [
      { q: "Do I own the list?", a: "Yes, 100%. The list is yours. If we ever part ways, your data goes with you." },
      { q: "How big can the list get?", a: "That depends on your market and budget. Most restaurants add 100-500+ contacts per month." },
    ],
  },
  "monthly-remarketing": {
    title: "Monthly Remarketing Campaigns",
    meta: "Email and SMS campaigns that bring restaurant guests back at full price",
    hero: "The birthday offer gets them in the door. Monthly remarketing brings them back — at full price, with their friends, on your slow nights.",
    whoFor: ["Restaurants with an existing or growing customer list", "Owners who want predictable weekly traffic", "Anyone tired of 'post and pray' marketing"],
    problems: ["No system for following up with past guests", "Inconsistent messaging that doesn't drive action", "Slow nights with no way to fill seats on demand"],
    included: ["Monthly email campaign creation and sending", "SMS campaign management", "Seasonal and holiday promotions", "Slow-night special offers", "Open rate and conversion tracking"],
    outcomes: ["Predictable repeat visits from past guests", "Higher revenue on traditionally slow nights", "Guests returning at full price, not with discounts"],
    faqs: [
      { q: "How often will you contact our guests?", a: "Typically 2-4 times per month. We balance frequency with value — no one gets spammed." },
      { q: "What kind of offers work best?", a: "It varies, but we've seen great results with 'come back this week' incentives, seasonal menus, and VIP early access to specials." },
    ],
  },
  "offer-strategy": {
    title: "Offer Strategy & Redemption Guardrails",
    meta: "Smart birthday offer rules that protect your restaurant brand and margins",
    hero: "A free birthday entrée sounds generous — because it is. But smart guardrails prevent abuse, protect your margins, and ensure every redemption drives long-term value.",
    whoFor: ["Restaurant owners worried about offer abuse", "Operators who need clear staff guidelines", "Anyone who's been burned by coupon campaigns"],
    problems: ["Fear of attracting freeloaders", "No clear rules for staff to follow", "Past promotions that attracted deal-seekers who never returned"],
    included: ["Custom offer terms and conditions", "Redemption rules and expiration policies", "Staff training materials", "Abuse prevention protocols", "Brand-aligned messaging guidelines"],
    outcomes: ["A birthday offer that enhances your brand", "Clear rules that prevent abuse", "Staff confidence in handling redemptions"],
    faqs: [
      { q: "Can people abuse the birthday offer?", a: "Our system makes it extremely difficult. Unique codes, birthday verification, and one-per-person limits protect you." },
      { q: "Will this cheapen my brand?", a: "The opposite. A genuine birthday gift is hospitality at its finest. Guests remember and tell their friends." },
    ],
  },
  "tracking-reporting": {
    title: "Tracking & Reporting",
    meta: "Restaurant marketing analytics: redemptions, list growth, and return visits",
    hero: "No more guessing if your marketing is working. We track every signup, every redemption, and every return visit — then give you a clear monthly report.",
    whoFor: ["Data-driven restaurant operators", "Owners who want proof their investment is working", "Multi-location managers needing consolidated reporting"],
    problems: ["No visibility into marketing ROI", "Relying on gut feeling instead of data", "Can't tell which customers came from ads vs. walk-ins"],
    included: ["Monthly performance dashboard", "Signup and redemption tracking", "Return visit attribution", "List growth analytics", "Quarterly strategy review"],
    outcomes: ["Clear visibility into your marketing ROI", "Data-backed decisions about budget and strategy", "Proof that the system is working"],
    faqs: [
      { q: "How do you track return visits?", a: "Through code redemption data, email/SMS engagement, and optional POS integration." },
      { q: "What metrics do you report on?", a: "Signups, redemptions, list size, return visit rate, email open rates, and campaign performance." },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? serviceData[slug] : null;

  if (!data) {
    return (
      <Layout>
        <div className="py-32 text-center">
          <h1 className="font-display text-3xl mb-4">Service not found</h1>
          <Link to="/services" className="text-primary font-semibold">← Back to Services</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Link to="/services" className="inline-flex items-center gap-1 text-primary text-sm font-semibold mb-8 hover:underline">
            <ArrowLeft size={14} /> All Services
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl mb-6"
            style={{ color: "hsl(40, 33%, 97%)" }}
          >
            {data.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg leading-relaxed"
            style={{ color: "hsl(40, 33%, 80%)" }}
          >
            {data.hero}
          </motion.p>
        </div>
      </section>

      {/* Who / Problems / Included / Outcomes */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl space-y-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl mb-4">Who This Is For</h2>
              <ul className="space-y-3">
                {data.whoFor.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl mb-4">Problems We Solve</h2>
              <ul className="space-y-3">
                {data.problems.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground"><span className="text-accent">✗</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl mb-6">What's Included</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {data.included.map((item, i) => (
                <div key={i} className="flex gap-3 bg-card rounded-lg p-4 border border-border text-sm">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl mb-6">Expected Outcomes</h2>
            <ul className="space-y-3">
              {data.outcomes.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{item}</span></li>
              ))}
            </ul>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="font-display text-2xl mb-6">FAQs</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {data.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
                  <AccordionTrigger className="font-display text-left text-base py-5 hover:no-underline hover:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA */}
          <div className="text-center py-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg"
            >
              Click here to get more repeat customers every month
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
