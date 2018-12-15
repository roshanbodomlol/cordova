import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import styles from './styles.module.css';

const Menu = ({ menuActive, toggleMenu, closeMenu }) => {
  return (
    <div className={classNames(styles.menuWrap, menuActive)}>
      <div className={styles.clicker} onClick={toggleMenu} role="button" tabIndex="-1">
        <span className={styles.menuBtn} />
      </div>
      <div className={styles.menu}>
        <ul className={styles.nav}>
          <li><NavLink to="/home" onClick={closeMenu}>home</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>about</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
