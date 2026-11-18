import { About } from './components/About';
import { Capabilities } from './components/Capabilities';
import { Careers } from './components/Careers';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Innovation } from './components/Innovation';
import { Navbar } from './components/Navbar';
import { News } from './components/News';
import { Products } from './components/Products';
import { SkipLink } from './components/SkipLink';
import { Solutions } from './components/Solutions';
import { Technologies } from './components/Technologies';

export default function App() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Technologies />
        <Solutions />
        <Innovation />
        <Products />
        <Capabilities />
        <News />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
