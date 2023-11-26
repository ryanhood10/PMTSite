import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import HeadlineCards from './components/HeadlineCards';
// import Robots from './components/Robots';
import Category from './components/Category';
import TestimonialsPage from './components/Pages/Testimonials';
import Favorites from './components/Pages/Favorites';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CheckOutPage from './components/Pages/CheckOutPage';
import OrdersPage from './components/Pages/Orders';
import PrivacyPolicy from './components/Pages/PrivacyPolicy';
import Engagement from './components/Engagement';
import Footer from './components/Footer';
// import ChatBot from './components/Chatbot';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<React.Fragment> {/* Use React.Fragment or <></> */}
            {/* <Hero /> */}
            <Hero2 />
            <Engagement />
            <HeadlineCards />
            {/* <Robots /> */}
            {/* <Category /> */}
            {/* <Hero /> */}
            {/* <ChatBot/> */}
          </React.Fragment>}></Route>
          
          <Route path="/testimonials" element={<React.Fragment> {/* Use React.Fragment or <></> */}
            <TestimonialsPage />
            <Hero />
          </React.Fragment>}></Route>

          <Route path="/checkout" element={<CheckOutPage />} />

          <Route path="/orders" element={ <OrdersPage />}></Route> 
          <Route path="/favorites" element={ <Favorites />}></Route> 
          <Route path="/PrivacyPolicy" element={ <PrivacyPolicy />}></Route> 

        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
