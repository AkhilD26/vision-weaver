import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

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
    <section id="pricing" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Transparent pricing with no hidden fees
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`rounded-xl p-6 relative ${
                plan.popular
                  ? "gradient-primary text-primary-foreground neon-glow"
                  : "glass"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background text-primary text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-display text-lg font-semibold mb-1">{plan.name}</h3>
              <div className="mb-5">
                <span className="font-display text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.unit}
                </span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? "bg-background text-foreground hover:bg-secondary"
                    : "gradient-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
