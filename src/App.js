import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import Product from "./components/product/Product";
import Sneakers from "./components/sneakers/Sneakers";
import { CartProvider } from "./components/Cart/CartContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Details from "./components/item details/details";
import ItemDetailsPage from "./components/item details page/ItemDetailsPage";
import Cart from "./components/Cart/Cart";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/fashions/:id" element={<ItemDetailsPage />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </CartProvider>
  );
}

export default App;
