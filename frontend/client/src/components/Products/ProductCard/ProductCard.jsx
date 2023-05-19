import { useState } from "react";

const ProductCard = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`w-[224px] hover:h-[424px] hover:shadow-xl hover:shadow-slate-400 h-[375px] border rounded-lg p-4 bg-white`}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <header className="h-[225px] flex justify-center items-center">
        <img
          className="w-full"
          src="https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_1280.png"
          alt="zapato"
        />
      </header>
      <main>
        <h3 className="bg-ligthblue text-white font-medium  flex justify-center rounded w-[100px] text-[12px]">
          OFERTA DEL DIA
        </h3>
        {isHover && <p className="text-[11px] line-through text-[#666]">$ 41.999</p>}
        <div className="flex gap-4 items-end">
          <span className="text-[23px]">$ 27.087</span>
          <span className="text-[green] font-medium text-[12px]">35% OFF</span>
        </div>

        <p className="text-[green] text-[13px]">Mismo precio en 6 cuotas</p>
        <p className="text-[green] text-[12px]"> $4514</p>
        <span className="text-[green] font-medium text-[13px]">Envio gratis</span>
        {isHover && <p className="text-[13px]">Zapatillas Response Super 3.0 Hp5933 adidas</p>}
      </main>
    </div>
  );
};

export default ProductCard;
