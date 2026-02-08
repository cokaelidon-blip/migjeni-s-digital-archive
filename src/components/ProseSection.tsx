import { motion } from "framer-motion";

const ProseSection = () => {
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
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl overflow-hidden shadow-lg group"
          >
            <div className="h-48 bg-gradient-to-br from-secondary to-foreground relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl opacity-30">📖</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  NOVELË
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                Novela e Qytetit të Veriut
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Një vepër ku realiteti i ashpër i varfërisë përzihet me ëndrrat e thyera të banorëve.
              </p>
              <span className="text-sm text-muted-foreground">~45 minuta lexim</span>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl overflow-hidden shadow-lg group"
          >
            <div className="h-48 bg-gradient-to-br from-primary/80 to-primary relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl opacity-30">✉️</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 bg-card text-foreground text-xs font-semibold rounded-full">
                  LETËRKËMBIM
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                Letrat e Migjenit
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Korrespondenca personale që zbulon mendimet e thella të poetit për jetën dhe artin.
              </p>
              <span className="text-sm text-muted-foreground">32 shkronja të ruajtura</span>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default ProseSection;
