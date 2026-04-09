import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Film, Zap, Sparkles } from "lucide-react";

const stats = [
  { icon: Film, value: "100+", label: "Videos Edited" },
  { icon: Zap, value: "2 Days", label: "Fast Delivery" },
  { icon: Sparkles, value: "Premium", label: "High Graphics Edits" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Hey! I'm the creative force behind <span className="text-foreground font-semibold">ProDAC Media</span>. I help creators and brands grow with high-retention, visually engaging videos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Specializing in YouTube content, Instagram Reels, and advertising spots — I bring cinematic quality to every project. From color grading to motion graphics, every frame is crafted to captivate your audience.
            </p>
            <a
              href="#contact"
              className="gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold inline-block neon-glow hover:opacity-90 transition-opacity"
            >
              Let's Work Together
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="glass rounded-xl p-6 flex items-center gap-5 hover-scale"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shrink-0 neon-glow">
                  <stat.icon className="text-primary-foreground w-6 h-6" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
