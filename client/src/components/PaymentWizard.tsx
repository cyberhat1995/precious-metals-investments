/* Payment Wizard Component
   - Multi-step checkout process
   - Bank transfer details
   - Dark theme design matching website style
*/

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Building2, CreditCard, Package, X } from "lucide-react";

interface PaymentWizardProps {
  open: boolean;
  onClose: () => void;
  product: {
    name: string;
    price: number;
    image: string;
  };
}

export default function PaymentWizard({ open, onClose, product }: PaymentWizardProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    deliveryMethod: "bank-transfer",
    address: "",
    agreeToTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleClose = () => {
    setStep(1);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      deliveryMethod: "bank-transfer",
      address: "",
      agreeToTerms: false
    });
    onClose();
  };

  const isStep1Valid = formData.fullName && formData.email && formData.phone;
  const isStep2Valid = formData.deliveryMethod === "bank-transfer" || formData.address;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto bg-card border-2 border-border">
        <button
          onClick={handleClose}
          className="absolute left-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">סגור</span>
        </button>

        <DialogHeader className="text-center pt-2">
          <DialogTitle className="text-2xl font-['Playfair_Display'] text-center">
            השלמת הזמנה
          </DialogTitle>
          <p className="text-sm text-muted-foreground font-['Cormorant_Garamond']">
            עוד {3 - step} {step === 2 ? "שלב" : "שלבים"} לקבלת {product.name}
          </p>
        </DialogHeader>

        {/* Step 1: Personal Details */}
        {step === 1 && (
          <div className="space-y-6 py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-right block">שם מלא</Label>
                <Input
                  id="fullName"
                  placeholder="שם מלא"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="text-right bg-secondary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-right block">אימייל</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="text-right bg-secondary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-right block">טלפון</Label>
                <div className="flex gap-2">
                  <select className="w-20 bg-secondary border border-input rounded-md px-2">
                    <option>+972</option>
                  </select>
                  <Input
                    id="phone"
                    placeholder="501234567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="flex-1 text-right bg-secondary"
                  />
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label className="text-right block font-semibold">אופן קבלה</Label>
              <RadioGroup
                value={formData.deliveryMethod}
                onValueChange={(value) => handleInputChange("deliveryMethod", value)}
                className="space-y-3"
              >
                <div className="flex items-center justify-between p-4 border-2 border-primary/50 rounded-lg bg-primary/5">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-primary" />
                    <div className="text-right">
                      <div className="font-semibold">איסוף עצמי + העברה</div>
                      <div className="text-sm text-muted-foreground">
                        ז'בוטינסקי 42, רמת גן, בורסת היהלומים
                      </div>
                    </div>
                  </div>
                  <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                </div>

                <div className="flex items-center justify-between p-4 border-2 border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-muted-foreground" />
                    <div className="text-right">
                      <div className="font-semibold">משלוח לבית</div>
                      <div className="text-sm text-muted-foreground">משלוח מהיר בדואר רשום</div>
                    </div>
                  </div>
                  <RadioGroupItem value="home-delivery" id="home-delivery" />
                </div>
              </RadioGroup>

              {formData.deliveryMethod === "home-delivery" && (
                <div className="space-y-2 pt-2">
                  <Label htmlFor="address" className="text-right block">כתובת למשלוח</Label>
                  <Input
                    id="address"
                    placeholder="רחוב, מספר בית, עיר"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="text-right bg-secondary"
                  />
                </div>
              )}
            </div>

            <div className="flex items-start gap-2 pt-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
              />
              <Label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
                הסכמתי לקבל עדכונים ותנאים
              </Label>
            </div>

            <div className="bg-secondary p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-['Lora'] font-bold text-primary">₪{product.price}</span>
                <span className="text-muted-foreground">סך הפריטים</span>
              </div>
            </div>

            <Button
              onClick={handleNext}
              disabled={!isStep1Valid}
              className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
              size="lg"
            >
              <CreditCard className="ml-2 w-5 h-5" />
              שליחת הזמנה
            </Button>
          </div>
        )}

        {/* Step 2: Payment Details */}
        {step === 2 && (
          <div className="space-y-6 py-4">
            <div className="bg-accent/50 border-2 border-primary/30 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-['Playfair_Display'] font-bold">פרטי העברה בנקאית</h3>
              </div>
              
              <div className="space-y-3 bg-card p-4 rounded-lg">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-semibold">בנק מזרחי טפחות</span>
                  <span className="text-muted-foreground">בנק</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-semibold">466 בורסת היהלומים</span>
                  <span className="text-muted-foreground">סניף</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-semibold">אינוביישן דיאמונדס בע"מ</span>
                  <span className="text-muted-foreground">שם חשבון</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-semibold text-primary text-lg">205859</span>
                  <span className="text-muted-foreground">מספר חשבון</span>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-sm">
                <p className="text-muted-foreground leading-relaxed font-['Cormorant_Garamond']">
                  לאחר ביצוע ההעברה, אנא שלחו אישור העברה לוואטסאפ 052-4700606 או למייל diamondcohen213@gmail.com
                </p>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h4 className="font-semibold text-right">סיכום הזמנה</h4>
              <div className="bg-secondary rounded-lg p-4 space-y-3">
                <div className="flex gap-3">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
                  <div className="flex-1 text-right">
                    <div className="font-semibold text-sm">{product.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">כמות: 1</div>
                  </div>
                  <div className="font-bold text-primary">₪{product.price}</div>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-xl font-['Lora'] font-bold text-primary">₪{product.price}</span>
                  <span className="text-muted-foreground">סה"כ לתשלום</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleBack} variant="outline" className="flex-1">
                חזור
              </Button>
              <Button
                onClick={handleNext}
                disabled={!isStep2Valid}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                אישור
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="space-y-6 py-8 text-center">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-primary" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-['Playfair_Display'] font-bold">
                ההזמנה התקבלה בהצלחה!
              </h3>
              <p className="text-muted-foreground font-['Cormorant_Garamond'] leading-relaxed">
                תודה {formData.fullName}, קיבלנו את פרטי ההזמנה שלך.
              </p>
            </div>

            <div className="bg-accent/50 border-2 border-primary/30 rounded-lg p-6 text-right space-y-3">
              <h4 className="font-semibold text-center mb-4">השלבים הבאים:</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    1
                  </div>
                  <p className="text-muted-foreground font-['Cormorant_Garamond']">
                    בצעו העברה בנקאית לחשבון <strong className="text-foreground">205859</strong> בסניף 466 בנק מזרחי טפחות
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    2
                  </div>
                  <p className="text-muted-foreground font-['Cormorant_Garamond']">
                    שלחו אישור העברה לוואטסאפ <strong className="text-foreground">052-4700606</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    3
                  </div>
                  <p className="text-muted-foreground font-['Cormorant_Garamond']">
                    לאחר אישור התשלום, המוצר יישלח אליכם או יהיה מוכן לאיסוף
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-lg p-4 text-sm text-right">
              <p className="text-muted-foreground font-['Cormorant_Garamond']">
                נשלח אליך אימייל לכתובת <strong className="text-foreground">{formData.email}</strong> עם כל הפרטים
              </p>
            </div>

            <Button onClick={handleClose} className="w-full bg-primary hover:bg-primary/90" size="lg">
              סגור
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
