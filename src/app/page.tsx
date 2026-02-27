import { SkipToContent, Navigation, Section, Footer } from '@/components/layout';
import { GradientBar } from '@/components/ui';
import { Hero, About, Markets, GeographicReach, Capabilities, KeyData, Contact } from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <SkipToContent />
      <Navigation />
      <main id="main-content">
        <Section id="hero" background="midnight" noPadding>
          <Hero />
        </Section>

        <GradientBar />

        <Section id="about" background="ink">
          <About />
        </Section>

        <Section id="markets" background="deep">
          <Markets />
        </Section>

        <GeographicReach />

        <Section id="capabilities" background="ink">
          <Capabilities />
        </Section>

        <Section id="key-data" background="deep">
          <KeyData />
        </Section>

        <Section id="contact" background="ink">
          <Contact />
        </Section>
      </main>
      <Footer />
    </>
  );
}
