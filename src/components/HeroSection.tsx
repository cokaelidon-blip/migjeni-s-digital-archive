import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
interface HeroSectionProps {
  onSearchOpen: () => void;
}
const HeroSection = ({
  onSearchOpen
}: HeroSectionProps) => {
  return <section id="kreu" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Migjeni hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{
        background: "var(--hero-overlay)"
      }} />
      </div>

      {/* Decorative glows */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="mb-8">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium tracking-widest uppercase">
            1911 – 1938
          </span>
        </motion.div>

        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-secondary-foreground font-bold mb-8">
          Migjeni
        </motion.h1>

        <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="font-playfair text-xl sm:text-2xl text-secondary-foreground/80 italic max-w-3xl mx-auto leading-relaxed mb-12">
          <span className="text-4xl text-primary/40 font-playfair">"</span>
          Nuk jam unë poeti qi këndon me zemër t'gëzueme kangë t'ëmbla dashunije. Jam poeti qi këndon kangën e mjerimit t'math.
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#poezi" className="group px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition-all flex items-center gap-2">
            Eksploro Veprat
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button onClick={onSearchOpen} className="px-8 py-4 border-2 border-secondary-foreground/30 hover:border-primary text-secondary-foreground hover:text-primary font-medium rounded-full transition-all">
            Kërko Poezi
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.2
      }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;