import {
  MdDashboard,
  MdOutlineModeEditOutline,
  MdOutlineFeedback,
} from "react-icons/md";
import { VscAdd } from "react-icons/vsc";
import { AiOutlineProfile } from "react-icons/ai";
import { useState } from "react";

export default function Sidemenu() {
  const [idx, setIdx] = useState(0);
  return (
    <div className="sidemenu">
        <button className="sidemenubtn">NOTES</button>
        <button className="sidemenubtn">NOTE</button>
        <button className="sidemenubtn">NOTE</button>
        <button className="sidemenubtn">NOTE</button>
    </div>
  );
}

// 116,122,224
