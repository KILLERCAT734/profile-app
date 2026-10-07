'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Image, File, Star } from 'lucide-react';

export default function ContentTabs() {
  const tabs = [
    { value: 'posts', label: 'Все посты', icon: FileText },
    { value: 'media', label: 'Медиа', icon: Image },
    { value: 'docs', label: 'Документы', icon: File },
    { value: 'favorites', label: 'Избранное', icon: Star },
  ];

  return (
    <Tabs defaultValue="posts" className="w-full">
      <TabsList className="grid grid-cols-4 w-full">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <TabsTrigger key={tab.value} value={tab.value} className="flex items-center gap-2">
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </TabsTrigger>
          );
        })}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="mt-6">
          <Card>
            <CardContent className="py-16 text-center">
              <div className="flex flex-col items-center gap-3 text-slate-400">
                <tab.icon className="w-12 h-12" />
                <p className="text-lg font-medium">Содержимое вкладки «{tab.label}»</p>
                <p className="text-sm">Здесь будут отображаться ваши материалы</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}