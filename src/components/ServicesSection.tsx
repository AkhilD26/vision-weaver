import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Short-form editing",
    description: "High-impact edits crafted for TikTok, Reels, and Shorts. Designed to capture attention fast, boost retention, and drive real audience growth.",
  },
  {
    num: "02",
    title: "Brand-driven motion design",
    description: "Elevate your videos with custom graphics and animations that reflect your brand identity and keep your content looking pro.",
  },
  {
    num: "03",
    title: "Content strategy & guidance",
    description: "Plan smarter with proven strategies for hooks, pacing, and posting — so your content performs better every time.",
  },
  {
    num: "04",
    title: "Thumbnail design",
    description: "High-CTR thumbnails that stop the scroll. Combining psychology, bold typography, and visual hooks to get your content the clicks it deserves.",
  },
  {
    num: "05",
    title: "Long-form editing",
    description: "Professional edits for YouTube, podcasts, and more. From pacing to polish, making long-form content engaging from the first second to the last.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding bg-secondary/40">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14 flex-wrap gap-4"
        >
          <div>
            <span className="section-label">Services</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-2xl">
              What I can <em className="italic">do</em> for you
            </h2>
          </div>
          <span className="text-muted-foreground text-sm">(02)</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-soft p-8 md:p-10 flex gap-6 items-start hover:-translate-y-1 transition-transform"
            >
              <span className="font-display text-2xl text-muted-foreground shrink-0">{s.num}</span>
              <div>
                <h3 className="font-display text-2xl md:text-3xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
