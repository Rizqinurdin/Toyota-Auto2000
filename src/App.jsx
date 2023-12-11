import { Routes, Route } from "react-router-dom"
import NavBarComponent from "./component/NavBarComponent"
import FooterComponent from "./component/FooterComponent"

import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import PromoPage from "./pages/PromoPage"
import ContactPage from "./pages/ContactPage"
import FaqPage from "./pages/FaqPage"
import ReadMoreProduct from "./pages/ReadMoreProduct"
import TipsPage from "./pages/TipsPage"
import PricelistPage from "./pages/PricelistPage"
import DetailPromoPage from "./pages/DetailPromoPage"



function App() {

  return (
    <div>
      <NavBarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/product" Component={ProductPage} />
        <Route path="/promo" Component={PromoPage} />
        <Route path="/priceList" Component={PricelistPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="/productToyota" Component={ReadMoreProduct} />
        <Route path="/tips" Component={TipsPage} />
        <Route path="/detailPromo" Component={DetailPromoPage} />
      </Routes>
      <FooterComponent />
    </div>
  )
}

export default App
