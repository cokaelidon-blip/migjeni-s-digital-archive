import { motion } from "framer-motion";
import { QrCode } from "lucide-react";
import QRCode from "react-qr-code";

const qrItems = [
  { label: "Foto 1", url: "https://example.com/foto1" },
  { label: "Foto 2", url: "https://example.com/foto2" },
  { label: "Foto 3", url: "https://example.com/foto3" },
  { label: "Foto 4", url: "https://example.com/foto4" },
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
            Skanoni kodet QR për të parë fotot
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {qrItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-lg flex flex-col items-center"
            >
              <div className="bg-white p-3 rounded-xl mb-4">
                <QRCode value={item.url} size={120} />
              </div>
              <h3 className="font-playfair text-sm font-semibold text-foreground">
                {item.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QRGallerySection;
