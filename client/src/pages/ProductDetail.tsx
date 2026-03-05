/* Neo-Classical Product Detail Page
   - Full product information
   - Image gallery with fresh CDN URLs
   - Purchase options
*/

import Layout from "@/components/Layout";
import ProductGallery from "@/components/ProductGallery";
import PaymentWizard from "@/components/PaymentWizard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, TrendingUp, Award, Package } from "lucide-react";
import { Link, useParams } from "wouter";
import { useState } from "react";

const EAGLE_FRONT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663043088566/EpPithG759YMRbGiWPaXVx/eagle-coin-side1_8b8324e0.png";
const EAGLE_BACK  = "https://d2xsxph8kpxj0f.cloudfront.net/310519663043088566/EpPithG759YMRbGiWPaXVx/eagle-coin-side2_2aa109c9.png";
const MENORAH_FRONT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663043088566/EpPithG759YMRbGiWPaXVx/menorah-coin-side1_2ced6b1b.png";
const MENORAH_BACK  = "https://d2xsxph8kpxj0f.cloudfront.net/310519663043088566/EpPithG759YMRbGiWPaXVx/menorah-coin-side2_feaa1a9b.png";

const allProducts: Record<string, {
  id: number;
  name: string;
  price: number;
  category: string;
  badge: string;
  images: string[];
  description: string;
  weight: string;
  purity: string;
  diameter: string;
  thickness: string;
  mintage: string;
  manufacturer: string;
  inStock: boolean;
  features: string[];
  sideA: string;
  sideB: string;
}> = {
  "2": {
    id: 2,
    name: "מטבע עיט הכסף - מהדורה מיוחדת",
    price: 460,
    category: "silver",
    badge: "מהדורה מיוחדת",
    images: [EAGLE_FRONT, EAGLE_BACK],
    description: "הטבעה אמנותית של ראש עיט עוצמתי מהמטבעה הרשמית של האמירויות. כסף טהור 999, 1 אונקיה, עיצוב ייחודי ומרשים.",
    weight: "31.1 גרם (1 אונקיה)",
    purity: "999 כסף טהור",
    diameter: "39 מ\"מ",
    thickness: "3 מ\"מ",
    mintage: "מהדורה מיוחדת",
    manufacturer: "Emirates Gold",
    inStock: true,
    features: [
      "מהדורה מיוחדת מהמטבעה הרשמית של האמירויות",
      "כסף טהור 999",
      "עיצוב אמנותי ייחודי של עיט עוצמתי",
      "מגיע עם תעודת אמינות",
      "אריזה מקורית מהמנטה"
    ],
    sideA: "הטבעה אמנותית של ראש עיט עוצמתי תחת הכיתוב \"EMIRATES GOLD\", מוקף בעיטור כוכבים ועלי דפנה.",
    sideB: "איור עדין ומפורט של פרח הורד, לצד מפרט טכני של אונקיית כסף טהור 999."
  },
  "3": {
    id: 3,
    name: "מטבע מנורה - מהדורה מיוחדת",
    price: 460,
    category: "silver",
    badge: "מהדורה מיוחדת",
    images: [MENORAH_FRONT, MENORAH_BACK],
    description: "מנורת שבעת הקנים המסורתית מהמטבעה הרשמית של האמירויות. כסף טהור 999, 1 אונקיה, עיצוב ירושלמי ייחודי.",
    weight: "31.1 גרם (1 אונקיה)",
    purity: "999 כסף טהור",
    diameter: "39 מ\"מ",
    thickness: "3 מ\"מ",
    mintage: "מהדורה מיוחדת",
    manufacturer: "Emirates Gold",
    inStock: true,
    features: [
      "מהדורה מיוחדת מהמטבעה הרשמית של האמירויות",
      "כסף טהור 999",
      "עיצוב מנורת ירושלים הייחודי",
      "מגיע עם תעודת אמינות",
      "אריזה מקורית מהמנטה"
    ],
    sideA: "במרכז המטבע מנורת שבעת הקנים המסורתית המוקפת בענפי זית, תחת הכיתוב \"JERUSALEM\" וערך נקוב של \"100 DREMT\" בגימור קלוע יוקרתי.",
    sideB: "איור אמנותי של רימון בשל על ענף, מלווה בכיתוב \"Limited Edition 10,000 Coins\" ומפרט טכני של אונקיית כסף טהור 999."
  }
};

const benefits = [
  { icon: Shield, title: "אמינות מובטחת", description: "כל מטבע מגיע עם תעודת אמינות מהמנטה" },
  { icon: TrendingUp, title: "השקעה חכמה", description: "מטבעות מיוחדים נוטים לעלות בערכם לאורך זמן" },
  { icon: Award, title: "איכות פרימיום", description: "ייצור ברמה הגבוהה ביותר" },
  { icon: Package, title: "אריזה מקורית", description: "נשמר באריזה מקורית מהמנטה" }
];

export default function ProductDetail() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const params = useParams<{ id: string }>();
  const productId = params?.id ?? "2";
  const product = allProducts[productId] ?? allProducts["2"];

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-secondary py-4">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/"><a className="hover:text-primary transition-colors">דף הבית</a></Link>
            <span>/</span>
            <Link href="/shop"><a className="hover:text-primary transition-colors">חנות</a></Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <div>
              <ProductGallery images={product.images} productName={product.name} />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex gap-2 mb-4">
                  <Badge className="bg-slate-600 text-white">כסף</Badge>
                  <Badge className="bg-primary text-primary-foreground">{product.badge}</Badge>
                </div>
                <h1 className="text-3xl lg:text-4xl font-['Playfair_Display'] font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground font-['Cormorant_Garamond'] leading-relaxed">
                  {product.description}
                </p>
              </div>

              <Separator />

              {/* Price */}
              <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-['Lora'] font-bold text-primary">₪{product.price}</span>
                  <span className="text-muted-foreground">ליחידה (כולל מע"מ)</span>
                </div>
                <p className="text-sm text-muted-foreground">* המחיר משתנה בהתאם למחיר השוק</p>
              </div>

              {/* Purchase Buttons */}
              <div className="flex gap-4">
                <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-lg">
                  הוסף לסל
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => setIsPaymentOpen(true)}
                >
                  קנה עכשיו
                </Button>
              </div>

              {/* Payment Wizard */}
              <PaymentWizard
                open={isPaymentOpen}
                onClose={() => setIsPaymentOpen(false)}
                product={{ name: product.name, price: product.price, image: product.images[0] }}
              />

              {/* Specifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-['Playfair_Display']">מפרט טכני</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    ["משקל", product.weight],
                    ["טוהר", product.purity],
                    ["קוטר", product.diameter],
                    ["עובי", product.thickness],
                    ["מהדורה", product.mintage],
                    ["יצרן", product.manufacturer]
                  ].map(([label, value], i, arr) => (
                    <div key={label} className={`flex justify-between py-2 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                      <span className="text-muted-foreground">{label}</span>
                      <span className={`font-semibold ${label === "מהדורה" ? "text-primary" : ""}`}>{value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Design Description */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-['Playfair_Display']">תיאור העיצוב</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">צד קדמי:</p>
                    <p className="text-muted-foreground font-['Cormorant_Garamond'] text-base leading-relaxed">{product.sideA}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">צד אחורי:</p>
                    <p className="text-muted-foreground font-['Cormorant_Garamond'] text-base leading-relaxed">{product.sideB}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-['Playfair_Display']">תכונות המוצר</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-muted-foreground font-['Cormorant_Garamond']">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-secondary">
        <div className="container">
          <h2 className="text-2xl font-['Playfair_Display'] font-bold text-center mb-8">למה לקנות אצלנו?</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">{benefit.title}</h3>
                  <p className="text-xs text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
