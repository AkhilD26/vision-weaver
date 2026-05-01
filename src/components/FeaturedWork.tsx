import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, Image as ImageIcon, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface VideoProject {
  id: string;
  title: string;
  views: string;
  youtubeId: string;
}

interface ThumbnailProject {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

const videoProjects: VideoProject[] = [
  { id: "1", title: "Cinematic Short", views: "1.1M", youtubeId: "-TVt1tFf8eg" },
  { id: "2", title: "Dynamic Edit", views: "2.3M", youtubeId: "weO4MTp3tRg" },
  { id: "3", title: "Motion Flow", views: "980K", youtubeId: "oH-b-MrvZRk" },
  { id: "4", title: "Visual Impact", views: "3.2M", youtubeId: "zxzHVhdCqoE" },
  { id: "5", title: "Brand Spotlight", views: "540K", youtubeId: "cgB6xDI9Ayk" },
  { id: "6", title: "Promo Reel", views: "1.8M", youtubeId: "wNDwb00WJcY" },
  { id: "7", title: "Product Launch", views: "720K", youtubeId: "lYoUh-920og" },
  { id: "8", title: "Engaging Short", views: "2.1M", youtubeId: "TBfMM3W2RCs" },
];

const thumbnailProjects: ThumbnailProject[] = [
  { 
    id: "t1", 
    title: "Disney's Secret Conspiracy", 
    category: "Documentary", 
    imageUrl: "/thumbnails/Disney Conspiracy.jpg" 
  },
  { 
    id: "t2", 
    title: "Gen V: The Boys Spinoff Review", 
    category: "Entertainment", 
    imageUrl: "/thumbnails/Gen V.jpg" 
  },
  { 
    id: "t3", 
    title: "Karate Kid Legends: The Return", 
    category: "Movies", 
    imageUrl: "/thumbnails/Karate Kid Legends-1.jpg" 
  },
  { 
    id: "t4", 
    title: "The Truth About Side Characters", 
    category: "Analysis", 
    imageUrl: "/thumbnails/Side character Truth 3-1.jpg" 
  },
  { 
    id: "t5", 
    title: "Spicy Wing Challenge", 
    category: "Vlog", 
    imageUrl: "/thumbnails/Spicy wing.jpg" 
  },
  { 
    id: "t6", 
    title: "Valorant: Professional Guide", 
    category: "Gaming", 
    imageUrl: "/thumbnails/valorant 2-1.jpg" 
  },
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

const ThumbnailCard = ({ project, index }: { project: ThumbnailProject; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative shrink-0 w-[320px] md:w-[400px] aspect-video rounded-2xl overflow-hidden group cursor-pointer bg-muted"
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <ExternalLink className="w-5 h-5" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
        <span className="text-[10px] uppercase tracking-wider text-white/60 mb-1 block">{project.category}</span>
        <p className="text-white font-medium line-clamp-1">{project.title}</p>
      </div>
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
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8"
        >
          <div>
            <span className="section-label">Portfolio</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-2xl">
              Results that <em className="italic">demand</em> attention
            </h2>
          </div>
          
          <Tabs defaultValue="videos" className="w-full md:w-auto">
            <TabsList className="grid w-full grid-cols-2 md:w-[300px]">
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Play className="w-3.5 h-3.5" />
                Videos
              </TabsTrigger>
              <TabsTrigger value="thumbnails" className="flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                Thumbnails
              </TabsTrigger>
            </TabsList>
            
            <div className="mt-12 absolute left-0 w-full overflow-hidden">
              <TabsContent value="videos" className="m-0">
                <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 px-4 md:px-8 snap-x snap-mandatory scrollbar-hide">
                  {videoProjects.map((p, i) => (
                    <div key={p.id} className="snap-start">
                      <VideoCard project={p} index={i} />
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="thumbnails" className="m-0">
                <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 px-4 md:px-8 snap-x snap-mandatory scrollbar-hide">
                  {thumbnailProjects.map((p, i) => (
                    <div key={p.id} className="snap-start">
                      <ThumbnailCard project={p} index={i} />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
          
          <span className="text-muted-foreground text-sm hidden md:block">(01)</span>
        </motion.div>
      </div>

      <div className="h-[500px] md:h-[600px]" /> {/* Spacer for absolute positioned content */}

      <p className="text-center text-muted-foreground text-sm mt-8">
        Content engineered for maximum engagement and high CTR
      </p>
    </section>
  );
};

export default FeaturedWork;
