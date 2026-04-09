import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Video, Clapperboard, Image, Wand2 } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "YouTube Video Editing",
    description: "Professional cuts, transitions, color grading, and sound design to keep viewers hooked.",
  },
  {
    icon: Clapperboard,
    title: "Instagram Reels Editing",
    description: "Snappy, scroll-stopping edits optimized for engagement and virality.",
  },
  {
    icon: Image,
    title: "Thumbnail Design",
    description: "Click-worthy thumbnails that boost CTR and drive views to your content.",
  },
  {
    icon: Wand2,
    title: "Motion Graphics",
    description: "Eye-catching animations, intros, and visual effects that elevate your brand.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Everything you need to make your content stand out
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass rounded-xl p-6 text-center group hover-scale cursor-default"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-5 group-hover:neon-glow transition-shadow">
                <service.icon className="text-primary-foreground w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
