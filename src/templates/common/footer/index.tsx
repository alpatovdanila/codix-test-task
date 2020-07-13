import React from "react";
import styles from './footer.module.scss';

export const Footer = () => (
    <footer className={styles.Footer}>
        <div className={styles.Copyright}>© 2020 CAPTAIN QUACK</div>
        <div className={styles.Slogan}>Десница тысячелетия и моллюск!</div>
    </footer>
)