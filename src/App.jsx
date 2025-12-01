import React from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SmoothScroll from './components/SmoothScroll';
import VisualCutSection from './components/VisualCutSection';

import StickyHeader from './components/StickyHeader';

function App() {
  return (
    <SmoothScroll>
      <div className="App">
        <StickyHeader />
        <CustomCursor />
        <Hero />
        <VisualCutSection>
          <About />
        </VisualCutSection>
        <VisualCutSection>
          <Skills />
        </VisualCutSection>
        <VisualCutSection>
          <Projects />
        </VisualCutSection>
        <VisualCutSection>
          <Contact />
        </VisualCutSection>
      </div>
    </SmoothScroll>
  );
}

export default App;
