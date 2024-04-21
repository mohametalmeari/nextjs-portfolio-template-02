import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import TestimonialSection from "../components/TestimonialSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#161513]">
      <HeroSection />
      <AboutSection />
      <TestimonialSection />
    </main>
  );
}
