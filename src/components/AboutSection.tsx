import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      icon: "🥩",
      title: "Taze Malzeme",
      description: "Günlük taze et ve sebzelerle hazırlanan köftelerimiz"
    },
    {
      icon: "👨‍🍳",
      title: "Usta Ellerde",
      description: "64 yıllık deneyime sahip usta aşçılarımız tarafından hazırlanır"
    },
    {
      icon: "✋",
      title: "El Yapımı",
      description: "Geleneksel tariflerle, hiçbir katkı maddesi kullanmadan"
    },
    {
      icon: "🚀",
      title: "Hızlı Teslimat",
      description: "Şoklanmış ve taze olarak günlük hazırlanmış köftelerimizi evinize kadar gönderiyoruz"
    }
  ];
  

  return (
    <section className="py-20 px-4 bg-gradient-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Neden Aloköfte?
          </h2>
          <p className="text-lg text-primary/80 max-w-3xl mx-auto">
            1961 yılından beri Akçaabat'ta el yapımı köftelerimizle, 
            geleneksel Akçaabat Köfte lezzetini modern tekniklerle, halkımızla buluşturuyoruz. 
            Her köftemizi özenle seçilmiş malzemeler ve hijyenik koşullar altında hazırlıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="text-center hover:shadow-elegant transform hover:scale-105 transition-all duration-300 animate-slide-up bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-slide-up">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-elegant max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">📍 Adresimiz</h3>
            <p className="text-muted-foreground mb-2">
              <strong>Aloköfte</strong>
            </p>
            <p className="text-muted-foreground mb-4">
              Akçaabat, Trabzon 
            </p>
            <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground justify-center">
              <span>📞 0546 136 47 81</span>
              <span className="hidden sm:inline">•</span>
              <span>📧 alokofte1@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
};
export default AboutSection;