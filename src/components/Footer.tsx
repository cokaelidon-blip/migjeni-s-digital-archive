const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src="/images/migjeni-face-footer.jpg" alt="Migjeni" className="w-full h-full object-cover" />
            </div>
            <span className="font-playfair text-xl font-semibold">Migjeni</span>
          </div>

          <p className="text-secondary-foreground/60 text-sm text-center">
            Arkiva Letrare — Kushtuar kujtimit të Millosh Gjergj Nikollës (1911–1938)
          </p>

          <div className="flex items-center gap-6">
            <a href="#kreu" className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors">
              Kreu
            </a>
            <a href="#poezi" className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors">
              Poezi
            </a>
            <a href="#biografia" className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors">
              Biografia
            </a>
            <a
              href="https://www.instagram.com/migjeni.1911"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
