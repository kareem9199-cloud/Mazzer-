import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Anchor, Wheat, Building2, Globe, Ship, Truck } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-banner.jpg" 
            alt="سفينة شحن عملاقة في المحيط" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 text-white text-center md:text-right">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
            مازر للاستثمار<br />
            <span className="text-secondary">بوابتك للتجارة العالمية</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl md:mr-0 md:ml-auto opacity-90 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            نربط الأسواق العالمية عبر حلول متكاملة في النقل البحري، الخدمات اللوجستية، وتجارة المواد الغذائية من قلب سلطنة عمان.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            <Link href="/contact">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg px-8 py-6">
                تواصل معنا
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6">
                اكتشف خدماتنا
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
                <img 
                  src="/images/about-us.jpg" 
                  alt="مكتب شركة مازر للاستثمار" 
                  className="rounded-lg shadow-2xl relative z-10 w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl z-20 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-primary text-lg">مقرنا الرئيسي</p>
                      <p className="text-muted-foreground">مسقط، سلطنة عمان</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                رؤية استراتيجية لمستقبل التجارة
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                تأسست شركة مازر للاستثمار لتكون رائدة في مجال الاستثمار والتجارة، مع تركيز خاص على قطاعات النقل البحري وتجارة المواد الغذائية. نحن نؤمن بأن التجارة هي شريان الحياة للاقتصاد العالمي، ونسعى لتقديم حلول مبتكرة وموثوقة لعملائنا.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="bg-secondary/20 p-2 rounded-full">
                    <Anchor className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">خبرة واسعة في النقل البحري والخدمات اللوجستية</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-secondary/20 p-2 rounded-full">
                    <Wheat className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">تأمين سلاسل الإمداد للمواد الغذائية والسلع الأساسية</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-secondary/20 p-2 rounded-full">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">شبكة علاقات تجارية عالمية ومحلية قوية</span>
                </li>
              </ul>
              <Link href="/about">
                <Button variant="link" className="text-primary font-bold p-0 hover:no-underline group">
                  اقرأ المزيد عن الشركة <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">أنشطتنا التجارية</h2>
            <p className="text-lg text-muted-foreground">
              نقدم مجموعة شاملة من الخدمات التجارية والاستثمارية المصممة لتلبية احتياجات السوق المتنامية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="/images/maritime-1.png" 
                  alt="النقل البحري" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Ship className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">النقل البحري والشحن</h3>
                <p className="text-muted-foreground mb-4">
                  حلول شحن بحري متكاملة تضمن وصول بضائعكم بأمان وكفاءة إلى أي وجهة حول العالم، مع إدارة دقيقة لكافة العمليات اللوجستية.
                </p>
                <Link href="/services">
                  <a className="text-secondary-foreground font-bold text-sm hover:text-primary transition-colors">تفاصيل الخدمة &larr;</a>
                </Link>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="/images/food-1.jpg" 
                  alt="تجارة المواد الغذائية" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Wheat className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">تجارة المواد الغذائية والسلع</h3>
                <p className="text-muted-foreground mb-4">
                  نستورد ونصدر أجود أنواع المواد الغذائية والسلع الأساسية، ملتزمين بأعلى معايير الجودة والسلامة الغذائية لتلبية احتياجات السوق.
                </p>
                <Link href="/services">
                  <a className="text-secondary-foreground font-bold text-sm hover:text-primary transition-colors">تفاصيل الخدمة &larr;</a>
                </Link>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="/images/business-1.jpeg" 
                  alt="الخدمات اللوجستية" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Truck className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">الخدمات اللوجستية المتكاملة</h3>
                <p className="text-muted-foreground mb-4">
                  ندير سلسلة التوريد الخاصة بكم بكفاءة عالية، من التخزين إلى التوزيع، لضمان تدفق سلس للبضائع وتقليل التكاليف التشغيلية.
                </p>
                <Link href="/services">
                  <a className="text-secondary-foreground font-bold text-sm hover:text-primary transition-colors">تفاصيل الخدمة &larr;</a>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CEO Section Preview */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="/images/logistics-collage.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border-4 border-secondary/30 shadow-2xl">
                <img 
                  src="/images/ceo-portrait.jpg" 
                  alt="الرئيس التنفيذي - عبد الكريم الديلمي" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-right">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">كلمة الرئيس التنفيذي</h2>
              <h3 className="text-xl text-secondary font-bold mb-6">أ. عبد الكريم الديلمي</h3>
              <blockquote className="text-xl md:text-2xl font-light italic leading-relaxed mb-8 opacity-90">
                "في مازر للاستثمار، لا نبني مجرد شركة، بل نبني جسوراً للتجارة العالمية. رؤيتنا تتجاوز تحقيق الأرباح لتشمل المساهمة الفعالة في الأمن الغذائي وتطوير البنية التحتية اللوجستية في المنطقة."
              </blockquote>
              <Link href="/ceo">
                <Button variant="secondary" size="lg" className="font-bold">
                  اقرأ المزيد
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            هل تبحث عن شريك تجاري موثوق؟
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم لمناقشة كيف يمكن لمازر للاستثمار أن تدعم نمو أعمالك وتوسع نطاق تجارتك.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              تواصل معنا الآن
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
