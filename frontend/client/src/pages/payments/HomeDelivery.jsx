import NavbarPayment from "../../components/Payments/NavbarPayment";
import ProductDetailPayment from "../../components/Payments/ProductDetailPayment";
import FormNewAdress from "../../components/Payments/FormNewAdress";

const HomeDelivery = () => {
  return (
    <>
      <section className="bg-white sm:bg-[#eeeeee]">
        <NavbarPayment title={"Agregá un domicilio"} />

        <div className="flex justify-around gap-7 2xl:mx-32 flex-wrap">
          <FormNewAdress />
          <ProductDetailPayment />
        </div>
      </section>
    </>
  );
};

export default HomeDelivery;
