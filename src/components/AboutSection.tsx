import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "500M+", label: "Views generated" },
  { value: "100+", label: "Creators trusted" },
  { value: "85%", label: "Avg retention rate" },
  { value: "24h", label: "Turnaround available" },
];

const benefits = [
  {
    title: "24-hour turnaround available",
    description: "Fast delivery without compromising quality. Your content, ready when you need it.",
  },
  {
    title: "Perfectly formatted for every platform",
    description: "Every edit is optimized for TikTok, Instagram Reels, and YouTube for maximum visibility.",
  },
  {
    title: "Unlimited revisions",
    description: "I fine-tune your edit until it's 100% perfect — no extra fees, no hassle.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="benefits" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14 flex-wrap gap-4"
        >
          <div>
            <span className="section-label">Benefits</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-2xl">
              So, why <em className="italic">choose</em> me?
            </h2>
          </div>
          <span className="text-muted-foreground text-sm">(03)</span>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-soft p-6 md:p-8"
            >
              <p className="font-display text-5xl md:text-6xl text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="card-soft p-8"
            >
              <h3 className="font-display text-2xl mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
