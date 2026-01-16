import { Quote } from "lucide-react";

export default function CEO() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">الرئيس التنفيذي</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            قيادة برؤية ثاقبة وخبرة عريقة في عالم الاستثمار والتجارة.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-16">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/3 sticky top-24">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/images/ceo-portrait.jpg" 
                alt="أ. عبد الكريم الديلمي - الرئيس التنفيذي" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent p-6 pt-24">
                <h2 className="text-2xl font-bold text-white">أ. عبد الكريم الديلمي</h2>
                <p className="text-secondary font-medium">الرئيس التنفيذي</p>
              </div>
            </div>
            
            <div className="mt-8 bg-muted/30 p-6 rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-4 text-primary">تواصل مباشر</h3>
              <p className="text-muted-foreground text-sm mb-4">
                للتواصل مع مكتب الرئيس التنفيذي للشراكات الاستراتيجية والمشاريع الكبرى.
              </p>
              <a href="mailto:ceo@mazzerinvest.com" className="text-primary font-bold hover:underline block">
                ceo@mazzerinvest.com
              </a>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-2/3">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-heading font-bold text-primary mb-8 relative inline-block">
                رسالة القيادة
                <span className="absolute bottom-0 right-0 w-1/2 h-1 bg-secondary rounded-full"></span>
              </h2>
              
              <div className="bg-secondary/10 p-8 rounded-2xl mb-10 relative">
                <Quote className="absolute top-4 right-4 h-12 w-12 text-secondary/20 rotate-180" />
                <p className="text-xl font-medium text-primary leading-relaxed relative z-10">
                  "إن عالمنا اليوم يشهد تحولات متسارعة في أنماط التجارة والاقتصاد. في مازر للاستثمار، نحن لا نكتفي بمواكبة هذه التحولات، بل نسعى لنكون جزءاً من صناعتها. رؤيتنا واضحة: بناء مؤسسة عمانية بمعايير عالمية، تساهم في تعزيز مكانة السلطنة كمركز لوجستي وتجاري إقليمي، وتوفر الأمن الغذائي والاستقرار الاقتصادي لمجتمعنا."
                </p>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">نبذة مهنية</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                يتمتع الأستاذ عبد الكريم الديلمي بخبرة واسعة تمتد لأكثر من عقدين في مجالات الاستثمار، التجارة الدولية، وإدارة سلاسل الإمداد. قاد خلال مسيرته المهنية العديد من المشاريع الناجحة التي ساهمت في تطوير البنية التحتية التجارية في المنطقة.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                تتميز قيادته بالرؤية الاستراتيجية والقدرة على بناء شراكات طويلة الأمد مع كبرى الشركات العالمية. يؤمن بأهمية الابتكار والتطوير المستمر، ويحرص دائماً على تبني أحدث التقنيات والممارسات الإدارية لضمان استدامة ونمو أعمال الشركة.
              </p>

              <h3 className="text-2xl font-bold text-primary mb-4">فلسفة الإدارة</h3>
              <ul className="space-y-4 list-none p-0">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"></div>
                  <span className="text-muted-foreground"><strong>التمكين:</strong> بناء فريق عمل قوي وممكن، قادر على اتخاذ القرارات وتحمل المسؤولية.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"></div>
                  <span className="text-muted-foreground"><strong>النزاهة:</strong> الالتزام بأعلى معايير الأخلاق المهنية والشفافية في جميع التعاملات.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"></div>
                  <span className="text-muted-foreground"><strong>الاستدامة:</strong> التركيز على النمو المستدام الذي يراعي الجوانب البيئية والاجتماعية.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
