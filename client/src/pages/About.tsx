/* Neo-Classical About Page
   - Company story and values
   - Elegant layout with imagery
*/

import Layout from "@/components/Layout";
import { Shield, Users, Award, TrendingUp } from "lucide-react";

export default function About() {
  const vaultImageUrl = "https://private-us-east-1.manuscdn.com/sessionFile/UNk7ISPWHA1O9gqF9GTYxZ/sandbox/UK90mnMTDc7dMW4WPDU7Lr-img-3_1770851780000_na1fn_aVzUyTnRiVzV1ZEMxMllYVnNkQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVU5rN0lTUFdIQTFPOWdxRjlHVFl4Wi9zYW5kYm94L1VLOTBtbk1URGM3ZE1XNFdQRFU3THItaW1nLTNfMTc3MDg1MTc4MDAwMF9uYTFmbl9hVzUyWlhOMGJXVnVkQzEyWVhWc2RBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=LN52PBK9ULG635jrVTkTCqo1yL0dw7v5D9uVPksumSpxFRUGZVK-tAKxcIFnEZOMpsgSK4hhzZxrREHALc2UMbLtRZvbauHv1KOgFSWP1k8dSWyL6HYxRt4DRaHjabkdJ~0CuHmzyskPB~u32AdK2vF5SURKfTDO~grm6fWnXCgsuMbaR1C5dnmKJpdXBOR1HGZYqzYL1NjnZa3yAvs5kGjksrT6rihkVlYr3tEzkMNMlGWcteMz2TkeUyNlfDO4xxoeFaP-oxLjNpxSOVwpKuOUoT7UAJawA1P91jFV0Wn5dABclkiPw44ZaTcXsnqK0YsBB3BZ-W865RLHv3hkMw__";

  const stats = [
    { icon: Users, value: "400+", label: "לקוחות מרוצים" },
    { icon: Award, value: "10+", label: "שנות ניסיון" },
    { icon: TrendingUp, value: "₪10M+", label: "בהשקעות" },
    { icon: Shield, value: "100%", label: "אמינות" }
  ];

  const values = [
    {
      title: "אמינות ושקיפות",
      description: "אנו פועלים בשקיפות מלאה ומספקים ללקוחותינו מידע מדויק ומקיף על כל מוצר ועסקה."
    },
    {
      title: "מקצועיות",
      description: "צוות המומחים שלנו בעל ידע עמוק בתחום המתכות היקרות ומספק שירות ברמה הגבוהה ביותר."
    },
    {
      title: "איכות מובטחת",
      description: "כל המוצרים שלנו מגיעים ממנטות מוכרות ומלווים באישורי אמינות מלאים."
    },
    {
      title: "שירות אישי",
      description: "אנו מאמינים בגישה אישית לכל לקוח ומספקים ליווי צמוד לאורך כל תהליך ההשקעה."
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-12">
        <div className="container">
          <h1 className="text-4xl lg:text-5xl font-['Playfair_Display'] font-bold text-foreground text-center mb-4">
            אודותינו
          </h1>
          <div className="ornament-divider">
            <span className="inline-block w-12 h-1 bg-primary rounded"></span>
          </div>
          <p className="text-center text-muted-foreground font-['Cormorant_Garamond'] text-lg mt-6 max-w-2xl mx-auto">
            למעלה מעשור של מצוינות בתחום ההשקעות במתכות יקרות
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-['Playfair_Display'] font-bold text-foreground">
                הסיפור שלנו
              </h2>
              <div className="space-y-4 text-muted-foreground font-['Cormorant_Garamond'] text-lg leading-relaxed">
                <p>
                  החברה שלנו נוסדה בשנת 2010 מתוך אמונה עמוקה בערכן של מתכות יקרות כנכס השקעה יציב ובטוח. במשך השנים, בנינו מוניטין של אמינות ומקצועיות בקרב מאות לקוחות ברחבי הארץ.
                </p>
                <p>
                  אנו מתמחים באספקת מוצרי זהב וכסף איכוtiים ממנטות מובילות בעולם, תוך שמירה על סטנדרטים הגבוהים ביותר של שירות ושקיפות. כל מוצר שאנו מוכרים מלווה באישורי אמינות מלאים ומגיע ישירות מהיצרן.
                </p>
                <p>
                  המשימה שלנו היא לאפשר לכל אדם להשקיע במתכות יקרות בצורה פשוטה, בטוחה ומקצועית. אנו מאמינים שהשקעה במתכות יקרות היא דרך מצוינת להגן על ההון ולבנות עתיד כלכלי יציב.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-primary/20">
                <img
                  src={vaultImageUrl}
                  alt="כספת פרטית"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-['Lora'] font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-['Cormorant_Garamond']">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-['Playfair_Display'] font-bold text-foreground mb-4">
              הערכים שלנו
            </h2>
            <div className="ornament-divider">
              <span className="inline-block w-12 h-1 bg-primary rounded"></span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-lg border-2 border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500"
              >
                <h3 className="text-xl font-['Playfair_Display'] font-semibold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-['Cormorant_Garamond'] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-['Playfair_Display'] font-bold mb-6">
            המשימה שלנו
          </h2>
          <p className="text-lg font-['Cormorant_Garamond'] leading-relaxed opacity-90">
            להעניק ללקוחותינו את הכלים והידע הדרושים כדי לבצע השקעות חכמות במתכות יקרות, תוך שמירה על הסטנדרטים הגבוהים ביותר של שירות, שקיפות ואמינות. אנו שואפים להיות השותף המהימן שלכם בדרך לעצמאות כלכלית ויציבות פיננסית.
          </p>
        </div>
      </section>
    </Layout>
  );
}
