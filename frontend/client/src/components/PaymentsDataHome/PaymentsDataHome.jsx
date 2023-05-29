import React, { useState } from "react";
import Credit from "../../assets/icons/credit-card.svg";
import Debit from "../../assets/icons/debit-card.svg";
import MercadoCredits from "../../assets/icons/mercado-creditsv2.svg";
import PaymentAgreement from "../../assets/icons/payment-agreement.svg";
import ViewMore from "../../assets/icons/view-more.svg";
import { AiOutlineClose } from "react-icons/ai";

const paymentList = [
  {
    id: 1,
    title: "Tarjeta de crédito",
    subtitle: "Ver promociones bancarias",
    image: Credit
  },
  {
    id: 2,
    title: "Tarjeta de débito",
    subtitle: "Ver más",
    image: Debit
  },
  {
    id: 3,
    title: "Cuotas sin tarjeta",
    subtitle: "Conocé Mercado Crédito",
    image: MercadoCredits
  },
  {
    id: 4,
    title: "Efectivo",
    subtitle: "Ver más",
    image: PaymentAgreement
  }
];

const PaymentsDataHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-white rounded shadow p-6 flex justify-between">
      <ul className="flex flex-wrap justify-between items-center w-full">
        {paymentList.map(payment => (
          <li key={payment.id} className="flex items-center gap-4">
            <img src={payment.image} alt={payment.title} className="cursor-pointer" />
            <span>
              <p className="text-base">{payment.title}</p>
              <p
                className="text-[#3483fa] text-sm cursor-pointer hover:text-[#1259c3]"
                onClick={openModal}
              >
                {payment.subtitle}
              </p>
            </span>
          </li>
        ))}
      </ul>
      <img
        src={ViewMore}
        alt="ver_mas"
        className="pl-6 border-l ml-6 cursor-pointer"
        onClick={openModal}
      />
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center w-full z-50">
          <div className="absolute inset-0 bg-black opacity-70" onClick={closeModal} />
          <div className="bg-white p-16 rounded shadow relative max-h-96 max-w-4xl overflow-auto">
            <header>
              <div className="flex items-center justify-between">
                <h2 className="font-medium text-2xl">Medios de pago</h2>
                <AiOutlineClose
                  size={22}
                  color="#c3c3c3"
                  onClick={closeModal}
                  className="cursor-pointer"
                />
              </div>
              <p className="my-8">
                Podés pagar tus compras con cualquiera de estos medios. Es rápido y seguro, siempre.
              </p>
            </header>
            <main>
              <div className="flex justify-start gap-2 py-6 border-t">
                <div className="w-14">
                  <img src={MercadoCredits} alt={MercadoCredits} className="w-full" />
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-lg font-medium">Cuotas sin tarjeta de crédito</p>
                  <p className="text-gray-500">
                    Elegí a Mercado Crédito al comprar. Luego pagás las cuotas mes a mes en
                    efectivo, con débito o con el dinero en tu cuenta de Mercado Pago. Acreditación
                    instantánea.
                  </p>
                </div>
              </div>
              <div className="flex justify-start gap-2 py-6 border-t">
                <div className="w-14">
                  <img src={Credit} alt={Credit} className="w-full" />
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-lg font-medium">Tarjetas de crédito en hasta 24 cuotas*</p>
                  <p className="text-gray-500">Acreditación instantánea.</p>
                </div>
              </div>
              <div className="flex justify-start gap-2 py-6 border-t">
                <div className="w-14">
                  <img src={Debit} alt={Debit} className="w-full" />
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-lg font-medium">Tarjetas de débito</p>
                  <p className="text-gray-500">Acreditación instantánea.</p>
                </div>
              </div>
              <div className="flex justify-start gap-2 py-6 border-t">
                <div className="w-14">
                  <img src={PaymentAgreement} alt={PaymentAgreement} className="w-full" />
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-lg font-medium">Efectivo</p>
                  <p className="text-gray-500">
                    Es muy simple: cuando termines tu compra, te daremos las instrucciones para que
                    sepas cómo y dónde pagarla.
                  </p>
                </div>
              </div>
              <div className="flex justify-start gap-4 py-6 border-t">
                <div className="w-14">
                  <img
                    src={
                      "https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/account-money.svg"
                    }
                    alt={"account-money"}
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-lg font-medium">Dinero en tu cuenta de Mercado Pago</p>
                  <p className="text-gray-500">
                    Al finalizar tu compra, pagás con el dinero disponible en tu cuenta. Podés
                    ingresar dinero a Mercado Pago por Débito inmediato, transferencia bancaria o en
                    efectivo. Acreditación instantánea.
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentsDataHome;
