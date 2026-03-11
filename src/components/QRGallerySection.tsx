import { motion } from "framer-motion";
import { QrCode, ExternalLink } from "lucide-react";
import QRCode from "react-qr-code";

const BASE_URL = "https://migjeni.lovable.app";

const qrItems = [
  { label: "Fëmijët e rrugës", path: "/images/painting-5.jpeg" },
  { label: "Nëna dhe djali", path: "/images/painting-6.jpeg" },
  { label: "Statuja dhe turma", path: "/images/painting-7.jpeg" },
  { label: "Nata pa gjumë", path: "/images/painting-8.jpeg" },
  { label: "Nëna me fëmijë", path: "/images/painting-9.jpeg" },
  { label: "Luhatja e lirë", path: "/images/painting-10.jpeg" },
  { label: "Dritarja e shpresës", path: "/images/painting-11.jpeg" },
  { label: "Mjellmat", path: "/images/painting-12.jpeg" },
  { label: "Rruga e natës", path: "/images/painting-13.jpeg" },
  { label: "Luli i Vocërr", path: "/images/painting-14.jpeg" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto">
          {qrItems.map((item, index) => {
            const qrUrl = `${BASE_URL}${item.path}`;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-2xl p-5 border border-border shadow-lg flex flex-col items-center"
              >
                <div className="bg-white p-3 rounded-xl mb-4">
                  <QRCode value={qrUrl} size={110} />
                </div>
                <h3 className="font-playfair text-xs font-semibold text-foreground text-center mb-3 leading-tight">
                  {item.label}
                </h3>
                <a
                  href={item.path}
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
