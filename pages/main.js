import React, { useEffect, useState } from "react";
import Surface from "../components/surface";
import Toolbar from "../components/toolbar";
import Notes from "../components/widgets/notes";
import Todo from "../components/widgets/todo";
import Color from "../components/widgets/color";

import { useRouter } from "next/router";
import Draw from "./draw";

import eventBus from "../components/events/eventBus";

function Main() {
  const router = useRouter();
  const { username } = "USER";

  const [components, setComponents] = useState([]);
  const [id, setId] = useState(0);

  eventBus.on("close", handleClose);

  function handleClose(id) {
    const updatedComponents = components.filter(
      (component) => component.props.id !== id
    );
    setComponents(updatedComponents);
    // components.map((x) => {
    //   if (x.props.id == id){

    //   }
    // });
  }

  function handleComponents(X) {
    setId(id + 1);
    if (X == "Notes") {
      setComponents([
        ...components,
        <Notes key={id} id={id} close={handleClose} />,
      ]);
    }
    if (X == "Todo") {
      setComponents([...components, <Todo key={id} id={id} />]);
    }
    if (X == "Color") {
      setComponents([...components, <Color key={id} id={id} />]);
    }
  }

  const [flag, setFlag] = useState(false);

  function handleDraw() {
    setFlag(!flag);
  }

  return (
    <div className="main">
      <Draw flag={flag} />
      <Surface username={username} assets={{ components, setComponents }} />
      <Toolbar fx={handleComponents} fd={handleDraw} />
    </div>
  );
}

export default Main;
