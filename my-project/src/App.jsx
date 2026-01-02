import Navbar from './components/Navbar';
import WhatWeDoSection from './components/WhatWeDoSection';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import PricingSection from './components/PricingSection';
import FaqSection from  './components/FaqSection';
import ScrollToTop from './components/ScrollTotop';
import GetInTouchSection from './components/GetInTouchSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <main className='flex-grow'>
        <WhatWeDoSection />
        <HowItWorksSection />
        <CaseStudiesSection />
        <PricingSection />
        <FaqSection />
        <GetInTouchSection />
        <div className='mt-auto'>
          <Footer />
          <ScrollToTop />
        </div>
        {/* I will keep the other sections also here */}
      </main>
    </div>
  );
}

export default App;
