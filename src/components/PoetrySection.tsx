import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { poems, Poem } from "@/data/poems";

interface PoetrySectionProps {
  onPoemSelect: (poem: Poem) => void;
}

const colorClasses = [
  "from-amber-100 to-amber-200",
  "from-stone-100 to-stone-200",
  "from-red-100 to-red-200",
  "from-violet-100 to-violet-200",
  "from-blue-100 to-blue-200",
  "from-orange-100 to-orange-200",
];

const PoetrySection = ({ onPoemSelect }: PoetrySectionProps) => {
  return (
    <section id="poezi" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Arkiva Letrare
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-foreground font-bold mt-4 gold-underline inline-block">
            Poezitë
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Vargjet e Lira ndryshuan rrjedhën e letërsisë shqipe dhe sollën frymën e modernizmit në poezinë tonë.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {poems.map((poem, i) => (
            <motion.article
              key={poem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => onPoemSelect(poem)}
              className="group bg-card rounded-2xl p-8 shadow-md hover:shadow-xl cursor-pointer transition-all duration-400 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[i % colorClasses.length]} flex items-center justify-center`}>
                  <span className="text-2xl">{poem.emoji}</span>
                </div>
                <span className="text-xs text-muted-foreground font-medium">{poem.year}</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {poem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                "{poem.excerpt}"
              </p>
              {poem.author && (
                <p className="text-xs text-primary/70 font-medium mb-3">nga {poem.author}</p>
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

export default PoetrySection;
