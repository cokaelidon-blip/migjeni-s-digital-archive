import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
interface NavbarProps {
  onSearchOpen: () => void;
}
const Navbar = ({
  onSearchOpen
}: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const links = [{
    href: "#kreu",
    label: "Kreu"
  }, {
    href: "#poezi",
    label: "Poezitë"
  }, {
    href: "#proza",
    label: "Proza"
  }, {
    href: "#biografia",
    label: "Rreth Migjenit"
  }, {
    href: "#galeri",
    label: "Galeria QR"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-secondary/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#kreu" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="font-playfair text-primary-foreground text-xl font-bold">M</span>
            </div>
            <span className="font-playfair text-xl font-semibold text-secondary-foreground group-hover:text-primary transition-colors">
              Migjeni
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {links.map(link => <a key={link.href} href={link.href} className="text-secondary-foreground/80 hover:text-secondary-foreground text-sm font-medium tracking-wide relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">Galeria{link.label}
              </a>)}
          </div>

          <button onClick={onSearchOpen} className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary transition-all group">
            <Search className="w-5 h-5 text-secondary-foreground group-hover:text-primary-foreground" />
          </button>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center">
            {mobileOpen ? <X className="w-6 h-6 text-secondary-foreground" /> : <Menu className="w-6 h-6 text-secondary-foreground" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: "auto"
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-secondary/95 rounded-lg mt-2 p-4 space-y-3 overflow-hidden">
              {links.map(link => <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block text-secondary-foreground/90 hover:text-primary py-2">
                  {link.label}
                </a>)}
              <button onClick={() => {
            setMobileOpen(false);
            onSearchOpen();
          }} className="flex items-center gap-2 text-secondary-foreground/90 hover:text-primary py-2">
                <Search className="w-4 h-4" /> Kërko Poezi
              </button>
            </motion.div>}
        </AnimatePresence>
      </nav>
    </header>;
};
export default Navbar;