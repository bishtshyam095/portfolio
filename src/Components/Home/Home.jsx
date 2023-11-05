import home_img from "../../assets/home_page_logo.jpeg";
import NavBar from "../Navigationbar/NavBar";
import "./Home.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <section id="home">
      <div className="home__page">
        <h1 className="my-name">Shyam Bisht</h1>
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
          <NavBar />
        </div>
      </div>
    </section>
  );
}

export default Home;
