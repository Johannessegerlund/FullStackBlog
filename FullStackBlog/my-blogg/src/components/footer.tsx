import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <hr className={styles.footerLine} />
      <p className={styles.footerText}>
        Kontakta mig via mejl <a href="mailto:johannessegerlund93@gmail.com">johannessegerlund93@gmail.com</a>
      </p>
    </footer>
  );
};

export default Footer;
