import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

interface VideoProject {
  id: string;
  title: string;
  views: string;
  youtubeId: string;
}

const projects: VideoProject[] = [
  { id: "1", title: "Cinematic Short", views: "1.1M", youtubeId: "-TVt1tFf8eg" },
  { id: "2", title: "Dynamic Edit", views: "2.3M", youtubeId: "weO4MTp3tRg" },
  { id: "3", title: "Motion Flow", views: "980K", youtubeId: "oH-b-MrvZRk" },
  { id: "4", title: "Visual Impact", views: "3.2M", youtubeId: "zxzHVhdCqoE" },
  { id: "5", title: "Brand Spotlight", views: "540K", youtubeId: "cgB6xDI9Ayk" },
  { id: "6", title: "Promo Reel", views: "1.8M", youtubeId: "wNDwb00WJcY" },
  { id: "7", title: "Product Launch", views: "720K", youtubeId: "lYoUh-920og" },
  { id: "8", title: "Engaging Short", views: "2.1M", youtubeId: "TBfMM3W2RCs" },
];

const VideoCard = ({ project, index }: { project: VideoProject; index: number }) => {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative shrink-0 w-[280px] md:w-[320px] aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer bg-muted"
      onClick={() => !playing && setPlaying(true)}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1`}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={project.title}
        />
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <div className="text-white">
              <p className="font-display text-3xl leading-none">{project.views}</p>
              <p className="text-xs opacity-80 mt-1">{project.title}</p>
            </div>
            <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center">
              <Play className="w-4 h-4 ml-0.5 fill-black" />
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

const FeaturedWork = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="work" className="py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12 flex-wrap gap-4"
        >
          <div>
            <span className="section-label">Highlighted edits</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-2xl">
              Edits that <em className="italic">move</em> numbers
            </h2>
          </div>
          <span className="text-muted-foreground text-sm">(01)</span>
        </motion.div>
      </div>

      <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 px-4 md:px-8 snap-x snap-mandatory scrollbar-hide">
        {projects.map((p, i) => (
          <div key={p.id} className="snap-start">
            <VideoCard project={p} index={i} />
          </div>
        ))}
      </div>

      <p className="text-center text-muted-foreground text-sm mt-8">
        Editing that grows brand audiences
      </p>
    </section>
  );
};

export default FeaturedWork;
