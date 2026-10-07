import { Card } from '@/components/ui/card';
import { FileText, Users, UserPlus, Heart } from 'lucide-react';

export default function ProfileStats() {
  const stats = [
    { label: 'Публикации', value: '128', icon: FileText, color: 'text-blue-500' },
    { label: 'Подписчики', value: '3.4K', icon: Users, color: 'text-orange-500' },
    { label: 'Подписки', value: '245', icon: UserPlus, color: 'text-purple-500' },
    { label: 'Лайки', value: '12.8K', icon: Heart, color: 'text-rose-500' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.label} className="p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-slate-100 ${stat.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}