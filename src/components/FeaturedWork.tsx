import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

type Category = "All" | "Reels" | "YouTube" | "Ads";

interface VideoProject {
  id: string;
  title: string;
  category: Category;
  youtubeId: string;
}

// UPDATE THESE with your actual YouTube video IDs
const projects: VideoProject[] = [
  { id: "1", title: "Cinematic Short — Visual Story", category: "Reels", youtubeId: "-TVt1tFf8eg" },
  { id: "2", title: "Trending Reel — Dynamic Edit", category: "Reels", youtubeId: "weO4MTp3tRg" },
  { id: "3", title: "Creative Reel — Motion Flow", category: "Reels", youtubeId: "oH-b-MrvZRk" },
  { id: "4", title: "Short Film — Visual Impact", category: "Reels", youtubeId: "zxzHVhdCqoE" },
  { id: "5", title: "Ad Edit — Brand Spotlight", category: "Ads", youtubeId: "cgB6xDI9Ayk" },
  { id: "6", title: "Promo Reel — Fast Cuts", category: "Reels", youtubeId: "wNDwb00WJcY" },
  { id: "7", title: "Creative Ad — Product Launch", category: "Ads", youtubeId: "lYoUh-920og" },
  { id: "8", title: "YouTube Short — Engaging Edit", category: "YouTube", youtubeId: "TBfMM3W2RCs" },
];

const categories: Category[] = ["All", "Reels", "YouTube", "Ads"];

const VideoCard = ({ project, index }: { project: VideoProject; index: number }) => {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl overflow-hidden glass"
    >
      <div className="aspect-[9/16] max-h-[480px] relative mx-auto">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1`}
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={project.title}
          />
        ) : (
          <div
            className="w-full h-full cursor-pointer relative"
            onClick={() => setPlaying(true)}
          >
            <img
              src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-background/40 group-hover:bg-background/60 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center neon-glow group-hover:scale-110 transition-transform">
                <Play className="text-primary-foreground w-7 h-7 ml-1" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">
          {project.category}
        </span>
        <h3 className="font-display font-semibold text-foreground mt-1">{project.title}</h3>
      </div>
    </motion.div>
  );
};

const FeaturedWork = () => {
  const [active, setActive] = useState<Category>("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A curated selection of my best video editing projects
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                active === cat
                  ? "gradient-primary text-primary-foreground neon-glow"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <VideoCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
