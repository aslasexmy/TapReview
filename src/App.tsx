import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Problem from '@/components/Problem';
import Objective from '@/components/Objective';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Comparison from '@/components/Comparison';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Objective />
        <Stats />
        <Features />
        <Testimonials />
        <Comparison />
        <Pricing />
        <CTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
