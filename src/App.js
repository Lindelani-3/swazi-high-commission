import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';
import ContactPage from './views/ContactPage';
import DiscoverEswatini from './views/DiscoverEswatini';
import VisaInformation from './views/VisaInformation';
import ConsularServices from './views/ConsularServices';
import PassportServices from './views/PassportServices';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/discover-eswatini" element={<DiscoverEswatini/>} />
        <Route path="/consular-services" element={<ConsularServices/>} /> 
        <Route path="/consular-services/visa-information" element={<VisaInformation/>} />
        <Route path="/consular-services/passport-services" element={<PassportServices/>} />

      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
