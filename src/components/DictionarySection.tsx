import { motion } from "framer-motion";

const entries = [
  {
    word: "DHIMBJA",
    definition: "Gjendje e thellë vuajtjeje fizike dhe shpirtërore; ndjenjë e rëndë që lind nga padrejtësia.",
    meaning: "Dhimbja është universale dhe kolektive. Ajo nuk është vetëm personale, por dhimbje e një shoqërie të tërë që vuan në heshtje.",
    quote: "Të lutem, pak dritë në kët natë kur shpirti vuen, kur të dhemb e s'di g'të dhemb, e syni gjum nuk ka…",
    image: "/images/fjalori/dhimbja.jpg",
  },
  {
    word: "VARFËRIA",
    definition: "Gjendje mungese e mjeteve jetike; pamundësi për të përmbushur nevojat themelore të jetesës.",
    meaning: "Varfëria paraqitet si plagë sociale që shkatërron fëmijërinë, dinjitetin dhe shpresën.",
    quote: "Nga mshira e pamshirve lypsi i vogël gjallonte…",
    image: "/images/fjalori/varferia.jpg",
  },
  {
    word: "REVOLTA",
    definition: "Kundërshtim i fortë ndaj padrejtësisë; shpërthim zemërimi kundër një rendi shtypës.",
    meaning: "Revolta është thirrje për ndryshim. Ajo drejtohet kundër hipokrizisë, padrejtësisë sociale dhe heshtjes së imponuar.",
    quote: "O, si nuk kam një grusht të fuqishëm malin që hesht, mu në zemër me ja ngjesh!",
    image: "/images/fjalori/revolta.jpg",
  },
  {
    word: "FËMIJËRIA E VRARË",
    definition: "Humbja e pafajësisë dhe e gëzimit të moshës së hershme për shkak të varfërisë dhe padrejtësisë.",
    meaning: "Fëmijët në poezinë e tij nuk jetojnë fëmijërinë, por mjerimin. Ata janë viktima të realitetit social.",
    quote: "Mjerimi pjek fëmin para se të burrnohet; don ta msojë t'i iki grushtit q'i kercnohet,",
    image: "/images/fjalori/femijeria.jpg",
  },
  {
    word: "BRITMA",
    definition: "Thirrje e fortë që shpreh dhimbje, frikë ose revoltë.",
    meaning: "Poezia e tij është një britmë kolektive kundër heshtjes dhe padrejtësisë.",
    quote: "O njerz, të bimë nga far' e ambël! Frigë mos keni…!",
    image: "/images/fjalori/britma.jpg",
  },
  {
    word: "HESHTJA",
    definition: "Mungesë zëri ose reagimi.",
    meaning: "Heshtja e shoqërisë është bashkëfajtore në padrejtësi. Ai kërkon thyerjen e saj.",
    quote: "Mali hesht… e unë due ta zgjoj!",
    image: "/images/fjalori/heshtja.jpg",
  },
];

const DictionarySection = () => {
  return (
    <section id="fjalori" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fjalori Migjenian i Dhimbjes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fjalët kyçe që përkufizojnë universin poetik të Migjenit
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map((entry, index) => (
            <motion.div
              key={entry.word}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={entry.image}
                  alt={entry.word}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
                  {entry.word}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-semibold text-foreground/70">Përkufizim:</span>{" "}
                  {entry.definition}
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-semibold text-foreground/70">Te Migjeni:</span>{" "}
                  {entry.meaning}
                </p>
                <blockquote className="text-sm italic text-primary/80 border-l-2 border-primary/30 pl-3">
                  "{entry.quote}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DictionarySection;
