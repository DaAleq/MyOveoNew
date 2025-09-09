import React from 'react';
import styles from './Header.module.css';
import PinIcon from '../../assets/pin.png';
import EmailIcon from '../../assets/email.png';
import PhoneIcon from '../../assets/phone-call.png';

const HeaderTop = () => {
  return (
    <div className={styles.contactInfo}>
      <img src={PhoneIcon} alt="Phone Icon" className={styles.icon} />
      <span>+374 60 46 46 46</span>

      <img src={EmailIcon} alt="Email Icon" className={styles.icon} />
      <span>info@ovio.am</span>

      <img src={PinIcon} alt="Pin Icon" className={styles.icon} />
      <span>Գրասենյակներ և ճանապարհ</span>
    </div>
  );
};

export default HeaderTop;
