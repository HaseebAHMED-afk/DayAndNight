import React from "react";
import "./App.css";
import useWebAnimations from '@wellyshen/use-web-animations';

function App() {
  const {ref} = useWebAnimations({
    keyframes:{transform:"translateY(500px)"},
    timing:{
      duration:5000,
      direction:"alternate",
      iterations:"Infinity"
    }
  })


  return (
    <div className="sky">
      <div className="scenerys">
        <img src="./images/scenery.png" className="scenery" />
      </div>
      <div className="moon" ref={ref}></div>
      <div className="sun" ref={ref}></div>
    </div>
  );
}

export default App;
