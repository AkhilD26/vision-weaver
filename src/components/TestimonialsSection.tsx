import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Ravi K.", role: "Content Creator", quote: "Akhil's edits hit different. Our retention jumped 40% on every short he touched." },
  { name: "Priya S.", role: "Brand Manager", quote: "Fast, reliable, and ridiculously creative. He just gets what works on Reels." },
  { name: "Arjun M.", role: "YouTuber", quote: "Hands down the best freelance editor I've worked with. Viral-grade work, every time." },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14 flex-wrap gap-4"
        >
          <div>
            <span className="section-label">Testimonials</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-2xl">
              What clients <em className="italic">say</em>
            </h2>
          </div>
          <span className="text-muted-foreground text-sm">(05)</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card-soft p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-foreground text-lg leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-medium text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
