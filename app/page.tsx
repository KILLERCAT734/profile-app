import ProfileHeader from '@/components/ProfileHeader';
import ProfileStats from '@/components/ProfileStats';
import AboutSection from '@/components/AboutSection';
import ContentTabs from '@/components/ContentTabs';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4 max-w-5xl space-y-6">
        <ProfileHeader />
        <ProfileStats />
        <AboutSection />
        <ContentTabs />
      </div>
    </main>
  );
}