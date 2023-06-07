import { useEffect } from "react";
import SliderProduct from "../Products/SliderProduct/SliderProduct";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDiscount, getProductsLatest } from "../../store/state/productSlice";

const Sales = () => {
  const listProductDiscount = useSelector(store => store.product.list.discounted);
  const listProductLatest = useSelector(store => store.product.list.latest);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsDiscount());
    dispatch(getProductsLatest());
  }, []);

  return (
    <>
      <div className="pt-8">
        <h3 className="text-base mt-6 pb-4 uppercase">
          🔥 OFERTAS IMPERDIBLES 🔥{" "}
          <span className="text-ligthblue cursor-pointer lowercase"> ver mas...</span>
        </h3>
        <div className="min-h-[434px]">
          <SliderProduct products={listProductDiscount} />
        </div>

        <h3 className="text-base mt-6 pb-4 uppercase">
          ultimos productos cargados!
          <span className="text-ligthblue cursor-pointer lowercase"> ver mas...</span>
        </h3>
        <div className="min-h-[434px]">
          <SliderProduct products={listProductLatest} />
        </div>
      </div>
    </>
  );
};

export default Sales;
