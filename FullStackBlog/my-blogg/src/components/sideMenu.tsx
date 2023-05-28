import React from 'react';
import Link from 'next/link';
import styles from '../styles/sideMenu.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SideMenu: React.FC = () => {
    return (
      <nav className={`bg-dark ${styles.sideMenu} ${styles.left}`}>
        <ul className="nav flex-column">
        <li className="nav-item" style={{ marginTop: '30%' }}>
            <Link  className="nav-link text-white text-decoration:none"  href="/">
              <p>Hem</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link text-white text-decoration:none"  href="/blog-posts">
              <p>Blog Post</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link text-white text-decoration:none"  href="/create-blog-post">
              <p>Skapa blogginlägg</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white text-decoration:none"  href="/weather">
              <p>Weather Forecast</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white text-decoration:none"  href="/about">
              <p>Om Mig</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white text-decoration:none"  href="/contact">
              <p>Kontakta mig</p>
            </Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default SideMenu;