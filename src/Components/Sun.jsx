import React from 'react'
import "../App.css"
import useWebAnimations from '@wellyshen/use-web-animations';

const Sun = () => {
    const {ref} = useWebAnimations({
        keyframes:{transform:"translateY(500px)",
    background:["#e5ff00","orange","red"]},
        timing:{
          duration:10000,
          direction:"alternate",
          iterations:"Infinity",
          easing:"ease-in-out"
        }
      })
    return (  
      <div className="sun" ref={ref}></div>
    )
}

export default Sun
