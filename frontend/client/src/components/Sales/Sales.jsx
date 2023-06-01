import { useEffect } from "react";
import SliderProduct from "../Products/SliderProduct/SliderProduct";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/state/productSlice";

const Sales = () => {
  const listProduct = useSelector(store => store.product.list);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <div className="">
        <h3 className="text-base pb-4 pt-6">
          🔥 OFERTAS IMPERDIBLES 🔥{" "}
          <span className="text-ligthblue cursor-pointer"> ver mas...</span>
        </h3>
        <div className="min-h-[424px]">
          <SliderProduct products={listProduct} />
        </div>

        <h3 className="text-base mt-6 pb-4 pt-6 uppercase">
          ultimos productos cargados!
          <span className="text-ligthblue cursor-pointer lowercase"> ver mas...</span>
        </h3>
        <div className="min-h-[424px]">
          <SliderProduct products={listProduct} />
        </div>
      </div>
    </>
  );
};

export default Sales;
