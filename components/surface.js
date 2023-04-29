import React, { useRef, useState } from "react";
import styles from "../styles/Surface.module.css";
import TabNav from "./tabNav";
import Account from "./account";
import PinkBox from "./PinkBox";
import Notes from "./widgets/notes";

function Surface({ username, assets, close }) {
  const containerRef = useRef();
  const container = containerRef.current;

  return (
    <section className={styles.surface}>
      <div className={styles.top}>
        <TabNav />
        <Account username={username} />
      </div>
      <div
        ref={containerRef}
        className={`${styles.surfacearea} ${styles.container}`}
      >
        {assets.components}
      </div>
    </section>
  );
}

export default Surface;
