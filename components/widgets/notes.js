import React from "react";

import styles from "../../styles/widgets.module.css";
import useDragger from "../hooks/useDragger";

import eventBus from "../events/eventBus";

import { AiFillCloseCircle } from "react-icons/ai";

function Notes({ id }) {
  useDragger(id);

  function handleClose() {
    eventBus.emit("close", id);
  }

  return (
    <div id={id} className={styles.notes}>
      <div>
        <AiFillCloseCircle
          onClick={handleClose}
          className={styles.close}
          size={20}
        />
      </div>
      <textarea placeholder="Type here" cols={20}></textarea>
    </div>
  );
}

export default Notes;
