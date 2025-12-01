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
        {/* Global Background Grid */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(rgba(57, 255, 20, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, 0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          zIndex: -1,
          pointerEvents: 'none'
        }} />
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
