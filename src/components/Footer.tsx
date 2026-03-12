import { Link } from "react-router-dom";

const services = [
  { label: "Local Facebook Ads", path: "/services/local-facebook-ads" },
  { label: "Birthday Offer Funnel", path: "/services/birthday-offer-funnel" },
  { label: "Customer List Building", path: "/services/customer-list-building" },
  { label: "Monthly Remarketing", path: "/services/monthly-remarketing" },
  { label: "Offer Strategy", path: "/services/offer-strategy" },
  { label: "Tracking & Reporting", path: "/services/tracking-reporting" },
];

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-xl text-primary mb-4">The Birthday Club</h3>
          <p className="text-sm text-secondary-foreground/70 leading-relaxed">
            We help restaurant owners build a growing list of repeat customers using a Birthday Free Entrée offer and monthly follow-up campaigns.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Pages</h4>
          <nav className="flex flex-col gap-2">
            <Link to="/" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Home</Link>
            <Link to="/services" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Services</Link>
            <Link to="/about" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">About Us</Link>
            <Link to="/contact" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Contact</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Services</h4>
          <nav className="flex flex-col gap-2">
            {services.map((s) => (
              <Link key={s.path} to={s.path} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                {s.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Get Started</h4>
          <p className="text-sm text-secondary-foreground/70 mb-4">Ready to fill your restaurant with repeat customers?</p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            Book a Free Strategy Call
          </Link>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center text-sm text-secondary-foreground/50">
        © {new Date().getFullYear()} BirthdayListPro. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
