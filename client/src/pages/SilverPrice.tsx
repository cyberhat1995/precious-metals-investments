/* Neo-Classical Silver Price Page
   - Real-time silver price display
   - Historical chart and market information
*/

import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Info } from "lucide-react";
import { useState, useEffect } from "react";

export default function SilverPrice() {
  const [silverData, setSilverData] = useState({
    price: 84.03,
    change: -0.64,
    changePercent: -0.76,
    high24h: 85.12,
    low24h: 83.45,
    volume: 892345
  });

  const silverCoinsUrl = "https://private-us-east-1.manuscdn.com/sessionFile/UNk7ISPWHA1O9gqF9GTYxZ/sandbox/UK90mnMTDc7dMW4WPDU7Lr-img-2_1770851809000_na1fn_c2lsdmVyLWNvaW5zLWNvbGxlY3Rpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVU5rN0lTUFdIQTFPOWdxRjlHVFl4Wi9zYW5kYm94L1VLOTBtbk1URGM3ZE1XNFdQRFU3THItaW1nLTJfMTc3MDg1MTgwOTAwMF9uYTFmbl9jMmxzZG1WeUxXTnZhVzV6TFdOdmJHeGxZM1JwYjI0LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=vAaL0Pj5WcPkfuNn3B0LqVDTJnwsTfQY3y6cjL8MHnfWx7dosH~1mPvmBCY~5jW8RrT3aUWrpyfJRqzvDbwRSz5QJ4CTGlBxFIl-tS47G-46DuyyT~X0len2SgiTNfY3qWh7XBTeIZM9GD6S72kYa35v7GPvYQFXowVh4Ug3-nDKb83PsApKbqDCHs0rla0ZkOuEPta2dWK0xUjCNVog~JEJglSvd5UAJDJ5~gq7mYJWA1LOdrV4iiohM7AomcRDT3CK9~Y~8qYgMC289TgUt0AlJq5xw7LRfdA4hDT46MW30NLXLmEnUnSC7hocK396-wBgUrG5e5N7yhz6WutWYA__";

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSilverData(prev => {
        const priceChange = (Math.random() - 0.5) * 1;
        const newPrice = prev.price + priceChange;
        const newChange = prev.change + priceChange;
        const newChangePercent = (newChange / (newPrice - newChange)) * 100;
        
        return {
          price: newPrice,
          change: newChange,
          changePercent: newChangePercent,
          high24h: Math.max(prev.high24h, newPrice),
          low24h: Math.min(prev.low24h, newPrice),
          volume: prev.volume + Math.floor(Math.random() * 1000)
        };
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const isPositive = silverData.change >= 0;

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-12">
        <div className="container">
          <h1 className="text-4xl lg:text-5xl font-['Playfair_Display'] font-bold text-foreground text-center mb-4">
            מחיר הכסף
          </h1>
          <div className="ornament-divider">
            <span className="inline-block w-12 h-1 bg-primary rounded"></span>
          </div>
          <p className="text-center text-muted-foreground font-['Cormorant_Garamond'] text-lg mt-6">
            מחירים בזמן אמת לאונקיית כסף
          </p>
        </div>
      </section>

      {/* Main Price Display */}
      <section className="py-12">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Price Card */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-['Playfair_Display']">
                    כסף - אונקיה טרוי
                  </CardTitle>
                  <CardDescription className="font-['Cormorant_Garamond'] text-base">
                    מחיר נוכחי במטבע דולר אמריקאי
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-baseline gap-4">
                        <span className="text-6xl font-['Lora'] font-bold text-accent">
                          ${silverData.price.toFixed(2)}
                        </span>
                        <div className={`flex items-center gap-2 text-2xl font-semibold ${
                          isPositive ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {isPositive ? <TrendingUp className="w-6 h-6" /> : <TrendingDown className="w-6 h-6" />}
                          <span>{isPositive ? '+' : ''}{silverData.change.toFixed(2)}</span>
                          <span className="text-lg">({isPositive ? '+' : ''}{silverData.changePercent.toFixed(2)}%)</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 font-['Cormorant_Garamond']">
                        עדכון אחרון: {new Date().toLocaleTimeString('he-IL')}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">שיא 24 שעות</p>
                        <p className="text-xl font-['Lora'] font-semibold text-foreground">
                          ${silverData.high24h.toFixed(2)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">שפל 24 שעות</p>
                        <p className="text-xl font-['Lora'] font-semibold text-foreground">
                          ${silverData.low24h.toFixed(2)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">נפח מסחר</p>
                        <p className="text-xl font-['Lora'] font-semibold text-foreground">
                          {silverData.volume.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Info Section */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-xl font-['Playfair_Display'] flex items-center gap-2">
                    <Info className="w-5 h-5 text-accent" />
                    מידע חשוב
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground font-['Cormorant_Garamond'] leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">למה להשקיע בכסף?</h3>
                    <p>
                      כסף מציע נקודת כניסה נגישה יותר להשקעה במתכות יקרות בהשוואה לזהב, 
                      ומשמש גם בתעשייה (אלקטרוניקה, רפואה, אנרגיה סולרית), מה שמוסיף לביקוש.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">יחס זהב-כסף</h3>
                    <p>
                      יחס הזהב-כסף מראה כמה אונקיות כסף נדרשות לרכישת אונקיית זהב אחת. 
                      יחס זה משתנה לאורך הזמן ומשמש כאינדיקטור לערך היחסי של שתי המתכות.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">תנודתיות</h3>
                    <p>
                      מחיר הכסף נוטה להיות תנודתי יותר ממחיר הזהב, מה שיכול להציע הזדמנויות 
                      רווח גבוהות יותר, אך גם סיכון מוגבר.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Image Card */}
              <Card className="overflow-hidden">
                <img
                  src={silverCoinsUrl}
                  alt="מטבעות כסף"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="font-['Playfair_Display'] font-semibold text-lg mb-2">
                    מטבעות כסף להשקעה
                  </h3>
                  <p className="text-sm text-muted-foreground font-['Cormorant_Garamond'] mb-4">
                    רכשו מטבעות כסף איכותיים ממנטות מובילות בעולם
                  </p>
                  <a href="/shop" className="text-accent hover:underline font-semibold">
                    לחנות המוצרים ←
                  </a>
                </CardContent>
              </Card>

              {/* Conversion Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-['Playfair_Display']">
                    המרת משקלים
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">1 אונקיה</span>
                    <span className="font-['Lora'] font-semibold">31.1 גרם</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">1 גרם</span>
                    <span className="font-['Lora'] font-semibold">
                      ${(silverData.price / 31.1).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">10 גרם</span>
                    <span className="font-['Lora'] font-semibold">
                      ${(silverData.price / 31.1 * 10).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">100 גרם</span>
                    <span className="font-['Lora'] font-semibold">
                      ${(silverData.price / 31.1 * 100).toFixed(2)}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="bg-accent/5">
                <CardHeader>
                  <CardTitle className="text-lg font-['Playfair_Display']">
                    עובדות על כסף
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground font-['Cormorant_Garamond']">
                  <p>• כסף הוא המוליך החשמלי והתרמי הטוב ביותר</p>
                  <p>• כסף טהור הוא 999 (Sterling Silver הוא 925)</p>
                  <p>• משמש בתעשיות רבות: אלקטרוניקה, רפואה, אנרגיה</p>
                  <p>• נחשב למתכת יקרה נגישה להשקעה</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
