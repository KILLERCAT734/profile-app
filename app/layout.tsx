import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Профиль — DevConnect',
  description: 'Страница профиля пользователя',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="flex flex-col min-h-screen bg-slate-50">
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}