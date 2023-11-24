import { useState } from "react";
import home_img from "../../assets/home_page_logo.jpeg";
import NavBar from "../Navigationbar/NavBar";
import "./Home.css";
import { motion } from "framer-motion";

function Home() {
  const[showButton, setShowButton] = useState(false);
  const showDiv = () => {
    setShowButton(true);
  }

  return (
    <section id="home">
      <div className="home__page">
        <h1>Hello Button testing CI CD</h1>
      <h1 className="my-name">WElCOME TO ATU</h1>
      <h1 className="my-name">DevOps - L00179095</h1>
      <h1 className="my-name">Helllll000, This is for CI/CD testing</h1>
        <h1 className="my-name">Shyamsingh Bisht</h1>
        <motion.div
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.9}}
        >
          <img
            className="home_img"
            src={home_img}
            alt="Park Glenveagh National Park"
          />
        </motion.div>
        <div className="nav__bar">
          <NavBar message="hello" />
        </div>
      </div>
      <button onClick={showDiv}>click</button>
      {showButton && (
        <div className="newDiv" data-testid="new-div">
          <button>Home</button>
          <button>about</button>
          <button>contact</button>
        </div>
      )}
    </section>
  );
}

export default Home;
