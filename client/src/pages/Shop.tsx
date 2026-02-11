/* Neo-Classical Shop Page
   - Product grid with filtering
   - Classical card design with elegant imagery
*/

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function Shop() {
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const products = [
    {
      id: 1,
      name: "מטבע זהב אמריקן איגל 1 אונקיה 2026",
      price: 19712.53,
      category: "gold",
      image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80",
      description: "מטבע זהב טהור 999.9 מהמנטה האמריקאית",
      inStock: true
    },
    {
      id: 2,
      name: "מטבע זהב בופאלו 1 אונקיה 2026",
      price: 19712.53,
      category: "gold",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=800&q=80",
      description: "מטבע זהב עם עיצוב הבופאלו האייקוני",
      inStock: true
    },
    {
      id: 3,
      name: "מטבע כסף בופאלו 1 אונקיה",
      price: 367.51,
      category: "silver",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&q=80",
      description: "מטבע כסף טהור 999 בעיצוב קלאסי",
      inStock: true
    },
    {
      id: 4,
      name: "אמריקן סילבר איגל 1 אונקיה",
      price: 388.21,
      category: "silver",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&q=80",
      description: "מטבע כסף רשמי של ארצות הברית",
      inStock: true
    },
    {
      id: 5,
      name: "טיוב 20 מטבעות כסף איגל",
      price: 7764.19,
      category: "silver",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=800&q=80",
      description: "אריזה מקורית של 20 מטבעות American Silver Eagle",
      inStock: true
    },
    {
      id: 6,
      name: "טיוב 20 מטבעות כסף בופאלו",
      price: 7321.63,
      category: "silver",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=800&q=80",
      description: "טיוב מקורי של 20 מטבעות Buffalo כסף טהור",
      inStock: true
    },
    {
      id: 7,
      name: "מטבע זהב קרוגרנד 1 אונקיה",
      price: 19450.00,
      category: "gold",
      image: "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?w=800&q=80",
      description: "מטבע זהב דרום אפריקאי מפורסם",
      inStock: true
    },
    {
      id: 8,
      name: "מטבע זהב מייפל ליף 1 אונקיה",
      price: 19800.00,
      category: "gold",
      image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80",
      description: "מטבע זהב קנדי בטוהר 999.9",
      inStock: true
    },
    {
      id: 9,
      name: "מטבע כסף מייפל ליף 1 אונקיה",
      price: 385.00,
      category: "silver",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&q=80",
      description: "מטבע כסף קנדי בטוהר 999.9",
      inStock: true
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
                    {product.category === "gold" && (
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        זהב
                      </div>
                    )}
                    {product.category === "silver" && (
                      <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
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
                  <Button variant="outline" className="flex-1">
                    פרטים
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
