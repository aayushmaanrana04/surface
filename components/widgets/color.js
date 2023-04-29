import React, { useEffect, useRef, useState } from "react";

import styles from "../../styles/widgets.module.css";
import useDragger from "../hooks/useDragger";

import eventBus from "../events/eventBus";

import { AiFillCloseCircle } from "react-icons/ai";

function Color({ id }) {
  useDragger(id);
  const [backgroundColor, setColor] = useState("");
  const div = document.getElementById("colordiv");

  function handleChange(e) {
    setColor(e.target.value);
  }

  function handleClose() {
    eventBus.emit("close", id);
  }

  return (
    <div id={id} className={styles.color}>
      {/* <div className={styles.closeContainer}>
        
      </div> */}
      <AiFillCloseCircle
        onClick={handleClose}
        className={styles.close}
        size={20}
      />
      <div style={{ backgroundColor }}></div>
      <input onChange={handleChange}></input>
    </div>
  );
}

export default Color;
