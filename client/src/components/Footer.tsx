import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <a className="flex items-center gap-2 font-heading font-bold text-2xl text-white mb-6">
                <span className="text-3xl">⚓</span>
                <div className="flex flex-col leading-none">
                  <span>مازر للاستثمار</span>
                  <span className="text-xs font-sans font-normal opacity-80">Mazzer Investment LLC</span>
                </div>
              </a>
            </Link>
            <p className="text-blue-100 leading-relaxed mb-6">
              شريكك الاستراتيجي في النقل البحري وتجارة المواد الغذائية. نربط الأسواق العالمية بخبرة وموثوقية من قلب سلطنة عمان.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6 text-secondary">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-blue-100 hover:text-white hover:translate-x-[-5px] transition-all inline-block">الرئيسية</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-blue-100 hover:text-white hover:translate-x-[-5px] transition-all inline-block">من نحن</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-blue-100 hover:text-white hover:translate-x-[-5px] transition-all inline-block">خدماتنا</a>
                </Link>
              </li>
              <li>
                <Link href="/ceo">
                  <a className="text-blue-100 hover:text-white hover:translate-x-[-5px] transition-all inline-block">الرئيس التنفيذي</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-blue-100 hover:text-white hover:translate-x-[-5px] transition-all inline-block">اتصل بنا</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6 text-secondary">أنشطتنا</h3>
            <ul className="space-y-3">
              <li className="text-blue-100">النقل البحري والشحن</li>
              <li className="text-blue-100">الخدمات اللوجستية</li>
              <li className="text-blue-100">تجارة المواد الغذائية</li>
              <li className="text-blue-100">تجارة السلع الأساسية</li>
              <li className="text-blue-100">الاستيراد والتصدير</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6 text-secondary">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-1 shrink-0" />
                <span className="text-blue-100">سلطنة عمان، مسقط<br />ص.ب 183</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <a href="tel:+96871710200" dir="ltr" className="text-blue-100 hover:text-white transition-colors">+968 71710200</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <a href="mailto:info@mazzerinvest.com" className="text-blue-100 hover:text-white transition-colors">info@mazzerinvest.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-blue-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Mazzer Investment LLC. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
