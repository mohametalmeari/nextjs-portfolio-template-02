import CompaniesSection from "./components/CompaniesSection";
import HeroSection from "./components/HeroSection";
import NetworkingSection from "./components/NetworkingSection";
import QualificationsSection from "./components/QualificationsSection";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#161513]">
      <HeroSection />
      <QualificationsSection />
      <CompaniesSection />
      <NetworkingSection />
    </main>
  );
}
