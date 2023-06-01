import { useState } from "react";

const ProductCard = ({ product }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`w-[224px] hover:h-[424px] hover:shadow-xl hover:shadow-slate-400 h-[375px] border rounded-lg p-4 bg-white`}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <header className="h-[225px] flex justify-center items-center">
        <img className="w-full h-[225px]" src={product?.images[0].imageUrl} alt="zapato" />
      </header>
      <main>
        <h3 className="bg-ligthblue text-white font-medium  flex justify-center rounded w-[100px] text-[12px]">
          OFERTA DEL DIA
        </h3>
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

        <p className="text-[#00A650] text-[13px]">Mismo precio en {product?.numberQuotas} cuotas</p>
        <p className="text-[#00A650] text-[12px]"> {product?.priceQuotas.toFixed(2)}</p>
        <span className="text-green font-semibold text-[13px]">Envio gratis</span>
        {isHover && <p className="text-[13px] text-[#666]">{product?.title}</p>}
      </main>
    </div>
  );
};

export default ProductCard;
