import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderDown from './HeaderDown';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderTop />
      <HeaderDown />
    </header>
  );
};

export default Header;