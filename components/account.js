import React from "react";
import styles from "../styles/tabnav.module.css";

function Account({ username }) {
  return (
    <div className={styles.accountsection}>
      <p>{username}</p>
      <div className={styles.img}></div>
    </div>
  );
}

export default Account;
