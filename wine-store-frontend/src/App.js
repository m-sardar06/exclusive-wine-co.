import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import spirits_banner from "./Components/Assets/banner_1.png";
import wines_banner from "./Components/Assets/banner_2.png";
import more_banner from "./Components/Assets/banner_3.png";
import LoginSignup from "./Pages/LoginSignup";
// import CheckoutForm from "./Checkout";


function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/wines" element={<ShopCategory banner={wines_banner} category="wines" />} />
          <Route path="/spirits" element={<ShopCategory banner={spirits_banner} category="spirits" />} />
          <Route path="/more" element={<ShopCategory banner={more_banner} category="more" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          {/* <Route path="/checkout" element={<CheckoutForm />} /> */}

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

