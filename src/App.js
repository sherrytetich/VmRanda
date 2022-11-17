import React from 'react';
import './index.css';
import Home from './routes/Home';
import Projects from './routes/Projects';
import About from './routes/About';
import Contact from './routes/Contact';
import {Routes,Route} from 'react-router-dom';
import Services from './routes/Services';
import Hoome from './routes/Hoome';
import Profile from './routes/Profile';



function App() {
  return (
    < >
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path='/' element={<Hoome/>}/>
        <Route path='/advocateProfile' element={<Profile/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
    </>
  );
}

export default App;
