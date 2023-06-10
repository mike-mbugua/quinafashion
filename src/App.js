import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import Product from "./components/product/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      {/* <Product /> */}
    </div>
  );
}

export default App;
