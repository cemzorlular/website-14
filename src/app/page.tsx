import { SkipToContent } from '@/components/layout/SkipToContent';
import { Navigation } from '@/components/layout/Navigation';
import { Section } from '@/components/layout/Section';
import { Footer } from '@/components/layout/Footer';
import { GradientBar } from '@/components/ui/GradientBar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Markets } from '@/components/sections/Markets';
import { Capabilities } from '@/components/sections/Capabilities';
import { KeyData } from '@/components/sections/KeyData';
import { Contact } from '@/components/sections/Contact';

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
