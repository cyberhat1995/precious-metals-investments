/* Neo-Classical Shop Page
   - Dark theme with emerald and burgundy
   - Two silver coin products only
*/

import Layout from "@/components/Layout";
import PaymentWizard from "@/components/PaymentWizard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { useState } from "react";

const EAGLE_COIN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663043088566/EpPithG759YMRbGiWPaXVx/silver-eagle-coin_1af2483b.png";
const MENORAH_COIN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663043088566/EpPithG759YMRbGiWPaXVx/menorah-coin_1712ff65.png";

export default function Shop() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    {
      id: 2,
      name: "מטבע עיט הכסף - מהדורה מיוחדת",
      price: 460,
      category: "silver",
      image: EAGLE_COIN_IMG,
      description: "הטבעה אמנותית של ראש עיט עוצמתי מהמטבעה הרשמית של האמירויות. כסף טהור 999, 1 אונקיה.",
      inStock: true,
      badge: "מהדורה מיוחדת"
    },
    {
      id: 3,
      name: "מטבע מנורה - מהדורה מיוחדת",
      price: 460,
      category: "silver",
      image: MENORAH_COIN_IMG,
      description: "מנורת שבעת הקנים המסורתית מהמטבעה הרשמית של האמירויות. כסף טהור 999, 1 אונקיה.",
      inStock: true,
      badge: "מהדורה מיוחדת"
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-12">
        <div className="container text-center">
          <h1 className="text-4xl lg:text-5xl font-['Playfair_Display'] font-bold text-foreground mb-4">
            חנות
          </h1>
          <div className="flex justify-center gap-2 my-4">
            <span className="inline-block w-12 h-1 bg-primary rounded"></span>
            <span className="inline-block w-3 h-1 bg-primary/50 rounded"></span>
          </div>
          <p className="text-muted-foreground font-['Cormorant_Garamond'] text-lg max-w-2xl mx-auto">
            מטבעות כסף טהור ממנטת Emirates Gold - מהדורות מיוחדות בלבד
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/40 overflow-hidden"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden aspect-square bg-secondary/60">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                    />
                    {product.badge && (
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        {product.badge}
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-slate-600/80 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      כסף
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-['Playfair_Display'] mb-2 leading-snug">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="font-['Cormorant_Garamond'] text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-['Lora'] font-bold text-primary">₪{product.price}</span>
                    <span className="text-sm text-muted-foreground">ליחידה (כולל מע"מ)</span>
                  </div>
                  <div className="mt-2">
                    <Badge variant="outline" className="text-green-400 border-green-400/50 text-xs">
                      ✓ זמין במלאי
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-3">
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    size="lg"
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsPaymentOpen(true);
                    }}
                  >
                    קנה עכשיו
                  </Button>
                  <Link href={`/product/${product.id}`}>
                    <Button
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      size="lg"
                    >
                      פרטים
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
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
            price: selectedProduct.price,
            image: selectedProduct.image
          }}
        />
      )}
    </Layout>
  );
}
