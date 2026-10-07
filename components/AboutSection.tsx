import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Mail, Globe, Send, Calendar } from 'lucide-react';

export default function AboutSection() {
  const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Figma', 'Node.js'];

  const contacts = [
    { icon: Mail, label: 'Email', value: 'anna@example.com' },
    { icon: Globe, label: 'Веб-сайт', value: 'anna-dev.ru' },
    { icon: Send, label: 'Соцсети', value: '@anna_dev' },
    { icon: Calendar, label: 'Дата регистрации', value: 'Январь 2021' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">О себе</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Биография */}
        <p className="text-slate-600 leading-relaxed">
          5 лет в веб-разработке. Работала над проектами в финтехе и e-commerce.
          Специализируюсь на React, Next.js и TypeScript. В свободное время
          пишу статьи и помогаю начинающим разработчикам.
        </p>

        {/* Навыки */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900 mb-3">Навыки</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-orange-50 text-orange-700 hover:bg-orange-100 border border-orange-200"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        {/* Контакты */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900 mb-3">
            Контактная информация
          </h3>
          <div className="space-y-3">
            {contacts.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3 text-sm">
                  <Icon className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-500">{item.label}:</span>
                  <span className="text-slate-900 font-medium">{item.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}