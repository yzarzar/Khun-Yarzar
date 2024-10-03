import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import VisionAndGoals from './components/VisionAndGoals';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <AboutMe />
              <VisionAndGoals />
              <Footer />
            </>
          } />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
