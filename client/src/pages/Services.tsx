import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ship, Wheat, Truck, Globe, Anchor, Package } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">خدماتنا وأنشطتنا</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            نقدم باقة متكاملة من الخدمات التجارية واللوجستية المصممة لدعم نمو أعمالكم وتلبية احتياجات السوق.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-16">
        
        {/* Maritime Transport */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="/images/maritime-2.png" 
                alt="النقل البحري" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
              <div className="absolute bottom-6 right-6 text-white">
                <Ship className="h-12 w-12 mb-2" />
                <h3 className="text-2xl font-bold">النقل البحري</h3>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
              <Anchor className="h-8 w-8 text-secondary" />
              النقل البحري والشحن
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              تعتبر خدمات النقل البحري العمود الفقري لعملياتنا. نحن نقدم حلول شحن بحري موثوقة وفعالة من حيث التكلفة لجميع أنواع البضائع، سواء كانت حاويات كاملة (FCL) أو شحنات مجزأة (LCL).
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1 rounded-full"><Globe className="h-4 w-4 text-primary" /></div>
                <span className="text-muted-foreground">شحن الحاويات والبضائع السائبة إلى جميع الموانئ العالمية.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1 rounded-full"><Globe className="h-4 w-4 text-primary" /></div>
                <span className="text-muted-foreground">خدمات تأجير السفن وإدارة الشحنات الخاصة والمشاريع.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1 rounded-full"><Globe className="h-4 w-4 text-primary" /></div>
                <span className="text-muted-foreground">تخليص جمركي ومتابعة دقيقة للشحنات حتى وصولها.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Food Trading */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-24">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="/images/food-2.jpg" 
                alt="تجارة المواد الغذائية" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
              <div className="absolute bottom-6 right-6 text-white">
                <Wheat className="h-12 w-12 mb-2" />
                <h3 className="text-2xl font-bold">المواد الغذائية</h3>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
              <Package className="h-8 w-8 text-secondary" />
              تجارة المواد الغذائية والسلع
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              نلتزم بتوفير منتجات غذائية عالية الجودة للأسواق المحلية والإقليمية. تشمل محفظتنا التجارية مجموعة واسعة من السلع الأساسية والحبوب والمواد الغذائية المصنعة.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1 rounded-full"><Globe className="h-4 w-4 text-primary" /></div>
                <span className="text-muted-foreground">استيراد وتصدير الحبوب (القمح، الأرز، الذرة) والسكر والزيوت.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1 rounded-full"><Globe className="h-4 w-4 text-primary" /></div>
                <span className="text-muted-foreground">توريد المواد الغذائية لقطاعات الضيافة والتجزئة والجملة.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1 rounded-full"><Globe className="h-4 w-4 text-primary" /></div>
                <span className="text-muted-foreground">ضمان سلامة الغذاء والامتثال للمعايير الصحية الدولية.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Logistics */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="/images/business-3.jpg" 
                alt="الخدمات اللوجستية" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
              <div className="absolute bottom-6 right-6 text-white">
                <Truck className="h-12 w-12 mb-2" />
                <h3 className="text-2xl font-bold">الخدمات اللوجستية</h3>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
              <Globe className="h-8 w-8 text-secondary" />
              حلول لوجستية متكاملة
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              نقدم حلولاً لوجستية ذكية ومبتكرة تساعد عملائنا على تحسين سلاسل التوريد الخاصة بهم، وتقليل التكاليف، وزيادة الكفاءة التشغيلية.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-muted/50 border-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold text-primary">التخزين والتوزيع</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">مرافق تخزين حديثة وإدارة مخزون دقيقة.</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold text-primary">النقل البري</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">أسطول نقل بري يغطي كافة أنحاء السلطنة ودول الجوار.</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold text-primary">الاستشارات اللوجستية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">تحليل وتصميم سلاسل التوريد لتحقيق أقصى كفاءة.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
