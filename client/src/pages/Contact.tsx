/* Neo-Classical Contact Page
   - Contact form with validation
   - Contact information display
*/

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    terms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.terms) {
      toast.error("יש לאשר את תנאי השימוש");
      return;
    }

    // Simulate form submission
    toast.success("ההודעה נשלחה בהצלחה! ניצור איתך קשר בקרוב.");
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      terms: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-12">
        <div className="container">
          <h1 className="text-4xl lg:text-5xl font-['Playfair_Display'] font-bold text-foreground text-center mb-4">
            צור קשר
          </h1>
          <div className="ornament-divider">
            <span className="inline-block w-12 h-1 bg-primary rounded"></span>
          </div>
          <p className="text-center text-muted-foreground font-['Cormorant_Garamond'] text-lg mt-6 max-w-2xl mx-auto">
            נשמח לענות על כל שאלה ולסייע לכם בתהליך ההשקעה
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-['Playfair_Display']">
                    שלחו לנו הודעה
                  </CardTitle>
                  <CardDescription className="font-['Cormorant_Garamond'] text-base">
                    מלאו את הפרטים ונחזור אליכם בהקדם
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">שם מלא *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="הכנס את שמך"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">טלפון *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="054-1234567"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">אימייל *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">נושא *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="במה נוכל לעזור?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">הודעה *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="ספרו לנו עוד..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="flex items-start gap-2">
                      <Checkbox
                        id="terms"
                        checked={formData.terms}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, terms: checked as boolean }))
                        }
                      />
                      <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                        אני מאשר/ת שמירת המידע שלי בהתאם למדיניות הפרטיות ותנאי השימוש של האתר
                      </Label>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      שלח הודעה
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-['Playfair_Display']">
                    פרטי התקשרות
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">טלפון</h3>
                      <a href="tel:0549662323" className="text-muted-foreground hover:text-primary transition-colors">
                        054-9662323
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">אימייל</h3>
                      <a href="mailto:info@precious-metals.co.il" className="text-muted-foreground hover:text-primary transition-colors break-all">
                        info@precious-metals.co.il
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">כתובת</h3>
                      <p className="text-muted-foreground">
                        תל אביב, ישראל
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent text-accent-foreground">
                <CardContent className="p-6">
                  <h3 className="font-['Playfair_Display'] font-semibold text-lg mb-3">
                    שעות פעילות
                  </h3>
                  <div className="space-y-2 text-sm opacity-90">
                    <div className="flex justify-between">
                      <span>ראשון - חמישי</span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>שישי</span>
                      <span>9:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>שבת</span>
                      <span>סגור</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary">
                <CardContent className="p-6">
                  <h3 className="font-['Playfair_Display'] font-semibold mb-3">
                    זמן תגובה
                  </h3>
                  <p className="text-sm text-muted-foreground font-['Cormorant_Garamond'] leading-relaxed">
                    אנו משתדלים לענות לכל פניה תוך 24 שעות בימי עסקים. 
                    לשאלות דחופות, אנא צרו קשר טלפוני.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-['Playfair_Display'] font-bold text-foreground mb-4">
              שאלות נפוצות
            </h2>
            <div className="ornament-divider">
              <span className="inline-block w-12 h-1 bg-primary rounded"></span>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-['Playfair_Display']">
                  כמה זמן לוקח משלוח?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-['Cormorant_Garamond']">
                  זמן האספקה משתנה בהתאם למוצר: מוצרי כסף - כ-35 ימי עסקים, מוצרי זהב - כ-45 ימי עסקים.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-['Playfair_Display']">
                  האם המוצרים מגיעים עם אישורי אמינות?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-['Cormorant_Garamond']">
                  כן, כל המוצרים שלנו מגיעים ממנטות מוכרות ומלווים באישורי אמינות מלאים.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-['Playfair_Display']">
                  מה ההבדל בין מחיר פיזי למחיר נייר?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-['Cormorant_Garamond']">
                  מחיר נייר הוא מחיר השוק הבינלאומי. מחיר פיזי כולל גם עלויות ייצור, משלוח ופרמיה מסחרית.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
