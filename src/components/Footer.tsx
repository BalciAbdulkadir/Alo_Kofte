import { WhatsappIcon } from "@/components/WhatsappIcon";
import { InstagramIcon } from "@/components/InstagramIcon"; 

const Footer = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Merhaba! Aloköfte hakkında bilgi almak istiyorum.");
    window.open(`https://wa.me/905461364781?text=${message}`, '_blank');
  };

  const openInstagram = () => {
    window.open(`https://www.instagram.com/alokofte`, '_blank');
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Ana Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-center md:text-left">
          
          {/* SOL SÜTUN */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              ALO<span className="text-accent">KÖFTE</span>
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Geleneksel Akçaabat Köftesi lezzetini sizlerle buluşturuyoruz.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <button 
                onClick={openWhatsApp}
                className="text-2xl hover:text-accent transition-colors"
                title="WhatsApp"
              >
                <WhatsappIcon className="h-6 w-6" />
              </button>
              <button 
                onClick={openInstagram}
                className="text-2xl hover:text-accent transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* SAĞ SÜTUN (Eski İletişim Bölümü) */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>📍 Akçaabat, Trabzon</p>
              <p>📞 0546 136 47 81</p>
              <p>📧 alokofte1@gmail.com</p>
            </div>
          </div>

        </div>

        {/* Alt Kısım */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/60 text-sm">
            <p>&copy; 2024 Aloköfte. Tüm hakları saklıdır.</p>
            <p className="mt-2 md:mt-0">
              Sipariş için: 
              <button 
                onClick={openWhatsApp}
                className="ml-2 text-accent hover:underline font-semibold inline-flex items-center gap-2"
              >
                WhatsApp <WhatsappIcon className="h-4 w-4" />
              </button>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;