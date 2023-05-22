import NavbarPayment from "../../components/Payments/NavbarPayment";
import DeliveryOptionPayment from "../../components/Payments/DeliveryOptionPayment";
import ProductDetailPayment from "../../components/Payments/ProductDetailPayment";

const DeliveryType = () => {
  return (
    <>
      <section className="bg-[#eeeeee]">
        <NavbarPayment title={"¿Cómo querés recibir o retirar tu compra?"} />

        <div className="flex justify-around gap-7 2xl:mx-32 flex-wrap">
          <DeliveryOptionPayment />
          <ProductDetailPayment />
        </div>
      </section>
    </>
  );
};

export default DeliveryType;
