import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { poems, Poem } from "@/data/poems";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPoemSelect: (poem: Poem) => void;
}

// Sections that can be navigated to
const sections = [
  { id: "kreu", label: "Kreu", emoji: "🏠", description: "Faqja kryesore" },
  { id: "poezi", label: "Poezitë", emoji: "📜", description: "Koleksioni i poezive të Migjenit" },
  { id: "proza", label: "Proza", emoji: "📖", description: "Novelat dhe tregimet e Migjenit" },
  { id: "biografia", label: "Rreth Migjenit", emoji: "👤", description: "Biografia dhe jeta e Migjenit" },
  { id: "video", label: "Video", emoji: "🎬", description: "Podcast dhe dokumentar mbi Migjenin" },
  { id: "galeri", label: "Galeria QR", emoji: "📷", description: "Galeria e pikturave me kode QR" },
  { id: "revista", label: "Revista", emoji: "📰", description: "Krahasime, letra, quiz dhe intervistë" },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const SearchModal = ({ isOpen, onClose, onPoemSelect }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const q = query.toLowerCase();

  const filteredPoems = query.length > 0
    ? poems.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.text.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          (p.author && p.author.toLowerCase().includes(q))
      )
    : [];

  const filteredSections = query.length > 0
    ? sections.filter(
        (s) =>
          s.label.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q)
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-foreground/80 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            className="bg-card rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 p-6 border-b border-border">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Kërko poezi, prozë, seksione... (p.sh. 'mjerimi', 'video', 'quiz')"
                className="flex-1 bg-transparent text-foreground text-lg outline-none placeholder:text-muted-foreground"
              />
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[50vh] overflow-y-auto p-4 space-y-2">
              {query.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  Shkruaj diçka për të kërkuar në faqe...
                </p>
              ) : filteredSections.length === 0 && filteredPoems.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  Nuk u gjet asgjë me "{query}"
                </p>
              ) : (
                <>
                  {/* Sections */}
                  {filteredSections.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium px-2 mb-2">Seksione</p>
                      {filteredSections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => {
                            scrollTo(section.id);
                            onClose();
                          }}
                          className="w-full text-left p-4 rounded-xl hover:bg-muted transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{section.emoji}</span>
                            <div>
                              <h4 className="font-playfair font-semibold text-foreground group-hover:text-primary transition-colors">
                                {section.label}
                              </h4>
                              <p className="text-sm text-muted-foreground">{section.description}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Poems & Prose */}
                  {filteredPoems.length > 0 && (
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium px-2 mb-2">Poezi & Prozë</p>
                      {filteredPoems.map((poem) => (
                        <button
                          key={poem.id}
                          onClick={() => {
                            onPoemSelect(poem);
                            onClose();
                          }}
                          className="w-full text-left p-4 rounded-xl hover:bg-muted transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{poem.emoji}</span>
                            <div>
                              <h4 className="font-playfair font-semibold text-foreground group-hover:text-primary transition-colors">
                                {poem.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">{poem.excerpt}</p>
                              <div className="flex gap-2 mt-1">
                                <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                                  {poem.type === "poezi" ? "Poezi" : "Prozë"}
                                </span>
                                {poem.author && (
                                  <span className="text-xs text-muted-foreground">nga {poem.author}</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
