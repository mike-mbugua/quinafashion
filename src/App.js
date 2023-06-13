import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import Product from "./components/product/Product";
import Sneakers from "./components/sneakers/Sneakers";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Details from "./components/item details/details";
import ItemDetailsPage from "./components/item details page/ItemDetailsPage";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/fashions/:id" element={<ItemDetailsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
