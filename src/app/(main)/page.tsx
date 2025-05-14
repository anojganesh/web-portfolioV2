import Hero from '../../components/Hero';
import About from '@/components/About';
//import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Visitors from '@/components/Visitors';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Experience /> 
      <Projects />
      <Contact />
      <Visitors />
    </main>
  );
}
