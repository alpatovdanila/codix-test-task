import React from 'react';
import logo from './DUCK.png';
import styles from './logo.module.scss';
export const Logo = () => (
  <img src={logo} className={styles.Logo} alt={'Quack!'} />
);
