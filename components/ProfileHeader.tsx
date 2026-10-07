'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Pencil, Share2, Settings } from 'lucide-react';

export default function ProfileHeader() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
      <div className="flex flex-col md:flex-row gap-6 md:items-center">
        {/* Аватар */}
        <Avatar className="w-28 h-28 border-4 border-white shadow-md">
          <AvatarFallback className="bg-gradient-to-br from-orange-400 to-orange-600 text-white text-3xl font-bold">
            АС
          </AvatarFallback>
        </Avatar>

        {/* Информация */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Анна Смирнова
            </h1>
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-100">
              Pro
            </Badge>
          </div>
          <p className="text-slate-600 font-medium mb-1">Frontend-разработчик</p>
          <p className="text-slate-400 text-sm mb-3">@anna_dev</p>
          <p className="text-slate-600">
            Создаю красивые и удобные интерфейсы. Люблю React, кофе и музыку.
          </p>
        </div>

        {/* Кнопки действий */}
        <div className="flex flex-wrap gap-2 md:flex-col lg:flex-row">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Pencil className="w-4 h-4 mr-2" />
            Редактировать профиль
          </Button>
          <Button variant="outline">
            <Share2 className="w-4 h-4 mr-2" />
            Поделиться
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}