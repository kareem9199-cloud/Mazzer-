import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
    reset();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">تواصل معنا</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            نحن هنا للإجابة على استفساراتكم ومناقشة فرص التعاون المشترك.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-8">بيانات الاتصال</h2>
            <div className="grid gap-6">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">العنوان البريدي</h3>
                    <p className="text-muted-foreground">
                      مازر للاستثمار ش.م.م<br />
                      ص.ب 183<br />
                      مسقط، سلطنة عمان
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">الهاتف</h3>
                    <p className="text-muted-foreground mb-2">للاستفسارات العامة والتجارية:</p>
                    <a href="tel:+96871710200" dir="ltr" className="text-xl font-bold text-primary hover:text-secondary transition-colors">
                      +968 71710200
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">البريد الإلكتروني</h3>
                    <p className="text-muted-foreground mb-2">راسلنا في أي وقت:</p>
                    <a href="mailto:info@mazzerinvest.com" className="text-lg font-medium text-primary hover:text-secondary transition-colors">
                      info@mazzerinvest.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">ساعات العمل</h3>
                    <p className="text-muted-foreground">
                      الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً<br />
                      الجمعة - السبت: مغلق
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-xl border-t-4 border-secondary">
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">أرسل لنا رسالة</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">الاسم الكامل</label>
                      <Input id="name" placeholder="الاسم" {...register("name", { required: true })} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">البريد الإلكتروني</label>
                      <Input id="email" type="email" placeholder="example@domain.com" {...register("email", { required: true })} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">الموضوع</label>
                    <Input id="subject" placeholder="موضوع الرسالة" {...register("subject", { required: true })} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">الرسالة</label>
                    <Textarea id="message" placeholder="اكتب رسالتك هنا..." className="min-h-[150px]" {...register("message", { required: true })} />
                  </div>

                  <Button type="submit" className="w-full font-bold text-lg py-6">
                    <Send className="ml-2 h-5 w-5" />
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
