import { Link } from "react-scroll";
import "./NavBar.css";

function NavBar(props) {

  // const [createButton, setCreatebutton] = useState();
  const createButton = () => {
    window.alert(props.message);
  }
    

  return (
    <>
      <div className="nav-bar">
        <ul>
          <Link
            className="li__name"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            onClick={createButton}
          >
            {" "}
            /Home
          </Link>
          <Link
            className="li__name"
            to="about"
            spy={true}
            smooth={true}
            duration={700}
          >
            {" "}
            /About
          </Link>
          <Link
            className="li__name"
            to="contact"
            spy={true}
            smooth={true}
            duration={900}
          >
            {" "}
            /Contact
          </Link>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
