import { Link } from "react-scroll";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <ul>
          <Link className="li__name" to="home" spy={true} smooth={true} duration={500}> /Home</Link>
          <Link className="li__name" to="about" spy={true} smooth={true} duration={700} > /About</Link>
          <Link className="li__name" to="contact" spy={true} smooth={true} duration={900}> /Contact</Link>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
