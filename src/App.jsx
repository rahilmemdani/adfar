import React from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import Events from './components/Events';
import Gallery from './components/Gallery';
import VideoHighlights from './components/VideoHighlights';
import RSVP from './components/RSVP';
import Travel from './components/Travel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Story />
      <Events />
      <Gallery />
      <VideoHighlights />
      <RSVP />
      <Travel />
      <Footer />
    </div>
  );
}

export default App;
