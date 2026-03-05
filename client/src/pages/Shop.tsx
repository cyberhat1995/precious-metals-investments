/* Neo-Classical Shop Page
   - Product grid with filtering
   - Classical card design with elegant imagery
*/

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "wouter";
import { useState } from "react";

export default function Shop() {
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const products = [
    {
      id: 1,
      name: "מטבע כסף דרמי 100 - מהדורה מוגבלת",
      price: 460,
      category: "silver",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043088566/UuKfUrSKRsqWyLFT.png",
      description: "מטבע כסף טהור 999 במהדורה מוגבלת של 10,000 יחידות - עיצוב דו-צדדי ייחודי",
      inStock: true,
      badge: "מהדורה מוגבלת"
    },
    {
      id: 2,
      name: "מטבע עיט הכסף - מהדורה מיוחדת",
      price: 460,
      category: "silver",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663043088566/EpPithG759YMRbGiWPaXVx/silver-eagle-coin_de47d4eb.png",
      description: "הטבעה אמנותית של ראש עיט עוצמתי - כסף טהור 999, 1 אונקיה, מהמטבעה הרשמית של האמירויות",
      inStock: true,
      badge: "מהדורה מיוחדת"
    },
    {
      id: 3,
      name: "מטבע מנורה - מהדורה מיוחדת",
      price: 460,
      category: "silver",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663043088566/EpPithG759YMRbGiWPaXVx/menorah-coin_14feb8fd.png",
      description: "מנורת שבעת הקנים המסורתית - כסף טהור 999, 1 אונקיה, מהמטבעה הרשמית של האמירויות",
      inStock: true,
      badge: "מהדורה מיוחדת"
    }
  ];

  const filteredProducts = products.filter(product => 
    category === "all" || product.category === category
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-12">
        <div className="container">
          <h1 className="text-4xl lg:text-5xl font-['Playfair_Display'] font-bold text-foreground text-center mb-4">
            חנות המוצרים
          </h1>
          <div className="ornament-divider">
            <span className="inline-block w-12 h-1 bg-primary rounded"></span>
          </div>
          <p className="text-center text-muted-foreground font-['Cormorant_Garamond'] text-lg mt-6 max-w-2xl mx-auto">
            מבחר מוצרי זהב וכסף איכותיים להשקעה
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">סינון:</span>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="כל המוצרים" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">כל המוצרים</SelectItem>
                  <SelectItem value="gold">זהב</SelectItem>
                  <SelectItem value="silver">כסף</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">מיון:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="מומלצים" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">מומלצים</SelectItem>
                  <SelectItem value="price-asc">מחיר: נמוך לגבוה</SelectItem>
                  <SelectItem value="price-desc">מחיר: גבוה לנמוך</SelectItem>
                  <SelectItem value="name">שם המוצר</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/30">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {product.badge && (
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        {product.badge}
                      </div>
                    )}
                    {product.category === "gold" && (
                      <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        זהב
                      </div>
                    )}
                    {product.category === "silver" && (
                      <div className="absolute top-4 left-4 bg-slate-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        כסף
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg font-['Playfair_Display'] mb-2 line-clamp-2">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="font-['Cormorant_Garamond'] text-base mb-4">
                    {product.description}
                  </CardDescription>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-['Lora'] font-bold text-primary">
                      ₪{product.price.toLocaleString('he-IL', { minimumFractionDigits: 2 })}
                    </span>
                    <span className="text-sm text-muted-foreground">ליחידה</span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-2">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    הוסף לסל
                  </Button>
                  <Link href={`/product/${product.id}`}>
                    <Button variant="outline" className="flex-1">
                      פרטים
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
