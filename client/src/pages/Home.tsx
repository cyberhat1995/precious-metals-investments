/* Neo-Classical Elegance Home Page
   - Symmetrical hero with elegant imagery
   - Product showcase with classical card design
   - Services section with balanced layout
*/

import Layout from "@/components/Layout";
import PaymentWizard from "@/components/PaymentWizard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Shield, TrendingUp, Award, Lock } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const heroImageUrl = "https://private-us-east-1.manuscdn.com/sessionFile/UNk7ISPWHA1O9gqF9GTYxZ/sandbox/UK90mnMTDc7dMW4WPDU7Lr-img-1_1770851776000_na1fn_aGVyby1nb2xkLWJhcnM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVU5rN0lTUFdIQTFPOWdxRjlHVFl4Wi9zYW5kYm94L1VLOTBtbk1URGM3ZE1XNFdQRFU3THItaW1nLTFfMTc3MDg1MTc3NjAwMF9uYTFmbl9hR1Z5YnkxbmIyeGtMV0poY25NLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Kpv51TYKWwMq53Bc71Iv6pA3hIPTJ4ys~uTGDQkuurtfhuxO2kNvuI-P~DxbNqw6NiCbvq-bmPlwh6TgccqLQwm9fvpSbFH2BZLw7OqxXjdzugNwp0M7GKFNDbum2fej4vU6ecrtfmVDTDFQGl3sjl6cgtqJN5U7bLI1Jb~qhyonfOdcgWrMakPcWsfXIzxv2Ere6FOQBD6cQ5lJl~wGkCvLcvCCMEdq61QgfHfVpf2v~B-ABjputd87IJv9xgb8gpVT88rhMcsrBo5Ukq4ZianWW9ZVYd7r28jpQ7GFfx5hPXzMc5WKGfPBtW-tMzBWIL6-6qnUhpwjrUlKN~xXLw__";
  
  const silverCoinsUrl = "https://private-us-east-1.manuscdn.com/sessionFile/UNk7ISPWHA1O9gqF9GTYxZ/sandbox/UK90mnMTDc7dMW4WPDU7Lr-img-2_1770851809000_na1fn_c2lsdmVyLWNvaW5zLWNvbGxlY3Rpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVU5rN0lTUFdIQTFPOWdxRjlHVFl4Wi9zYW5kYm94L1VLOTBtbk1URGM3ZE1XNFdQRFU3THItaW1nLTJfMTc3MDg1MTgwOTAwMF9uYTFmbl9jMmxzZG1WeUxXTnZhVzV6TFdOdmJHeGxZM1JwYjI0LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=vAaL0Pj5WcPkfuNn3B0LqVDTJnwsTfQY3y6cjL8MHnfWx7dosH~1mPvmBCY~5jW8RrT3aUWrpyfJRqzvDbwRSz5QJ4CTGlBxFIl-tS47G-46DuyyT~X0len2SgiTNfY3qWh7XBTeIZM9GD6S72kYa35v7GPvYQFXowVh4Ug3-nDKb83PsApKbqDCHs0rla0ZkOuEPta2dWK0xUjCNVog~JEJglSvd5UAJDJ5~gq7mYJWA1LOdrV4iiohM7AomcRDT3CK9~Y~8qYgMC289TgUt0AlJq5xw7LRfdA4hDT46MW30NLXLmEnUnSC7hocK396-wBgUrG5e5N7yhz6WutWYA__";

  const products = [
    {
      id: 1,
      name: "מטבע כסף דרמי 100 - מהדורה מוגבלת",
      price: "₪460",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043088566/UuKfUrSKRsqWyLFT.png",
      description: "מטבע כסף טהור 999 במהדורה מוגבלת של 10,000 יחידות"
    }
  ];

  const services = [
    {
      icon: Shield,
      title: "הגנה על ההון",
      description: "מתכות יקרות מספקות הגנה מפני אינפלציה ושחיקת כוח הקנייה לאורך זמן"
    },
    {
      icon: TrendingUp,
      title: "צמיחה יציבה",
      description: "השקעה במתכות יקרות מציעה פוטנציאל צמיחה יציב ועקבי לאורך שנים"
    },
    {
      icon: Award,
      title: "מוצרים מקוריים",
      description: "כל המוצרים שלנו מגיעים ממנטות מוכרות עם אישורי אמינות"
    },
    {
      icon: Lock,
      title: "אחסון מאובטח",
      description: "אנו מציעים פתרונות אחסון מאובטחים למתכות היקרות שלכם"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary to-background">
        <div className="container py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeIn">
              <h1 className="text-4xl lg:text-6xl font-['Playfair_Display'] font-bold text-foreground leading-tight">
                השקיעו בעתיד
                <span className="block text-primary mt-2">עם מתכות יקרות</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed font-['Cormorant_Garamond']">
                זהב וכסף הם נכסים יציבים שעומדים במבחן הזמן. אנו מציעים מגוון רחב של מוצרי השקעה איכוtiים עם שירות מקצועי ואמין.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/shop">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                    לחנות המוצרים
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="font-semibold px-8">
                    צור קשר
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fadeIn animation-delay-200">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-primary/20">
                <img
                  src={heroImageUrl}
                  alt="מטילי זהב"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-['Playfair_Display'] font-bold text-foreground mb-4">
              מוצרים נבחרים
            </h2>
            <div className="ornament-divider">
              <span className="inline-block w-12 h-1 bg-primary rounded"></span>
            </div>
            <p className="text-muted-foreground font-['Cormorant_Garamond'] text-lg mt-6 max-w-2xl mx-auto">
              מבחר מוצרי השקעה איכותיים ממנטות מוכרות בעולם
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/30">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-['Playfair_Display'] mb-2">{product.name}</CardTitle>
                  <CardDescription className="font-['Cormorant_Garamond'] text-base">
                    {product.description}
                  </CardDescription>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-2xl font-['Lora'] font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground">ליחידה</span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-2">
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary/90" 
                    size="lg"
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsPaymentOpen(true);
                    }}
                  >
                    קנה עכשיו
                  </Button>
                  <Link href={`/product/${product.id}`}>
                    <Button variant="outline" className="flex-1" size="lg">
                      פרטים
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop">
              <Button variant="outline" size="lg" className="font-semibold px-8">
                צפה בכל המוצרים
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-['Playfair_Display'] font-bold text-foreground mb-4">
              למה לבחור בנו
            </h2>
            <div className="ornament-divider">
              <span className="inline-block w-12 h-1 bg-primary rounded"></span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-['Playfair_Display'] font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-['Cormorant_Garamond'] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-5xl font-['Playfair_Display'] font-bold mb-6">
            מוכנים להתחיל להשקיע?
          </h2>
          <p className="text-lg font-['Cormorant_Garamond'] mb-8 max-w-2xl mx-auto opacity-90">
            צרו איתנו קשר עוד היום וקבלו ייעוץ מקצועי להשקעה במתכות יקרות
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="font-semibold px-8">
              צור קשר עכשיו
            </Button>
          </Link>
        </div>
      </section>

      {/* Payment Wizard */}
      {selectedProduct && (
        <PaymentWizard
          open={isPaymentOpen}
          onClose={() => {
            setIsPaymentOpen(false);
            setSelectedProduct(null);
          }}
          product={{
            name: selectedProduct.name,
            price: parseInt(selectedProduct.price.replace(/[^0-9]/g, '')),
            image: selectedProduct.image
          }}
        />
      )}
    </Layout>
  );
}
