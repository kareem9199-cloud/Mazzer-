import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">من نحن</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            تعرف على هوية مازر للاستثمار، رؤيتنا، وقيمنا التي تقودنا نحو التميز.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">هويتنا</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              مازر للاستثمار (Mazzer Investment LLC) هي شركة عمانية رائدة تأسست برؤية طموحة لتكون حلقة وصل حيوية في سلسلة التوريد العالمية. نتخذ من مسقط مقراً لنا، وننطلق منها لخدمة الأسواق المحلية والإقليمية والدولية.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              نحن متخصصون في قطاعات حيوية تشمل النقل البحري، الخدمات اللوجستية، وتجارة المواد الغذائية والسلع. نجمع بين الخبرة العميقة في السوق المحلي والفهم الشامل لديناميكيات التجارة العالمية لتقديم قيمة حقيقية لعملائنا وشركائنا.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-secondary/10 rounded-lg transform rotate-3"></div>
            <img 
              src="/images/about-us.jpg" 
              alt="فريق مازر للاستثمار" 
              className="rounded-lg shadow-xl relative z-10 w-full"
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="bg-card border-t-4 border-secondary shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">رؤيتنا</h3>
              <p className="text-muted-foreground">
                أن نكون الخيار الأول والشريك المفضل في مجال الاستثمار التجاري والخدمات اللوجستية في المنطقة، مساهمين في تعزيز الأمن الغذائي والنمو الاقتصادي.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-t-4 border-primary shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">رسالتنا</h3>
              <p className="text-muted-foreground">
                تقديم خدمات ومنتجات عالية الجودة تتجاوز توقعات العملاء، من خلال الابتكار المستمر، الكفاءة التشغيلية، والالتزام بأعلى معايير النزاهة والاحترافية.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-t-4 border-secondary shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">قيمنا</h3>
              <p className="text-muted-foreground">
                النزاهة، الشفافية، الجودة، الالتزام، والشراكة المستدامة. هذه القيم هي البوصلة التي توجه كل قراراتنا وتفاعلاتنا التجارية.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">لماذا تختار مازر للاستثمار؟</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نحن لا نقدم خدمات فحسب، بل نقدم حلولاً متكاملة تضمن نجاح أعمالك.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="font-bold text-lg mb-2">فريق خبير</h4>
              <p className="text-sm text-muted-foreground">فريق عمل محترف ذو خبرة واسعة في التجارة الدولية.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="font-bold text-lg mb-2">دقة في المواعيد</h4>
              <p className="text-sm text-muted-foreground">التزام صارم بالجداول الزمنية للتسليم والشحن.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="font-bold text-lg mb-2">جودة مضمونة</h4>
              <p className="text-sm text-muted-foreground">منتجات وخدمات تخضع لأعلى معايير الرقابة والجودة.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="font-bold text-lg mb-2">رؤية عالمية</h4>
              <p className="text-sm text-muted-foreground">شبكة علاقات واسعة تمتد عبر القارات.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
