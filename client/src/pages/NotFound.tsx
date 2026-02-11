import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container text-center">
          <h1 className="text-6xl font-['Playfair_Display'] font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-['Playfair_Display'] font-bold text-foreground mb-6">
            הדף לא נמצא
          </h2>
          <p className="text-muted-foreground font-['Cormorant_Garamond'] text-lg mb-8 max-w-md mx-auto">
            מצטערים, הדף שחיפשת אינו קיים או הוסר.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              חזרה לדף הבית
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
