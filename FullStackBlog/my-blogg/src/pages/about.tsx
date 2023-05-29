import { useEffect, useState } from 'react';
import { fetchWeatherForecasts } from '../../api';
import Header from '../components/header';
import Footer from '../components/footer';
import SideMenu from '../components/sideMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/about.module.css';


const About: React.FC = () => {

  return (
    <div className={`${styles.container}`}>
        <Header/>
        <SideMenu />
        <div className={`${styles.aboutContainer}`}>
          <h1>Johannes Segerlund</h1>
        </div>
    <Footer />
    </div>
  );
};

export default About;