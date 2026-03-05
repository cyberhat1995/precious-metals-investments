/* Neo-Classical Home Page
   - Dark theme with emerald and burgundy
   - Hero shows the two actual silver coin products
   - Product showcase with classical card design
*/

import Layout from "@/components/Layout";
import PaymentWizard from "@/components/PaymentWizard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Shield, TrendingUp, Award, Lock } from "lucide-react";
import { useState } from "react";

const EAGLE_COIN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663043088566/EpPithG759YMRbGiWPaXVx/eagle-coin-side1_8b8324e0.png";
const MENORAH_COIN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663043088566/EpPithG759YMRbGiWPaXVx/menorah-coin-side1_2ced6b1b.png";

export default function Home() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    {
      id: 2,
      name: "מטבע עיט הכסף - מהדורה מיוחדת",
      price: "₪460",
      priceNum: 460,
      image: EAGLE_COIN_IMG,
      description: "הטבעה אמנותית של ראש עיט עוצמתי - כסף טהור 999, 1 אונקיה"
    },
    {
      id: 3,
      name: "מטבע מנורה - מהדורה מיוחדת",
      price: "₪460",
      priceNum: 460,
      image: MENORAH_COIN_IMG,
      description: "מנורת שבעת הקנים המסורתית - כסף טהור 999, 1 אונקיה"
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
                מטבעות כסף טהור 999 ממנטת Emirates Gold במהדורות מיוחדות. כל מטבע מגיע עם תעודת אמינות ואריזה מקורית.
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20 grid grid-cols-2 gap-4 p-6 bg-secondary/80 backdrop-blur">
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={EAGLE_COIN_IMG}
                    alt="מטבע עיט הכסף"
                    className="w-full h-auto object-contain rounded-xl hover:scale-105 transition-transform duration-500 drop-shadow-lg"
                  />
                  <span className="text-xs text-muted-foreground font-['Cormorant_Garamond'] text-center">מטבע עיט הכסף</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={MENORAH_COIN_IMG}
                    alt="מטבע מנורה"
                    className="w-full h-auto object-contain rounded-xl hover:scale-105 transition-transform duration-500 drop-shadow-lg"
                  />
                  <span className="text-xs text-muted-foreground font-['Cormorant_Garamond'] text-center">מטבע מנורה</span>
                </div>
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
            <div className="flex justify-center gap-2 my-4">
              <span className="inline-block w-12 h-1 bg-primary rounded"></span>
              <span className="inline-block w-3 h-1 bg-primary/50 rounded"></span>
            </div>
            <p className="text-muted-foreground font-['Cormorant_Garamond'] text-lg mt-4 max-w-2xl mx-auto">
              מטבעות כסף טהור ממנטת Emirates Gold - מהדורות מיוחדות בלבד
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/30">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg aspect-square bg-secondary/50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
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
                    <span className="text-sm text-muted-foreground">ליחידה (כולל מע"מ)</span>
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
                    <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground" size="lg">
                      פרטים
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/shop">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10">
                לכל המוצרים בחנות
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-['Playfair_Display'] font-bold text-foreground mb-4">
              למה לבחור בנו?
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg bg-background/50 hover:bg-background transition-colors duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-['Playfair_Display'] font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground font-['Cormorant_Garamond'] text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-['Playfair_Display'] font-bold text-foreground">
              מוכנים להשקיע?
            </h2>
            <p className="text-lg text-muted-foreground font-['Cormorant_Garamond']">
              צרו איתנו קשר לייעוץ אישי ומקצועי ללא עלות
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10">
                  לחנות המוצרים
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="font-semibold px-10">
                  צור קשר
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Wizard */}
      {selectedProduct && (
        <PaymentWizard
          open={isPaymentOpen}
          onClose={() => setIsPaymentOpen(false)}
          product={{
            name: selectedProduct.name,
            price: selectedProduct.priceNum,
            image: selectedProduct.image
          }}
        />
      )}
    </Layout>
  );
}
