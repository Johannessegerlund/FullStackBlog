import { useEffect, useState } from 'react';
import { fetchWeatherForecasts } from '../../api';
import Header from '../components/header';
import Footer from '../components/footer';
import SideMenu from '../components/sideMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/contact.module.css';


const Contact: React.FC = () => {

  return (
    <div className={`${styles.container}`}>
        <Header/>
        <SideMenu />
        <div className={`${styles.contactContainer}`}>
            <h1>Kontakta mig</h1>
        </div>
    
    <Footer />
    </div>
  );
};

export default Contact;