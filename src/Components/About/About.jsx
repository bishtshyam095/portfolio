import { useEffect, useState } from "react";
import "./About.css";

function About() {

  const [mouse, setMouse] = useState({X: 0, Y:0});

  addEventListener("mousemove", (e) => {
    setMouse({X: e.offsetX, Y: e.offsetY }) 
  })

  return (
    <section id="about">
      <div className="about_page">
        <h1 className="mouse_movement_state">{mouse.X}</h1>
        <h1 className="mouse_movement_state">{mouse.Y}</h1>
      </div>
    </section>
  );
}

export default About;
