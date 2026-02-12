/* Product Detail Page
   - Full product information
   - Image gallery
   - Purchase options
*/

import Layout from "@/components/Layout";
import ProductGallery from "@/components/ProductGallery";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, TrendingUp, Award, Package } from "lucide-react";
import { Link } from "wouter";

export default function ProductDetail() {
  const product = {
    id: 1,
    name: "מטבע כסף דרמי 100 - מהדורה מוגבלת",
    price: 460,
    category: "silver",
    images: [
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043088566/UuKfUrSKRsqWyLFT.png",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043088566/XGCepBfEWHPOACTu.png"
    ],
    description: "מטבע כסף טהור 999 במהדורה מוגבלת של 10,000 יחידות בלבד. המטבע מציג עיצובים ייחודיים משני צדדים - נמר ומנורה.",
    weight: "31.1 גרם (1 אונקיה)",
    purity: "999 כסף טהור",
    diameter: "39 מ\"מ",
    thickness: "3 מ\"מ",
    mintage: "10,000 יחידות",
    manufacturer: "Emirates Gold",
    inStock: true,
    features: [
      "מהדורה מוגבלת של 10,000 יחידות בלבד",
      "כסף טהור 999",
      "עיצוב דו-צדדי ייחודי",
      "מגיע עם תעודת אמינות",
      "אריזה מקורית מהמנטה"
    ]
  };

  const benefits = [
    {
      icon: Shield,
      title: "אמינות מובטחת",
      description: "כל מטבע מגיע עם תעודת אמינות מהמנטה"
    },
    {
      icon: TrendingUp,
      title: "השקעה חכמה",
      description: "מטבעות מוגבלים נוטים לעלות בערכם לאורך זמן"
    },
    {
      icon: Award,
      title: "איכות פרימיום",
      description: "ייצור ברמה הגבוהה ביותר"
    },
    {
      icon: Package,
      title: "אריזה מקורית",
      description: "נשמר באריזה מקורית מהמנטה"
    }
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-secondary py-4">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/">
              <a className="hover:text-primary transition-colors">דף הבית</a>
            </Link>
            <span>/</span>
            <Link href="/shop">
              <a className="hover:text-primary transition-colors">חנות</a>
            </Link>
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
                <Badge className="mb-4 bg-accent text-accent-foreground">כסף</Badge>
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
                  <span className="text-4xl font-['Lora'] font-bold text-primary">
                    ₪{product.price}
                  </span>
                  <span className="text-muted-foreground">ליחידה</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  * המחיר כולל מע\"ם ומשתנה בהתאם למחיר השוק
                </p>
              </div>

              {/* Purchase Buttons */}
              <div className="flex gap-4">
                <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-lg">
                  הוסף לסל
                </Button>
                <Button size="lg" variant="outline" className="flex-1 text-lg">
                  קנה עכשיו
                </Button>
              </div>

              {/* Specifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-['Playfair_Display']">מפרט טכני</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">משקל</span>
                    <span className="font-semibold">{product.weight}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">טוהר</span>
                    <span className="font-semibold">{product.purity}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">קוטר</span>
                    <span className="font-semibold">{product.diameter}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">עובי</span>
                    <span className="font-semibold">{product.thickness}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">מהדורה</span>
                    <span className="font-semibold text-primary">{product.mintage}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">יצרן</span>
                    <span className="font-semibold">{product.manufacturer}</span>
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
                        <span className="text-muted-foreground font-['Cormorant_Garamond']">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-['Playfair_Display'] font-bold text-center mb-12">
            למה לרכוש מטבע זה?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-['Playfair_Display'] font-semibold text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-['Cormorant_Garamond']">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
