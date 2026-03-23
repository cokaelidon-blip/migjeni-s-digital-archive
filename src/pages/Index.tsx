import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PoetrySection from "@/components/PoetrySection";
import ProseSection from "@/components/ProseSection";
import BiographySection from "@/components/BiographySection";
import VideoSection from "@/components/VideoSection";
import QRGallerySection from "@/components/QRGallerySection";
import DictionarySection from "@/components/DictionarySection";
import RevistaSection from "@/components/RevistaSection";
import SearchModal from "@/components/SearchModal";
import PoemModal from "@/components/PoemModal";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Poem } from "@/data/poems";

const SectionDivider = () => (
  <div className="max-w-5xl mx-auto px-4">
    <Separator className="bg-border/60" />
  </div>
);

const Index = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);

  const handlePoemSelect = (poem: Poem) => {
    setSelectedPoem(poem);
  };

  return (
    <div className="min-h-screen">
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <HeroSection onSearchOpen={() => setSearchOpen(true)} />
      <section className="py-12 px-4 bg-muted/50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
            <video autoPlay muted playsInline controls className="w-full aspect-video bg-black" preload="auto">
              <source src="/videos/hyrja.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <SectionDivider />
      <BiographySection />
      <SectionDivider />
      <PoetrySection onPoemSelect={handlePoemSelect} />
      <SectionDivider />
      <ProseSection onPoemSelect={handlePoemSelect} />
      <SectionDivider />
      <VideoSection />
      <SectionDivider />
      <DictionarySection />
      <SectionDivider />
      <QRGallerySection />
      <SectionDivider />
      <RevistaSection />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onPoemSelect={handlePoemSelect}
      />
      <PoemModal poem={selectedPoem} onClose={() => setSelectedPoem(null)} />
      <section className="py-12 px-4 bg-muted/50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
            <video autoPlay muted playsInline controls className="w-full aspect-video bg-black" preload="auto">
              <source src="/videos/mbyllja.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
