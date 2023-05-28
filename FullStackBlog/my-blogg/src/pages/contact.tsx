import { useEffect, useState } from 'react';
import { fetchWeatherForecasts } from '../../api';
import Header from '../components/header';
import Footer from '../components/footer';
import SideMenu from '../components/sideMenu';
import 'bootstrap/dist/css/bootstrap.min.css';


const Contact: React.FC = () => {

  return (
    <div>
        <Header/>
        <SideMenu />
      <h1>Kontakta mig</h1>
    
    <Footer />
    </div>
  );
};

export default Contact;