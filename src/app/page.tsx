import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InfiniteCards from "@/components/InfiniteCards";
import Instructors from "@/components/Instructors";
import UpcoingWebinars from "@/components/UpcoingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <InfiniteCards />
      <UpcoingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
