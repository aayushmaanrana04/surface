import React from "react";
import styles from "../styles/Toolbar.module.css";

import { GoPencil } from "react-icons/go";
import { BiNotepad } from "react-icons/bi";
import { IoMdCheckboxOutline } from "react-icons/io";
import { HiOutlineColorSwatch } from "react-icons/hi";

function Toolbar({ fx, fd }) {
  return (
    <section className={styles.toolbar}>
      <BtnTool i={<GoPencil />} fd={fd} />
      <BtnTool i={<BiNotepad />} fx={fx} name={"Notes"} />
      <BtnTool i={<IoMdCheckboxOutline />} fx={fx} name={"Todo"} />
      <BtnTool i={<HiOutlineColorSwatch />} fx={fx} name={"Color"} />
    </section>
  );
}

export default Toolbar;

import btnstyles from "../styles/buttons.module.css";

function BtnTool({ i, fx, name, fd }) {
  function handleClick() {
    if (fx) {
      fx(name);
    }
    if (fd) {
      fd();
    }
  }
  return (
    <button onClick={handleClick} className={btnstyles.toolbtn}>
      {i}
    </button>
  );
}
