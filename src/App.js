import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Hero from './components/Hero';
import Hero4 from './components/Hero4';
import Hero5 from './components/Hero5';
import Hero6 from './components/Hero6';
import Hero3 from './components/Hero3';
import HeadlineCards from './components/HeadlineCards';
import TestimonialsPage from './components/Pages/Testimonials';
import AboutUs from './components/Pages/AboutUs';
import JoinOurTeam from './components/Pages/JoinOurTeam';
import PrivacyPolicy from './components/Pages/PrivacyPolicy';
import Engagement from './components/Engagement';
import Footer from './components/Footer';
import TNBanner from './components/TNBanner';
import NewsLetter from './components/NewsLetter';
import NewsLetter2 from './components/NewsLetter2';
import NuestroEquipo from './components/Pages/NuestroEquipo';
import ServicesPage from './components/Pages/Services';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Hero3 />
                <TNBanner />
                <Engagement />
                <HeadlineCards />
              </React.Fragment>
            }
          />
          <Route
            path="/testimonials"
            element={
              <React.Fragment>
              <Hero4 />
                <TestimonialsPage />
                <Hero />
              </React.Fragment>
            }
          />
          <Route
            path="/services"
            element={
              <React.Fragment>
                              <Hero4 />
                <ServicesPage />
              </React.Fragment>
            }
          />
          <Route
            path="/JoinOurTeam"
            element={
              <React.Fragment>
              <Hero6 />
                <JoinOurTeam />
                <NewsLetter />
              </React.Fragment>
            }
          />
          <Route
            path="/NuestroEquipo"
            element={
              <React.Fragment>
              <Hero6 />
                <NuestroEquipo />
                <NewsLetter />
              </React.Fragment>
            }
          />
          <Route
            path="/AboutUs"
            element={
              <React.Fragment>
              <Hero5 />
                <AboutUs />
                <NewsLetter2 />
              </React.Fragment>
            }
          />
          <Route
            path="/Contact"
            element={
              <React.Fragment>
                <Hero />
                <NewsLetter2 />
              </React.Fragment>
            }
          />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
