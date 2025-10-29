import { Button } from "@/components/ui/button";
import heroImage from "/src/assets/Projeresimkofte.png";

const HeroSection = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Merhaba! Aloköfte hakkında bilgi almak istiyorum.");
    window.open(`https://wa.me/905461364781?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
          ALO<span className="text-accent">KÖFTE</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
          Geleneksel lezzetler ile hazırlanan, taze ve şoklanmış
          
          
        </p>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
          
          Akçaabat Köftesi. 
          
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={openWhatsApp}
            className="text-lg px-8 py-6"
          >
            🍽️ Hemen Sipariş Ver
          </Button>
          
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-6xl animate-float opacity-30"></div>
      <div className="absolute bottom-20 right-10 text-6xl animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-20 text-4xl animate-float opacity-20" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default HeroSection;