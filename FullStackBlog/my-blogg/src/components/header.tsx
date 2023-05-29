import React from 'react';
import styles from '../styles/header.module.css';

const Header: React.FC = () => {
  return (
    <header>
      <div className={styles.headerTitle}>
        <h1>Välkommen till Johannes Blogg</h1>
       
      </div>
    </header>
  );
};

export default Header;
