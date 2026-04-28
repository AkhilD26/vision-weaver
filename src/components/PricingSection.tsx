import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "₹1,000",
    unit: "/video",
    features: ["Up to 2 revisions", "Graphics included", "Thumbnail assistance", "Delivery in 3 days"],
    popular: false,
  },
  {
    name: "Standard",
    price: "₹2,500",
    unit: "/video",
    features: ["Up to 5 revisions", "Advanced graphics & effects", "Custom thumbnail", "Delivery in 2 days", "Color grading"],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹5,000",
    unit: "/video",
    features: ["Unlimited revisions", "Motion graphics & VFX", "Premium thumbnail", "Priority delivery", "Color grading", "Sound design"],
    popular: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="section-padding bg-secondary/40">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14 flex-wrap gap-4"
        >
          <div>
            <span className="section-label">Pricing</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-2xl">
              Pick your <em className="italic">plan</em>
            </h2>
          </div>
          <span className="text-muted-foreground text-sm">(06)</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-8 relative border ${
                plan.popular
                  ? "bg-foreground text-background border-foreground"
                  : "bg-card border-border text-foreground"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-3xl mb-2">{plan.name}</h3>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="font-display text-5xl">{plan.price}</span>
                <span className={`text-sm ${plan.popular ? "opacity-60" : "text-muted-foreground"}`}>
                  {plan.unit}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 rounded-full pl-5 pr-1 py-1 w-full justify-between text-sm font-medium transition-opacity hover:opacity-90 ${
                  plan.popular ? "bg-background text-foreground" : "bg-foreground text-background"
                }`}
              >
                Get started
                <span className={`w-9 h-9 rounded-full flex items-center justify-center ${plan.popular ? "bg-foreground text-background" : "bg-background text-foreground"}`}>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
