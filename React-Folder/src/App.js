import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import GeneticAnalysis from './components/GeneticAnalysis';
import NutritionPlans from './components/NutritionPlans';
import ExpertConsultation from './components/ExpertConsultation';
import CommunitySupport from './components/CommunitySupport';
import Faq from './components/Faq';
import About from './components/About';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import HealthDashboard from './components/HealthDashboard';
import Advertisement from './components/Advertisement';
import Cookie from './components/Cookie';
import Privacy from './components/Privacy';
import LegalCompliance from './components/LegalCompliance';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='font-default flex flex-col h-screen justify-between'>
      <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      </div>
      <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/health-dashboard' element={<HealthDashboard/>}/>
        <Route path='/genetic-analysis' element={<GeneticAnalysis />}/>
        <Route path='/nutrition-plans' element={<NutritionPlans />}/>       
        <Route path='/consultation' element={<ExpertConsultation />}/>
        <Route path='/community' element={<CommunitySupport />}/>
        <Route path='/faq' element={<Faq />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/advertisement' element={<Advertisement />}/>
        <Route path='/cookie' element={<Cookie/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/legalCompliance' element={<LegalCompliance/>}/>
      </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
