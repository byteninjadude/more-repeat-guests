import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const ProofSection = () => {
  const [spend, setSpend] = useState(35);
  const [party, setParty] = useState(4);
  const [visits, setVisits] = useState(30);

  const entreeCost = 10;
  const serviceCost = 497;
  const adSpend = 300;
  const investment = serviceCost + adSpend;

  const revenue = visits * party * spend;
  const totalEntreeCost = visits * entreeCost;
  const netProfit = revenue - totalEntreeCost - investment;
  const annualRevenue = revenue * 12;
  const roi = (revenue / investment).toFixed(1);

  const fmt = (n: number) => "$" + Math.round(Math.abs(n)).toLocaleString("en-US");

  const pct = (val: number, min: number, max: number) =>
    ((val - min) / (max - min)) * 100;

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-4"
        >
          See What The Birthday Club Could Do for Your Restaurant
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto"
        >
          Drag the sliders to match your restaurant. Watch the math work in your favor.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Sliders Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10 justify-center"
          >
            {/* Slider 1 */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-sm font-semibold text-foreground">Average Spend Per Guest</span>
                <span className="text-xl font-bold text-primary font-display">${spend}</span>
              </div>
              <input
                type="range"
                min={20}
                max={80}
                step={5}
                value={spend}
                onChange={(e) => setSpend(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-primary"
                style={{
                  background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${pct(spend, 20, 80)}%, hsl(var(--border)) ${pct(spend, 20, 80)}%, hsl(var(--border)) 100%)`,
                }}
              />
            </div>

            {/* Slider 2 */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-sm font-semibold text-foreground">Average Birthday Party Size</span>
                <span className="text-xl font-bold text-primary font-display">{party} guests</span>
              </div>
              <input
                type="range"
                min={2}
                max={8}
                step={1}
                value={party}
                onChange={(e) => setParty(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-primary"
                style={{
                  background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${pct(party, 2, 8)}%, hsl(var(--border)) ${pct(party, 2, 8)}%, hsl(var(--border)) 100%)`,
                }}
              />
            </div>

            {/* Slider 3 */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-sm font-semibold text-foreground">Expected Birthday Visits Per Month</span>
                <span className="text-xl font-bold text-primary font-display">{visits} visits</span>
              </div>
              <input
                type="range"
                min={10}
                max={80}
                step={5}
                value={visits}
                onChange={(e) => setVisits(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-primary"
                style={{
                  background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${pct(visits, 10, 80)}%, hsl(var(--border)) ${pct(visits, 10, 80)}%, hsl(var(--border)) 100%)`,
                }}
              />
              <p className="text-xs text-muted-foreground mt-2">
                Most restaurants on our system see 25-50 birthday visits per month
              </p>
            </div>
          </motion.div>

          {/* Results Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-xl p-8 md:p-10"
          >
            <div className="space-y-5">
              {/* Revenue */}
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-secondary-foreground">Monthly Revenue from Birthday Tables</span>
                <span className="text-2xl md:text-3xl font-bold text-primary font-display">{fmt(revenue)}</span>
              </div>

              {/* Entree cost */}
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-secondary-foreground/60">Cost of Free Birthday Entrees</span>
                <span className="text-base text-secondary-foreground/60">- {fmt(totalEntreeCost)}</span>
              </div>

              {/* Investment */}
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-secondary-foreground/60">Your Monthly Investment (${serviceCost} service + ${adSpend} ads)</span>
                <span className="text-base text-secondary-foreground/60">- {fmt(investment)}</span>
              </div>

              <div className="border-t border-secondary-foreground/10 my-2" />

              {/* Net profit */}
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-semibold text-secondary-foreground">Your Net Monthly Profit</span>
                <span className={`text-2xl md:text-3xl font-bold font-display ${netProfit >= 0 ? "text-primary" : "text-red-400"}`}>
                  {netProfit >= 0 ? fmt(netProfit) : `-${fmt(netProfit)}`}/mo
                </span>
              </div>

              {/* Stat boxes */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-secondary-foreground/5 rounded-lg p-4 text-center">
                  <p className="text-xl md:text-2xl font-bold text-primary font-display">{fmt(annualRevenue)}</p>
                  <p className="text-xs text-secondary-foreground/50 mt-1">Annual Revenue</p>
                </div>
                <div className="bg-secondary-foreground/5 rounded-lg p-4 text-center">
                  <p className="text-xl md:text-2xl font-bold text-primary font-display">{roi}x</p>
                  <p className="text-xs text-secondary-foreground/50 mt-1">Return on Investment</p>
                </div>
              </div>

              {/* Warning for negative */}
              {netProfit < 0 && (
                <p className="text-xs text-red-400 text-center mt-4 leading-relaxed">
                  At this volume, we'd recommend a lighter launch to build momentum before scaling.
                </p>
              )}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get These Results for Your Restaurant
            <ArrowRight size={20} />
          </a>
          <p className="text-xs text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
            Estimates based on average performance. Actual results vary by location, offer, and market. Ad spend is paid separately to Facebook and is not included in service pricing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofSection;
