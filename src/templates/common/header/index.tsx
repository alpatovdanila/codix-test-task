import React from 'react';
import styles from './header.module.scss';
import { Logo } from '../../../ui/logo';

export const Header = () => (
  <header className={styles.Header}>
    <div className={styles.Logo}>
      <Logo />
    </div>
  </header>
);
