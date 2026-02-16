import { motion } from "framer-motion";
import { QrCode, ExternalLink } from "lucide-react";
import qrFormImage from "@/assets/qr-form.jpg";

const QRGallerySection = () => {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfQL1Kt9lhKvj-rhRuGvDqqQz9QODPolZrZFXmt2AicfTFntw/viewform?usp=publish-editor";

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
              Formulari
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Skanoni kodin QR ose klikoni butonin për të plotësuar formularin
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg max-w-sm w-full flex flex-col items-center">
            <img
              src={qrFormImage}
              alt="QR Code për formularin"
              className="w-64 h-64 object-contain rounded-xl mb-6"
            />
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
              Plotëso Formularin
            </h3>
            <p className="text-muted-foreground text-sm text-center mb-6">
              Skanoni kodin QR me telefonin tuaj ose klikoni më poshtë
            </p>
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Hap Formularin
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QRGallerySection;
