import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen } from "lucide-react";
import { Poem } from "@/data/poems";

interface PoemModalProps {
  poem: Poem | null;
  onClose: () => void;
}

const PoemModal = ({ poem, onClose }: PoemModalProps) => {
  return (
    <AnimatePresence>
      {poem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="bg-card rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{poem.emoji}</span>
                <div>
                  <h2 className="font-playfair text-2xl font-bold text-foreground">{poem.title}</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{poem.year}</span>
                    {poem.author && (
                      <span className="text-sm text-primary font-medium">• {poem.author}</span>
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(85vh-88px)]">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                {/* Poem Text */}
                <div className="p-8">
                  <div className="flex items-center gap-2 text-primary mb-4">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-sm font-medium uppercase tracking-widest">
                      {poem.type === "proze" ? "Proza" : "Poezia"}
                    </span>
                  </div>
                  <div className="font-playfair text-foreground text-lg leading-relaxed italic whitespace-pre-line">
                    {poem.text}
                  </div>
                </div>

                {/* Analysis */}
                <div className="p-8 bg-muted/30">
                  <div className="flex items-center gap-2 text-primary mb-4">
                    <span className="text-sm font-medium uppercase tracking-widest">📝 Analiza</span>
                  </div>
                  <div className="text-foreground text-sm leading-relaxed space-y-3 prose-sm">
                    {poem.analysis.split("\n\n").map((paragraph, i) => (
                      <div key={i}>
                        {paragraph.split("\n").map((line, j) => {
                          const formatted = line
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            .replace(/\*(.*?)\*/g, '<em>$1</em>');
                          return (
                            <p
                              key={j}
                              className="mb-1"
                              dangerouslySetInnerHTML={{ __html: formatted }}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PoemModal;
