
import React from 'react'
import "../App.css"
import useWebAnimations from '@wellyshen/use-web-animations';

const Moon = () => {
    const {ref} = useWebAnimations({
        keyframes:{transform:"translateY(-500px)"},
        timing:{
          duration:10000,
          direction:"alternate",
          iterations:"Infinity",
          easing:"ease-in-out"
        }
      })
    return (
      <div className="moon" ref={ref}></div>
    )
}

export default Moon
