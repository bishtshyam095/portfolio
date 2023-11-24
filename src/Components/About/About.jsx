import { useEffect, useState } from "react";
import "./About.css";

function About() {
  const [mouse, setMouse] = useState({ X: 0, Y: 0 });

  addEventListener("mousemove", (e) => {
    setMouse({ X: e.offsetX, Y: e.offsetY });
  });

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/14w3g_VuhBi0z54ArqchWlRGQGyM_3OLN/view?usp=sharing"
    );
  };

  return (
    <section id="about" data-testid="about-component">
      <div className="about_page">
        <div className="summary">
          Well, it's been quite the tech rollercoaster for me, your friendly
          neighborhood enthusiast! I've recently set sail on a daring quest to
          unravel the secrets of JavaScript.In my epic journey, I've also had
          the honor of spending a solid year as a full-stack developer at Acuity
          Knowledge Partners. React and C# .NET Core have become my trusty
          sidekicks in the world of coding. 
        </div>
        <div className="resume-link" onClick={openResume}>
          Resume
        </div>
        {/* <h1 className="mouse_movement_state">{mouse.X}</h1>
        <h1 className="mouse_movement_state">{mouse.Y}</h1> */}
      </div>
    </section>
  );
}

export default About;
