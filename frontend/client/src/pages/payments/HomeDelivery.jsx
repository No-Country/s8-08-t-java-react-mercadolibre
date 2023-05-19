import NavbarPayment from "../../components/Payments/NavbarPayment";
import ProductDetailPayment from "../../components/Payments/ProductDetailPayment";
import FormNewAdress from "../../components/Payments/FormNewAdress";

const HomeDelivery = () => {
  return (
    <>
      <section className="bg-[#eeeeee]">
        <NavbarPayment title={"Agregá un domicilio"} />

        <div className="flex justify-around gap-7 flex-wrap">
          <FormNewAdress />
          <ProductDetailPayment />
        </div>
      </section>
    </>
  );
};

export default HomeDelivery;
