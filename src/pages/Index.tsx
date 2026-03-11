import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PoetrySection from "@/components/PoetrySection";
import ProseSection from "@/components/ProseSection";
import BiographySection from "@/components/BiographySection";
import VideoSection from "@/components/VideoSection";
import QRGallerySection from "@/components/QRGallerySection";
import RevistaSection from "@/components/RevistaSection";
import SearchModal from "@/components/SearchModal";
import PoemModal from "@/components/PoemModal";
import Footer from "@/components/Footer";
import { Poem } from "@/data/poems";

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
      <PoetrySection onPoemSelect={handlePoemSelect} />
      <ProseSection onPoemSelect={handlePoemSelect} />
      <BiographySection />
      <VideoSection />
      <QRGallerySection />
      <RevistaSection />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onPoemSelect={handlePoemSelect}
      />
      <PoemModal poem={selectedPoem} onClose={() => setSelectedPoem(null)} />
      <Footer />
    </div>
  );
};

export default Index;
