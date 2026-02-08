import { motion } from "framer-motion";
import QRCode from "react-qr-code";
import { QrCode, Camera } from "lucide-react";
const galleryItems = [{
  id: 1,
  title: "Portreti i Migjenit",
  description: "Fotografi zyrtare, 1937",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Migjeni_%28portrait%29.jpg"
}, {
  id: 2,
  title: "Migjeni i ri",
  description: "Në vitet e rinisë në Shkodër",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Migjeni_1.jpg/440px-Migjeni_1.jpg"
}, {
  id: 3,
  title: "Migjeni në Shkodër",
  description: "Gjatë periudhës së mësimdhënies",
  imageUrl: "https://upload.wikimedia.org/wikipedia/sq/8/8c/Migjeni2.jpg"
}, {
  id: 4,
  title: "Shtëpia e Migjenit",
  description: "Shtëpia-muze në Shkodër",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Migjeni_House_Museum.jpg/1280px-Migjeni_House_Museum.jpg"
}, {
  id: 5,
  title: "Vepra Letrare",
  description: "\"Vargjet e Lira\" - vepra kryesore",
  imageUrl: "https://upload.wikimedia.org/wikipedia/sq/4/41/Free_verse_Migjeni.jpg"
}, {
  id: 6,
  title: "Busti i Migjenit",
  description: "Monumenti në Shkodër",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Migjeni_bust_in_Shkod%C3%ABr.jpg/440px-Migjeni_bust_in_Shkod%C3%ABr.jpg"
}];
const QRGallerySection = () => {
  return <section id="galeri" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <QrCode className="w-8 h-8 text-primary" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">Galeria </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Skanoni kodet QR me telefonin tuaj për të parë fotografitë origjinale historike të Migjenit
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-primary">
            <Camera className="w-4 h-4" />
            <span>Përdorni kamerën e telefonit për të skanuar</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => <motion.div key={item.id} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5">
              <div className="flex flex-col items-center">
                <div className="bg-background p-4 rounded-xl mb-5 shadow-inner">
                  <QRCode value={item.imageUrl} size={180} bgColor="hsl(var(--background))" fgColor="hsl(var(--foreground))" level="M" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm text-center">
                  {item.description}
                </p>
                
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default QRGallerySection;