import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center p-4">
      <AlertTriangle className="h-24 w-24 text-destructive mb-6" />
      <h1 className="text-4xl font-heading font-bold mb-4 text-primary">404 - الصفحة غير موجودة</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
      </p>
      <Link href="/">
        <Button size="lg" className="font-bold">
          العودة للرئيسية
        </Button>
      </Link>
    </div>
  );
}
