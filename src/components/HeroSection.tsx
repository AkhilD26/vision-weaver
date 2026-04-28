import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 px-4 md:px-8 overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <span className="pill">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-available animate-pulseDot" />
              <span className="relative rounded-full w-2 h-2 bg-available" />
            </span>
            Available for work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.95] tracking-tight max-w-6xl mx-auto text-foreground"
        >
          Short-Form video{" "}
          <span className="inline-flex items-center gap-1 align-middle mx-1">
            <SocialIcon type="tiktok" />
            <SocialIcon type="instagram" />
            <SocialIcon type="youtube" />
          </span>{" "}
          editing that <em className="italic">skyrockets</em> your views
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mt-8"
        >
          Stand out in the fast-paced world of short-form content. I create high-energy, engaging edits that keep viewers hooked and help you grow your audience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10"
        >
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-6 pr-2 py-2 text-base font-medium hover:opacity-90 transition-opacity">
            Work with me
            <span className="w-10 h-10 rounded-full bg-primary-foreground text-primary flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </a>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-muted to-secondary" />
              ))}
            </div>
            <div className="text-left">
              <div className="flex gap-0.5 text-foreground">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-foreground" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Trusted by 40+ clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialIcon = ({ type }: { type: "tiktok" | "instagram" | "youtube" }) => {
  const base = "inline-flex w-14 h-14 md:w-20 md:h-20 rounded-2xl items-center justify-center shadow-lg";
  if (type === "tiktok")
    return (
      <span className={`${base} bg-foreground`}>
        <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-10 md:h-10 fill-background">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.1z" />
        </svg>
      </span>
    );
  if (type === "instagram")
    return (
      <span className={`${base}`} style={{ background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
        <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-10 md:h-10 fill-white">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      </span>
    );
  return (
    <span className={`${base} bg-[#FF0000]`}>
      <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-10 md:h-10 fill-white">
        <path d="M10 15l5.19-3L10 9v6zm11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
      </svg>
    </span>
  );
};

export default HeroSection;
