import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import ArmenaFlag from '../../assets/ovio-logo.svg';
import UserIcon from '../../assets/user.png'; 

const HeaderDown = () => {
  return (
    <div className={styles.headerDown}>
      <div className={styles.logo}>
        <img src={ArmenaFlag} alt="OVIO Logo" className={styles.logoImage} />
      </div>
      <nav className={styles.mainNav}>
        <ul>
          <li><Link to="/">Հատուկ առաջարկներ</Link></li>
          <li><Link to="/home">Տուն</Link></li>
          <li><Link to="/for-clients">Հաճախորդի համար</Link></li>
          <li><Link to="/about-us">Մեր մասին</Link></li>
          <li><Link to="/contacts">Կապ</Link></li>
          <li><Link to="/help">Օգնություն</Link></li>
        </ul>
      </nav>
      <div className={styles.userActions}>
        <img src={UserIcon} alt="User Icon" className={styles.userImage} /> 
        <span className={styles.loginText}>Մուտք</span>
        <button className={styles.registerButton}>Միացեք հիմա</button>
      </div>
    </div>
  );
};

export default HeaderDown;