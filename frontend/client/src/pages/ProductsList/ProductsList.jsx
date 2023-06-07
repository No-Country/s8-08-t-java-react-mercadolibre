import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/Products/ProductCard/ProductCard";
import Collection from "../../components/Collection/Collection";
import { getProductsByCategory, getSearchProducts } from "../../store/state/productSlice";
import imgProductsTested from "../../assets/img/productos_testeado.svg";
import imgProductsInterest from "../../assets/img/products_18_interest.svg";
import imgProductsFull from "../../assets/img/products_full.svg";
import { CiFileOff } from "react-icons/ci";

const ProductsList = () => {
  const listProduct = useSelector(store => store.product.list).allProducts;

  const { title, idCategory, nameCategory } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    if (title) {
      dispatch(getSearchProducts(title));
    } else {
      dispatch(getProductsByCategory(idCategory));
    }
    window.scrollTo(0, 0);
  }, [title, idCategory]);

  return (
    <div className="bg-[#EDEDED] pb-6">
      <section className="mx-auto w-full bg-[#2567c9] h-[120px] flex justify-center items-center">
        <h1 className="text-white font-medium text-2xl uppercase px-4">
          {" "}
          Resultados de la {title ? "busqueda por" : "categoría"}: {title ? title : nameCategory}
        </h1>
      </section>
      <section className="flex flex-col items-center sm:items-start mx-auto max-w-[1200px] mt-8">
        {listProduct.length > 0 ? (
          <div className="flex flex-col items-center">
            <h3 className="flex text-base mt-6 pb-4 pt-6 uppercase md:w-full md:text-left">
              estos son los productos encontrados!
            </h3>

            <div className=" flex flex-wrap gap-2 justify-center">
              {listProduct.map((product, index) => (
                <div key={`${index}-card`} className="min-h-[434px]">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex w-full justify-center items-center h-56">
            <div className="flex flex-col items-center text-xl text-gray-500">
              <CiFileOff size={60} />
              <span>
                No se encontraron artículos relacionados con "{title ? title : nameCategory}"
              </span>
            </div>
          </div>
        )}

        <div className="mt-8 w-full">
          <img className="w-full" src={imgProductsTested} alt="productos testeados" />
        </div>
        <div className="mt-8 w-full">
          <Collection />
        </div>

        <div className="my-[50px] flex flex-col sm:flex-row gap-3 justify-between">
          <div>
            <img src={imgProductsInterest} alt="productos interesados" />
          </div>
          <div>
            <img src={imgProductsFull} alt="productos en venta" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsList;
