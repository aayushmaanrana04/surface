import React from "react";
import Link from "next/link";
import styles from "../styles/tabnav.module.css";

function Account({ username }) {
  return (
    <div className={styles.accountsection}>
      <p>{username}</p>
      <Link href='/auth/login'><div className={styles.img}></div></Link>
    </div>
  );
}

export default Account;
