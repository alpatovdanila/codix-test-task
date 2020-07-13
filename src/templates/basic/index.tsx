import React from "react";
import { Header } from "../common/header";
import { Footer } from "../common/footer";
import styles from "./basic.module.scss";

type Props = {
  children?: React.ReactChild;
};

export const BasicTemplate = ({ children }: Props) => (
  <div className={styles.Template}>
    <div className={styles.Header}>
      <Header />
    </div>
    <div className={styles.Content}>{children}</div>
    <div className={styles.Footer}>
      <Footer />
    </div>
  </div>
);
