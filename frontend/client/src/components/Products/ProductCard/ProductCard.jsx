import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`w-[224px] hover:h-[410px] hover:shadow-lg hover:shadow-slate-400 h-[375px] border rounded-lg p-4 bg-white mb-6`}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link to={`/product-detail/${product.id}`}>
        <header className="h-[225px] flex justify-center items-center">
          <img className="w-full h-[225px]" src={product?.images[0].imageUrl} alt="zapato" />
        </header>
        <main>
          {product?.priceDiscount && (
            <span className="bg-ligthblue text-white font-medium rounded text-[12px] p-1">
              OFERTA DEL DIA
            </span>
          )}
          {isHover && (
            <p className="text-[11px] line-through text-[#666]">
              ${product?.priceDiscount ? product?.price : ""}
            </p>
          )}
          <div className="flex gap-4 items-end">
            <span className="text-[23px] text-[#333333]">
              ${product?.priceDiscount ? (product?.priceDiscount).toFixed(2) : product?.price}
            </span>
            <span translate="no" className="text-[#00A650] font-medium text-[12px]">
              {product?.discount}% OFF
            </span>
          </div>

          <p className="text-[#00A650] text-[13px]">
            Mismo precio en {product?.numberQuotas} cuotas
          </p>
          <p className="text-[#00A650] text-[12px]"> {product?.priceQuotas.toFixed(2)}</p>
          <span className="text-green font-semibold text-[13px]">Envio gratis</span>
          {isHover && <p className="text-[13px] text-[#666] truncate w-full">{product?.title}</p>}
        </main>
      </Link>
    </div>
  );
};

export default ProductCard;
