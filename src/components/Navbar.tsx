import { useState, useEffect, useRef } from "react";
import { Menu, X, Search, Instagram, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import migjeniFace from "@/assets/migjeni-face.jpg";

interface NavbarProps {
  onSearchOpen: () => void;
}

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const Navbar = ({ onSearchOpen }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  const subLinks = [
    { id: "poezi", label: "Poezitë" },
    { id: "proza", label: "Proza" },
    { id: "biografia", label: "Jeta dhe Vepra" },
  ];

  const mainLinks = [
    { id: "kreu", label: "Kreu" },
    { id: "video", label: "Video" },
    { id: "galeri", label: "Galeria QR" },
    { id: "revista", label: "Revista" },
  ];

  const linkClass = "text-secondary-foreground/80 hover:text-secondary-foreground text-sm font-medium tracking-wide relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full cursor-pointer";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-secondary/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollTo("kreu")} className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src={migjeniFace} alt="Migjeni" className="w-full h-full object-cover" />
            </div>
            <span className="font-playfair text-xl font-semibold text-secondary-foreground group-hover:text-primary transition-colors">
              Migjeni
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {mainLinks.map(link => (
              <button key={link.id} onClick={() => scrollTo(link.id)} className={linkClass}>
                {link.label}
              </button>
            ))}

            {/* Dropdown: Rreth Migjenit */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 ${linkClass}`}>
                Rreth Migjenit
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 bg-secondary/95 backdrop-blur-md rounded-xl shadow-xl border border-border overflow-hidden"
                  >
                    {subLinks.map(sub => (
                      <button
                        key={sub.id}
                        onClick={() => { scrollTo(sub.id); setDropdownOpen(false); }}
                        className="block w-full text-left px-4 py-2.5 text-sm text-secondary-foreground/80 hover:text-secondary-foreground hover:bg-primary/10 transition-colors"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://www.instagram.com/migjeni.1911"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary transition-all group"
            >
              <Instagram className="w-5 h-5 text-secondary-foreground group-hover:text-primary-foreground" />
            </a>
            <button
              onClick={onSearchOpen}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary transition-all group"
            >
              <Search className="w-5 h-5 text-secondary-foreground group-hover:text-primary-foreground" />
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center"
          >
            {mobileOpen ? <X className="w-6 h-6 text-secondary-foreground" /> : <Menu className="w-6 h-6 text-secondary-foreground" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-secondary/95 rounded-lg mt-2 p-4 space-y-3 overflow-hidden"
            >
              <button onClick={() => { scrollTo("kreu"); setMobileOpen(false); }} className="block w-full text-left text-secondary-foreground/90 hover:text-primary py-2">Kreu</button>
              <div className="border-l-2 border-primary/30 pl-3 space-y-2">
                <p className="text-secondary-foreground/60 text-xs uppercase tracking-wider">Rreth Migjenit</p>
                {subLinks.map(sub => (
                  <button key={sub.id} onClick={() => { scrollTo(sub.id); setMobileOpen(false); }} className="block w-full text-left text-secondary-foreground/90 hover:text-primary py-1 text-sm">{sub.label}</button>
                ))}
              </div>
              <button onClick={() => { scrollTo("video"); setMobileOpen(false); }} className="block w-full text-left text-secondary-foreground/90 hover:text-primary py-2">Video</button>
              <button onClick={() => { scrollTo("galeri"); setMobileOpen(false); }} className="block w-full text-left text-secondary-foreground/90 hover:text-primary py-2">Galeria QR</button>
              <button onClick={() => { scrollTo("revista"); setMobileOpen(false); }} className="block w-full text-left text-secondary-foreground/90 hover:text-primary py-2">Revista</button>
              <a
                href="https://www.instagram.com/migjeni.1911"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 text-secondary-foreground/90 hover:text-primary py-2"
              >
                <Instagram className="w-4 h-4" /> Instagram
              </a>
              <button
                onClick={() => { setMobileOpen(false); onSearchOpen(); }}
                className="flex items-center gap-2 text-secondary-foreground/90 hover:text-primary py-2"
              >
                <Search className="w-4 h-4" /> Kërko
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
