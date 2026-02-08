import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { poems, Poem } from "@/data/poems";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPoemSelect: (poem: Poem) => void;
}

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

  const filtered = poems.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.text.toLowerCase().includes(query.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(query.toLowerCase())
  );

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
                placeholder="Kërko poezi... (p.sh. 'mjerimi', 'rini', 'blasfemia')"
                className="flex-1 bg-transparent text-foreground text-lg outline-none placeholder:text-muted-foreground"
              />
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[50vh] overflow-y-auto p-4 space-y-2">
              {query.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  Shkruaj emrin e një poezie për të parë analizën...
                </p>
              ) : filtered.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  Nuk u gjet asnjë poezi me "{query}"
                </p>
              ) : (
                filtered.map((poem) => (
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
                      </div>
                    </div>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
