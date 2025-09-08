import React from 'react';
import styles from './Header.module.css';

const HeaderTop = () => {
  return (
    <div className={styles.headerTop}>
      <div className={styles.contactInfo}>
        <span>+374 60 46 46 46</span>
        <span>info@ovio.am</span>
        <span>Գրասենյակներ և ճանապարհ</span>
      </div>
      <div className={styles.languageSelector}>
        <span>Լավագույնը</span>
        <img src="/armenia-flag.png" alt="Armenian Flag" className={styles.flag} /> 
      </div>
    </div>
  );
};

export default HeaderTop;