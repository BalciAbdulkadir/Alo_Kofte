import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Merhaba! Aloköfte hakkında bilgi almak ve sipariş vermek istiyorum.");
    window.open(`https://wa.me/905461364781?text=${message}`, '_blank');
  };

  const openWhatsAppReservation = () => {
    const message = encodeURIComponent("Merhaba! Masa rezervasyonu yaptırmak istiyorum.");
    window.open(`https://wa.me/905461364781?text=${message}`, '_blank');
  };

  const openWhatsAppFeedback = () => {
    const message = encodeURIComponent("Merhaba! Görüş ve önerilerimi iletmek istiyorum.");
    window.open(`https://wa.me/905461364781?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-spice bg-clip-text text-transparent">
            İletişime Geçin
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sipariş vermek veya sorularınız için WhatsApp üzerinden bize ulaşabilirsiniz
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          <Card className="w-full max-w-sm hover:shadow-warm transform hover:scale-105 transition-all duration-300 animate-slide-up">
            <CardHeader>
              <div className="text-4xl mb-2">🛒</div>
              <CardTitle className="text-primary">Sipariş Ver</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Lezzetli köftelerimizi hemen sipariş edin
              </p>
              <Button variant="whatsapp" onClick={openWhatsApp} className="w-full">
                Sipariş WhatsApp
              </Button>
            </CardContent>
          </Card>

          

          <Card className="w-full max-w-sm hover:shadow-warm transform hover:scale-105 transition-all duration-300 animate-slide-up">
            <CardHeader>
              <div className="text-4xl mb-2">💬</div>
              <CardTitle className="text-primary">Geri Bildirim</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Görüş ve önerilerinizi paylaşın
              </p>
              <Button variant="golden" onClick={openWhatsAppFeedback} className="w-full">
                Görüş Bildir
              </Button>
            </CardContent>
          </Card>
        </div>

        
      </div>
    </section>
  );
};

export default ContactSection;