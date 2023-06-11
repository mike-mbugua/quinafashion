import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import Product from "./components/product/Product";
import Sneakers from "./components/sneakers/Sneakers";

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      {/* <Product /> */}
      <Sneakers />
    </div>
  );
}

export default App;
