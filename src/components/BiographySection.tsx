import { motion } from "framer-motion";

const BiographySection = () => {
  const events = [
    { year: "1911", text: "Lindi në Shkodër, në familjen e Gjergj Nikollës." },
    { year: "1923", text: "Filloi shkollën serbe ortodokse në Shkodër." },
    { year: "1927", text: "Shkoi në Serbi për studime në Seminarin e Manastirit." },
    { year: "1932", text: "U kthye në Shqipëri si mësues në Pukë dhe Shkodër." },
    { year: "1936", text: "Botoi \"Vargjet e Lira\" — vepra e tij më e rëndësishme." },
    { year: "1938", text: "Ndërroi jetë nga tuberkulozi në Torino, Itali, në moshën 26 vjeç." },
  ];

  return (
    <section id="biografia" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Jeta dhe Vepra
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-foreground font-bold mt-4 gold-underline inline-block">
            Rreth Migjenit
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-foreground leading-relaxed text-lg mb-6">
              <strong className="font-playfair text-2xl">Millosh Gjergj Nikolla</strong>, i njohur me pseudonimin
              <strong className="text-primary"> Migjeni</strong>, ishte poet dhe prozator shqiptar, themeluesi i
              modernizmit në letërsinë shqipe.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I lindur në Shkodër në 1911, ai u rrit në kushte modeste. Pasi studioi në Serbi, u kthye si
              mësues në zonat më të varfra të Shqipërisë, ku pa nga afër vuajtjet e popullit — një
              përvojë që do të formonte gjithë veprën e tij letrare.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Pavarësisht jetës së shkurtër — vdiq në moshën 26 vjeç nga tuberkulozi — Migjeni la një
              trashëgimi të paçmueshme me veprën e tij "Vargjet e Lira" (1936), që revolucionarizoi
              poezinë shqipe duke sjellë realizmin social dhe zërin e të shtypurve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {events.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <span className="font-playfair text-primary font-bold text-lg min-w-[60px]">
                  {event.year}
                </span>
                <div className="flex-1 pb-4 border-b border-border">
                  <p className="text-foreground">{event.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
