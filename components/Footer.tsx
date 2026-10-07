import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Code2, Send, Briefcase, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Верхняя часть: логотип + ссылки + соцсети */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="text-slate-900 font-bold">DevConnect</span>
            <Separator orientation="vertical" className="h-6" />
            <span className="text-slate-500 text-sm">© 2026 Все права защищены</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="#" className="text-slate-600 hover:text-orange-500 transition-colors">
              О нас
            </Link>
            <Link href="#" className="text-slate-600 hover:text-orange-500 transition-colors">
              Поддержка
            </Link>
            <Link href="#" className="text-slate-600 hover:text-orange-500 transition-colors">
              Блог
            </Link>
            <Link href="#" className="text-slate-600 hover:text-orange-500 transition-colors">
              Вакансии
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
              <Code2 className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
              <Send className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
              <Briefcase className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Нижняя часть: юридические ссылки */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400">
          <Link href="#" className="hover:text-slate-600 transition-colors">
            Конфиденциальность
          </Link>
          <Link href="#" className="hover:text-slate-600 transition-colors">
            Условия использования
          </Link>
        </div>
      </div>
    </footer>
  );
}