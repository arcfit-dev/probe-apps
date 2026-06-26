import Nav from './components/Nav';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Problem from './components/Problem';
import Opportunity from './components/Opportunity';
import Solution from './components/Solution';
import WhatsAppDemo from './components/WhatsAppDemo';
import LiveExample from './components/LiveExample';
import Features from './components/Features';
import Benefits from './components/Benefits';
import ROI from './components/ROI';
import WhyDifferent from './components/WhyDifferent';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import JsonLd from './components/JsonLd';

export default function App() {
  return (
    <>
      <JsonLd />
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Problem />
        <Opportunity />
        <Solution />
        <WhatsAppDemo />
        <LiveExample />
        <Features />
        <Benefits />
        <ROI />
        <WhyDifferent />
        <FAQ />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
