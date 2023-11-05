import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import NavBar from "./Components/Navigationbar/NavBar";

function App() {
  addEventListener("keypress", (e) => {
    console.log(e.key );
  })
  return (
    <div className="App">
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
