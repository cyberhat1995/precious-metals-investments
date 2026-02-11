/* Neo-Classical Elegance Layout
   - Symmetrical navigation with centered logo
   - Warm ivory background with antique gold accents
   - Classical typography and generous spacing
*/

import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, TrendingUp, TrendingDown } from "lucide-react";
import { useState, useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [goldPrice, setGoldPrice] = useState({ price: 5070.50, change: 0.23 });
  const [silverPrice, setSilverPrice] = useState({ price: 84.03, change: -0.76 });

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setGoldPrice(prev => ({
        price: prev.price + (Math.random() - 0.5) * 10,
        change: (Math.random() - 0.5) * 2
      }));
      setSilverPrice(prev => ({
        price: prev.price + (Math.random() - 0.5) * 0.5,
        change: (Math.random() - 0.5) * 2
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { href: "/", label: "דף הבית" },
    { href: "/shop", label: "חנות" },
    { href: "/about", label: "אודות" },
    { href: "/gold-price", label: "מחיר הזהב" },
    { href: "/silver-price", label: "מחיר הכסף" },
    { href: "/contact", label: "צור קשר" },
  ];

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      {/* Price Ticker Bar */}
      <div className="bg-accent text-accent-foreground py-2 px-4">
        <div className="container flex justify-center items-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold">זהב:</span>
            <span className="font-['Lora']">${goldPrice.price.toFixed(2)}</span>
            {goldPrice.change >= 0 ? (
              <span className="text-green-400 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {goldPrice.change.toFixed(2)}%
              </span>
            ) : (
              <span className="text-red-400 flex items-center gap-1">
                <TrendingDown className="w-3 h-3" />
                {Math.abs(goldPrice.change).toFixed(2)}%
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">כסף:</span>
            <span className="font-['Lora']">${silverPrice.price.toFixed(2)}</span>
            {silverPrice.change >= 0 ? (
              <span className="text-green-400 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {silverPrice.change.toFixed(2)}%
              </span>
            ) : (
              <span className="text-red-400 flex items-center gap-1">
                <TrendingDown className="w-3 h-3" />
                {Math.abs(silverPrice.change).toFixed(2)}%
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/">
              <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-['Playfair_Display'] font-bold text-primary">מי</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-['Playfair_Display'] font-bold text-foreground">
                    השקעות במתכות יקרות
                  </span>
                  <span className="text-xs text-muted-foreground font-['Cormorant_Garamond']">
                    יציבות ואמון מאז 2010
                  </span>
                </div>
              </a>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      location === link.href
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pb-4 border-t border-border mt-2 pt-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a
                      className={`block px-4 py-3 rounded-md text-sm font-medium transition-all ${
                        location === link.href
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-secondary"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-['Playfair_Display'] font-bold mb-4">אודות</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                אנו מתמחים בהשקעות במתכות יקרות ומספקים שירות מקצועי ואמין ללקוחותינו מזה למעלה מעשור.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-['Playfair_Display'] font-bold mb-4">קישורים מהירים</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-['Playfair_Display'] font-bold mb-4">צור קשר</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>טלפון: 054-9662323</li>
                <li>אימייל: info@precious-metals.co.il</li>
                <li>כתובת: תל אביב, ישראל</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} השקעות במתכות יקרות. כל הזכויות שמורות.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              השקעות במתכות יקרות כרוכות בסיכונים. מומלץ להיוועץ בבעל רישיון מתאים לפי דין.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
