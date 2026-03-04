import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { proseList, Poem } from "@/data/poems";

interface ProseSectionProps {
  onPoemSelect: (poem: Poem) => void;
}

const colorClasses = [
  "from-rose-100 to-rose-200",
  "from-emerald-100 to-emerald-200",
  "from-sky-100 to-sky-200",
  "from-amber-100 to-amber-200",
];

const ProseSection = ({ onPoemSelect }: ProseSectionProps) => {
  return (
    <section id="proza" className="py-24 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Novelat & Tregimet
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-foreground font-bold mt-4">
            Proza
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Tregimet dhe novelat e Migjenit pasqyrojnë realitetin e hidhur të shoqërisë shqiptare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proseList.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => onPoemSelect(item)}
              className="group bg-card rounded-2xl p-8 shadow-md hover:shadow-xl cursor-pointer transition-all duration-400 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[i % colorClasses.length]} flex items-center justify-center`}>
                  <span className="text-2xl">{item.emoji}</span>
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  PROZË
                </span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                "{item.excerpt}"
              </p>
              {item.author && (
                <p className="text-xs text-primary/70 font-medium mb-3">nga {item.author}</p>
              )}
              <div className="flex items-center text-primary text-sm font-medium">
                <span>Lexo & Analizo</span>
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProseSection;
