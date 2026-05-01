import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Image as ImageIcon, ExternalLink, ZoomIn } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";

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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden group cursor-pointer bg-muted card-soft shadow-sm hover:shadow-md transition-shadow"
        >
          <img
            src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
            }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow-xl">
              <Play className="w-6 h-6 ml-1" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white/80 text-sm font-medium mb-1 tracking-wide">{project.views} Views</p>
            <h3 className="text-white font-display text-2xl md:text-3xl leading-tight">{project.title}</h3>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-[95vw] p-0 overflow-hidden bg-black border-none rounded-xl">
        <DialogTitle className="sr-only">{project.title}</DialogTitle>
        <DialogDescription className="sr-only">Video edit showcase for {project.title}</DialogDescription>
        <div className="aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1`}
            className="w-full h-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            title={project.title}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ThumbnailCard = ({ project, index }: { project: ThumbnailProject; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden group cursor-pointer bg-muted card-soft shadow-sm hover:shadow-md transition-shadow"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 flex items-center justify-center scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
              <ZoomIn className="w-6 h-6" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold mb-1 block">{project.category}</span>
            <p className="text-white font-medium line-clamp-1 text-lg">{project.title}</p>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-w-6xl w-[95vw] p-2 bg-black border-white/10 rounded-xl overflow-hidden">
        <DialogTitle className="sr-only">{project.title}</DialogTitle>
        <DialogDescription className="sr-only">Thumbnail design for {project.title}</DialogDescription>
        <div className="relative w-full aspect-video rounded-lg overflow-hidden flex items-center justify-center bg-black">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="max-w-full max-h-[85vh] object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

const FeaturedWork = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="work" className="section-padding bg-background relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <span className="section-label">Portfolio</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-2xl">
              Results that <em className="italic text-primary">demand</em> attention
            </h2>
          </div>
          <span className="text-muted-foreground text-sm hidden md:block">(01)</span>
        </motion.div>
        
        <Tabs defaultValue="videos" className="w-full">
          <div className="flex justify-center md:justify-start mb-10">
            <TabsList className="grid w-full grid-cols-2 md:w-[320px] h-14 rounded-full bg-secondary/50 p-1 border border-border">
              <TabsTrigger value="videos" className="flex items-center gap-2 rounded-full h-full data-[state=active]:bg-card data-[state=active]:shadow-sm data-[state=active]:text-foreground transition-all text-base">
                <Play className="w-4 h-4" />
                Videos
              </TabsTrigger>
              <TabsTrigger value="thumbnails" className="flex items-center gap-2 rounded-full h-full data-[state=active]:bg-card data-[state=active]:shadow-sm data-[state=active]:text-foreground transition-all text-base">
                <ImageIcon className="w-4 h-4" />
                Thumbnails
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="videos" className="m-0 outline-none animate-in fade-in-50 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {videoProjects.map((p, i) => (
                <VideoCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="thumbnails" className="m-0 outline-none animate-in fade-in-50 duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {thumbnailProjects.map((p, i) => (
                <ThumbnailCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 flex flex-col items-center justify-center gap-6"
        >
          <p className="text-center text-muted-foreground text-base max-w-md">
            Content engineered for maximum engagement and high CTR
          </p>
          <a href="#contact" className="btn-primary">
            Start a project <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;
