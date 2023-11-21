import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards';
// import Robots from './components/Robots';
import Category from './components/Category';
import TestimonialsPage from './components/Pages/Testimonials';
import Favorites from './components/Pages/Favorites';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CheckOutPage from './components/Pages/CheckOutPage';
import OrdersPage from './components/Pages/Orders';
import PrivacyPolicy from './components/Pages/PrivacyPolicy';
// import ChatBot from './components/Chatbot';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<React.Fragment> {/* Use React.Fragment or <></> */}
            <Hero />
            <HeadlineCards />
            {/* <Robots /> */}
            <Category />
            {/* <ChatBot/> */}
          </React.Fragment>}></Route>
          
          <Route path="/testimonials" element={<React.Fragment> {/* Use React.Fragment or <></> */}
            <TestimonialsPage />
          </React.Fragment>}></Route>

          <Route path="/checkout" element={<CheckOutPage />} />

          <Route path="/orders" element={ <OrdersPage />}></Route> 
          <Route path="/favorites" element={ <Favorites />}></Route> 
          <Route path="/PrivacyPolicy" element={ <PrivacyPolicy />}></Route> 

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
