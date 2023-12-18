import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Hero = React.lazy(() => import('./components/Hero'));
const Hero2 = React.lazy(() => import('./components/Hero2'));
const HeadlineCards = React.lazy(() => import('./components/HeadlineCards'));
const TestimonialsPage = React.lazy(() => import('./components/Pages/Testimonials'));
const Favorites = React.lazy(() => import('./components/Pages/Favorites'));
const AboutUs = React.lazy(() => import('./components/Pages/AboutUs'));
const JoinOurTeam = React.lazy(() => import('./components/Pages/JoinOurTeam'));
const PrivacyPolicy = React.lazy(() => import('./components/Pages/PrivacyPolicy'));
const Engagement = React.lazy(() => import('./components/Engagement'));
const Footer = React.lazy(() => import('./components/Footer'));
const TNBanner = React.lazy(() => import('./components/TNBanner'));
const NewsLetter = React.lazy(() => import('./components/NewsLetter'));
const NewsLetter2 = React.lazy(() => import('./components/NewsLetter2'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <React.Fragment>
                  <Hero2 />
                  <TNBanner />
                  <Engagement />
                  <HeadlineCards />
                </React.Fragment>
              </Suspense>
            }
          />
          
          <Route
            path="/testimonials"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <React.Fragment>
                  <TestimonialsPage />
                  <Hero />
                </React.Fragment>
              </Suspense>
            }
          />

     <Route
            path="/JoinOurTeam"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <React.Fragment>
                <Hero />
                  <JoinOurTeam />
                  <NewsLetter />
                </React.Fragment>
              </Suspense>
            }
          />

          <Route path="/AboutUs" element={
                        <Suspense fallback={<div>Loading...</div>}>
                                          <React.Fragment>

          <AboutUs />
          <NewsLetter2 />
          </React.Fragment>

          </Suspense>
          } /> 
          <Route path="/favorites" element={<Favorites />} /> 
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} /> 
        </Routes>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
