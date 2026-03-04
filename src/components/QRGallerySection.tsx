import { motion } from "framer-motion";
import { QrCode, ExternalLink } from "lucide-react";
import QRCode from "react-qr-code";

const BASE_URL = "https://migjeni.lovable.app";

const qrItems = [
  { label: "Pikturë — Fëmijët e rrugës", path: "/images/painting-1.jpeg" },
  { label: "Pikturë — Nëna me fëmijë", path: "/images/painting-2.jpeg" },
  { label: "Pikturë — Statuja e Migjenit", path: "/images/painting-3.jpeg" },
  { label: "Pikturë — Mjellmat", path: "/images/painting-4.jpeg" },
];

const QRGallerySection = () => {
  return (
    <section id="galeri" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <QrCode className="w-8 h-8 text-primary" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              Galeria QR
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Skanoni kodet QR ose shtypni butonin për të parë fotot
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {qrItems.map((item, index) => {
            const fullUrl = `${BASE_URL}${item.path}`;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-lg flex flex-col items-center"
              >
                <div className="bg-white p-3 rounded-xl mb-4">
                  <QRCode value={fullUrl} size={120} />
                </div>
                <h3 className="font-playfair text-sm font-semibold text-foreground text-center mb-3">
                  {item.label}
                </h3>
                <a
                  href={fullUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-xs font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Hap Foton
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QRGallerySection;
