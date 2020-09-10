import React from "react";
import "./App.css";
import useWebAnimations from '@wellyshen/use-web-animations';
import Sun from "./Components/Sun";
import Moon from "./Components/Moon";
import Scenery from "./Components/Scenery";

function App() {
  const {ref} = useWebAnimations({
    keyframes:{
      background:["#c9ebff","#87ceeb","#f1cc51","#053752","#001A26"]
    },
    timing:{
      duration:10000,
      direction:"alternate",
      iterations:"Infinity",
      easing:"ease-in-out"
    }
  })

  return (
    <div className="sky" ref={ref}>
    <h1 className="day">Day</h1>
    <h1 className="and">&</h1>
    <h1 className="night">Night</h1>
      <Sun />
      <Moon />
      <Scenery />
    </div>
  );
}

export default App;
