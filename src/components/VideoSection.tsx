import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    title: "Podcast mbi Migjenin",
    src: "/videos/podcast.mp4",
    description: "Një bisedë e thellë mbi jetën dhe veprën e Migjenit.",
  },
  {
    title: "Dokumentar për Migjenin",
    src: "/videos/dokumentar.mp4",
    description: "Dokumentar që eksploron ndikimin e Migjenit në letërsinë shqipe.",
  },
];

const VideoSection = () => {
  return (
    <section id="video" className="py-24 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Play className="w-8 h-8 text-primary" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              Video
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Shikoni materialet video mbi jetën dhe veprën e Migjenit
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border"
            >
              <video
                controls
                className="w-full aspect-video bg-black"
                preload="metadata"
              >
                <source src={video.src} type="video/mp4" />
                Shfletuesi juaj nuk e mbështet elementin video.
              </video>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
