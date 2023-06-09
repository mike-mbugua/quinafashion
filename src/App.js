import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
