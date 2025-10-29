import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import tarihceResmi from "@/assets/koftetarihce.jpg";
import akcaabatKofteResim from "@/assets/menuakc.jpg";
import sebzeliKofteResim from "@/assets/menusebze.jpg";
import tereyagiResim from "@/assets/tereyagi.jpg";
import misirUnuResim from "@/assets/misirunu.jpg";
import kuymakPeyniriResim from "@/assets/peynir.jpg";

const MenuSection = () => {
  const openWhatsApp = (product: string) => {
    const message = encodeURIComponent(`Merhaba! ${product} sipariş etmek istiyorum. Bilgi alabilir miyim?`);
    window.open(`https://wa.me/905461364781?text=${message}`, '_blank');
  };

  // menü listesini 5 ürünü de içerecek şekilde güncelle
  const menuItems = [
    {
      name: "Akçaabat Köfte",
      description: "Geleneksel tarifle hazırlanan, baharatlarla lezzetlendirilmiş el yapımı köfte",
      price: "2KG 1799₺",
      ingredients: "Dana kıyma, sarımsak, ekmek, baharatlar",
      image: akcaabatKofteResim
    },
    {
      name: "Sebzeli Köfte",
      description: "Akçaabat usülü hazırlanan sebzeli köfte",
      price: "2KG 1799₺",
      ingredients: "Dana kıyma, soğan, sarımsak, taze sebzeler, baharatlar",
      image: sebzeliKofteResim
    },
    {
      name: "Yayık Tereyağı",
      description: "Karadeniz yaylalarından geleneksel yöntemlerle hazırlanan, mis kokulu saf tereyağı.",
      price: "1KG 500₺",
      ingredients: "%100 Süt yağı, tuz",
      image: tereyagiResim
    },
    {
      name: "Taş Değirmen Mısır Unu",
      description: "Yöresel mısırların taş değirmende öğütülmesiyle elde edilen, altın sarısı mısır unu.",
      price: "2KG 500₺",
      ingredients: "%100 öğütülmüş mısır",
      image: misirUnuResim
    },
    {
      name: "Kuymaklık Telli Peynir",
      description: "Kuymak ve mıhlamanın sırrı, uzadıkça uzayan meşhur Karadeniz telli peyniri.",
      price: "1KG 500₺",
      ingredients: "Pastörize inek sütü, peynir mayası, tuz",
      image: kuymakPeyniriResim
    },
  ];

  return (
    <section id="menu" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Menü Kartları */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {menuItems.map((item, index) => (
            <Card
              key={item.name}
              className="w-full max-w-sm hover:shadow-warm transform hover:scale-105 transition-all duration-300 animate-slide-up border-2 hover:border-primary/20 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <CardHeader className="text-center pt-4">
                <CardTitle className="text-xl text-primary">{item.name}</CardTitle>
                <CardDescription className="text-sm">{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 px-6 pb-6">
                <div className="text-center">
                  <span className="text-2xl font-bold text-primary">{item.price}</span>
                </div>
                <div className="text-xs text-muted-foreground border-t pt-2">
                  <strong>İçerik:</strong> {item.ingredients}
                </div>
                <Button
                  variant="whatsapp"
                  className="w-full"
                  onClick={() => openWhatsApp(item.name)}
                >
                  WhatsApp ile Sipariş Ver
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tarihçe Bölümü */}
        <div className="mt-24 max-w-5xl mx-auto animate-fade-in flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Sol Taraf: Resim */}
          <div className="w-full md:w-1/3">
            <img 
              src={tarihceResmi} 
              alt="Tarihi Akçaabat Köftesi" 
              className="rounded-2xl shadow-elegant w-full h-auto object-cover"
            />
          </div>
          
          {/* Sağ Taraf: Yazı */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Akçaabat Köftesinin Tarihçesi
            </h3>
            <div className="border-t-2 border-accent w-24 mx-auto md:mx-0 mb-6"></div>
            <p className="text-md md:text-lg text-muted-foreground leading-relaxed">
              Akçaabat Köftesi, 1930'lu yıllarda Trabzon'un Akçaabat ilçesinde yaşayan yerel lokantacılar tarafından üretildi. Kıymalı köftenin malzemeleri arasında dana eti, bayat ekmek, sarımsak ve tuz ekleyerek bu lezzeti piyasaya sürdü. 2009 yılında Türk Patent ve Marka Kurumu, Akçaabat Köftesi'ne coğrafi işaret tescili verdi. Bu tescille hem yerel özgünlüğü tescillendi hem de üretimin kalite kontrolü ciddi bir zemine oturtuldu. Küçük yerel bir mucize kültüre dönüştürüldü ve tüm dünyaya yayıldı.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;