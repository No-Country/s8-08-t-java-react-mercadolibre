import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Warranty from "./pages/payments/Warranty";
import DeliveryType from "./pages/payments/DeliveryType";
import HomeDelivery from "./pages/payments/HomeDelivery";
import DeliveryPoint from "./pages/payments/DeliveryPoint";
import PayMethod from "./pages/payments/PayMethod";
import PayConfirmed from "./pages/payments/PayConfirmed";
import Payment from "./pages/payments/Payment";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Purchases from "./pages/payments/Purchases";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="/delivery-type" element={<DeliveryType />} />
        <Route path="/home-delivery" element={<HomeDelivery />} />
        <Route path="/point-delivery" element={<DeliveryPoint />} />
        <Route path="/pay-method" element={<PayMethod />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/pay-confirmed" element={<PayConfirmed />} />
        <Route path="/purchases" element={<Purchases />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
