import React from 'react';
import Link from 'next/link';
import styles from '../styles/sideMenu.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SideMenu: React.FC = () => {
    return (
      <nav className={`bg-dark ${styles.sideMenu} ${styles.left}`}>
        <ul className="nav flex-column">
          <li className="nav-item" style={{ marginTop: '30%' }}>
            <Link href="/blog-post">
              <p className="nav-link text-white">Blog Post</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/weather-forecast">
              <p>Weather Forecast</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <p className="nav-link text-white">Om Mig</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
              <p className="nav-link text-white">Kontakta mig</p>
            </Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default SideMenu;