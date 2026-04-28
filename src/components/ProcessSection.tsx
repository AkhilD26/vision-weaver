import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { num: "01", title: "Brief", description: "Share your vision, footage, and goals. I'll align on style and deliverables." },
  { num: "02", title: "Edit", description: "I craft the edit with cuts, motion, color, and sound tuned for your platform." },
  { num: "03", title: "Refine", description: "Unlimited revisions until it's perfect. Fast turnarounds, always." },
  { num: "04", title: "Deliver", description: "Export-ready files, optimized for every aspect ratio you need." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-secondary/40">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14 flex-wrap gap-4"
        >
          <div>
            <span className="section-label">Process</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-2xl">
              How we <em className="italic">work</em> together
            </h2>
          </div>
          <span className="text-muted-foreground text-sm">(04)</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-soft p-6"
            >
              <span className="font-display text-2xl text-primary">{step.num}</span>
              <h3 className="font-display text-2xl mt-4 mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
