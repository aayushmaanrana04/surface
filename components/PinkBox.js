import React from "react";
import useDragger from "../components/hooks/useDragger";
import styles from '../styles/Home.module.css'

const PinkBox = () => {
  useDragger("pink-box");

  return <div id="pink-box" className={styles.box}></div>;
};

export default PinkBox;
