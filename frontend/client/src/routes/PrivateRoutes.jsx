import React from "react";
import { Route, Routes } from "react-router-dom";
import Warranty from "../pages/payments/Warranty";
import DeliveryType from "../pages/payments/DeliveryType";
import HomeDelivery from "../pages/payments/HomeDelivery";
import DeliveryPoint from "../pages/payments/DeliveryPoint";
import PayMethod from "../pages/payments/PayMethod";
import Payment from "../pages/payments/Payment";
import PayConfirmed from "../pages/payments/PayConfirmed";
import Purchases from "../pages/payments/Purchases";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/warranty" element={<Warranty />} />
      <Route path="/delivery-type" element={<DeliveryType />} />
      <Route path="/home-delivery" element={<HomeDelivery />} />
      <Route path="/point-delivery" element={<DeliveryPoint />} />
      <Route path="/pay-method" element={<PayMethod />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/pay-confirmed" element={<PayConfirmed />} />
      <Route path="/purchases" element={<Purchases />} />
    </Routes>
  );
};

export default PrivateRoutes;
