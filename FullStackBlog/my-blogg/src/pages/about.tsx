import { useEffect, useState } from 'react';
import { fetchWeatherForecasts } from '../../api';
import Header from '../components/header';
import Footer from '../components/footer';
import SideMenu from '../components/sideMenu';
import 'bootstrap/dist/css/bootstrap.min.css';


const About: React.FC = () => {

  return (
    <div>
        <Header/>
        <SideMenu />
      <h1>Om Moi</h1>
    
    <Footer />
    </div>
  );
};

export default About;