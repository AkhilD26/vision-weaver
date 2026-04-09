import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Upload, Wand2, MessageSquare, CheckCircle } from "lucide-react";

const steps = [
  { icon: Upload, title: "Send Footage", description: "Share your raw footage, references, and brief with me." },
  { icon: Wand2, title: "Editing & Graphics", description: "I craft your vision with professional editing and effects." },
  { icon: MessageSquare, title: "Revisions", description: "Review the draft and request changes until it's perfect." },
  { icon: CheckCircle, title: "Final Delivery", description: "Receive your polished video ready to publish." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A simple, streamlined process from start to finish
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-5 neon-glow relative z-10">
                <step.icon className="text-primary-foreground w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-primary mb-2 block">STEP {i + 1}</span>
              <h3 className="font-display font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
