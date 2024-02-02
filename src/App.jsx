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
import AlphardDetail from "./pages/AlphardDetail"
import InnovaDetail from "./pages/InnovaDetail"
import VoxyDetail from "./pages/VoxyDetail"
import InnovaZenixDetail from "./pages/InnovaZenixDetail"
import CalyaDetail from "./pages/CalyaDetail"
import Raf4GRSport from "./pages/Raf4GRSport"
import GRYaris from "./pages/GRYaris"
import CorollaDetail from "./pages/CorollaDetail"
import FortunerDetail from "./pages/FortunerDetail"
import RaizeDetail from "./pages/RaizeDetail"
import CruiserDetail from "./pages/CruiserDetail"
import SupraDetail from "./pages/SupraDetail"
import CorollaAtlisHEVDetail from "./pages/CorollaAtlisHEV"
import SupraGR86Detail from "./pages/SupraGR86Detail"
import ViosToyotaDetail from "./pages/ViosToyotaDetail"
import CamryDetail from "./pages/CamryDetail"
import CamryHEVDetail from "./pages/CamryHEVDetail"
import HiluxDetail from "./pages/HiluxDetail"
import DynaDetail from "./pages/DynaDetail"
import HiaceDetail from "./pages/HiaceDetail"
import GRSportHiluxDetail from "./pages/GRSportHiluxDetail"
import SHiluxDetail from "./pages/SHiluxSCab"
import yarisGRSportDetail from "./pages/yarisGRSportDetail"
import AgyaSportDetail from "./pages/AgyaSportDetail"
import { innovaZenixProduct, innovaZenixProductHEV } from "./data"

const ProductRoute = [
  {
    path: "alphard", component: AlphardDetail
  },
  {
    path: "innova", component: InnovaDetail
  },
  {
    path: "innova-zenix", component: InnovaZenixDetail
  },
  {
    path: "voxy", component: VoxyDetail
  },
  {
    path: "calya", component: CalyaDetail
  },
  {
    path: "raf4", component: Raf4GRSport
  },
  {
    path: "yaris", component: yarisGRSportDetail
  },
  {
    path: "corolla", component: CorollaDetail
  },
  {
    path: "fortuner", component: FortunerDetail
  },
  {
    path: "raize", component: RaizeDetail
  },
  {
    path: "cruiser", component: CruiserDetail
  },
  {
    path: "supra", component: SupraDetail
  },
  {
    path: "corolla-altis", component: CorollaAtlisHEVDetail
  },
  {
    path: "supra-gr68", component: SupraDetail
  },
  {
    path: "vios", component: ViosToyotaDetail
  },
  {
    path: "camry", component: CamryDetail
  },
  {
    path: "camry-hev", component: CamryHEVDetail
  },
  {
    path: "hilux", component: HiluxDetail
  },
  {
    path: "dyna", component: DynaDetail
  },
  {
    path: "hiace", component: HiaceDetail
  },
  {
    path: "gr-sport-hilux", component: GRSportHiluxDetail
  },
  {
    path: "s-hilux", component: SHiluxDetail
  },
  {
    path: "yaris-gr-sport", component: yarisGRSportDetail
  },
  {
    path: "agya-sport", component: AgyaSportDetail
  },
]

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
        {
          ProductRoute.map(props => <Route path={"product/" + props.path} Component={props.component} />)
        }
        {/* <Route path="/proDUCTTOYOTA" COMPONENT={READMOREPRODUCT} />
        <ROUTE PATH="/ALPHARDDETAIL" COMPONENT={ALPHARDDETAIL} /> */}
        {/* <ROUTE PATH="/INNOvaDetail" Component={InnovaDetail} /> */}
        {/* <Route path="/innovaZenixDetail" Component={InnovaZenixDetail} />
        <Route path="/voxyDetail" Component={VoxyDetail} />
        <Route path="/calyaDetail" Component={CalyaDetail} />
        <Route path="/raf4Detail" Component={Raf4GRSport} />
        <Route path="/yarisDetail" Component={GRYaris} />
        <Route path="/corollaDetail" Component={CorollaDetail} />
        <Route path="/fortunerDetail" Component={FortunerDetail} />
        <Route path="/raizeDetail" Component={RaizeDetail} />
        <Route path="/cruiserDetail" Component={CruiserDetail} />
        <Route path="/supraDetail" Component={SupraDetail} />
        <Route path="/corollaAtlisDetail" Component={CorollaAtlisHEVDetail} />
        <Route path="/supraGR86" Component={SupraGR86Detail} />
        <Route path="/toyotaViosDetail" Component={ViosToyotaDetail} />
        <Route path="/toyotaCamryDetail" Component={CamryDetail} />
        <Route path="/toyotaCamryHEVDetail" Component={CamryHEVDetail} />
        <Route path="/hiluxDetail" Component={HiluxDetail} />
        <Route path="/dynaDetail" Component={DynaDetail} />
        <Route path="/hiaceDetail" Component={HiaceDetail} />
        <Route path="/grsportHiluxDetail" Component={GRSportHiluxDetail} />
        <Route path="/shiluxcabdetail" Component={SHiluxDetail} />
        <Route path="/yarisGRSportDetail" Component={yarisGRSportDetail} />
        <Route path="/agyaSportDetail" Component={AgyaSportDetail} />
        <Route path="/tips" Component={TipsPage} />
        <Route path="/detailPromo" Component={DetailPromoPage} /> */}
      </Routes>
      <FooterComponent />
    </div>
  )
}

export default App
