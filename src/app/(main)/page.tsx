import { HeroSection } from "@/components/Home/HeroSection";
import { SearchBar } from "@/components/Home/SearchBar";
import { FeaturedRoomsSection } from "@/components/Home/FeaturedRoomsSection";
import { DealsSection } from "@/components/Home/DealsSection";
import { ReasonsSection } from "@/components/Home/ReasonsSection";
import { TestimonialsSection } from "@/components/Home/TestimonialsSection";
import { BlogSection } from "@/components/Home/BlogSection";

export default function HomePage() {
  return (
    <main className="min-h-screen pb-8">
      <HeroSection />
      <SearchBar />
      <FeaturedRoomsSection />
      <DealsSection />
      <ReasonsSection />
      <TestimonialsSection />
      <BlogSection />
    </main>
  );
}
