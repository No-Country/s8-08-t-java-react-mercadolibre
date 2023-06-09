import { Link } from "react-router-dom";

const menuFooter = [
  {
    id: 1,
    title: "Trabajá con nosotros",
    url: "./work-us"
  },
  {
    id: 2,
    title: "Terminos y Condiciones",
    url: "./terms-and-conditions"
  },
  {
    id: 3,
    title: "Cómo cuidamos tu privacidad",
    url: "./privacy-policy"
  },
  {
    id: 4,
    title: "Accesibilidad",
    url: "./accessibility"
  },
  {
    id: 5,
    title: "Información al usuario financiero",
    url: "./financial-user"
  },
  {
    id: 6,
    title: "Ayuda",
    url: "./help"
  },
  {
    id: 7,
    title: "Defensa del Consumidor",
    url: "./consumer-defense"
  },
  {
    id: 8,
    title: "Información sobre seguros",
    url: "./insurance"
  }
];

const Footer = () => {
  return (
    <footer className="flex w-full my-5 justify-center h-[150px] sm:h-[80px] items-center">
      <div className="flex flex-col text-xs gap-2 pl-4">
        <div className="flex flex-wrap gap-4 font-medium justify-center sm:justify-left ">
          {menuFooter.map(menu => {
            return (
              <div key={menu.id} className="flex mx-2 sm:mx-0">
                <Link to={menu.url}>{menu.title}</Link>
              </div>
            );
          })}
        </div>
        <span className="text-[#999999] text-center sm:text-left">
          Copyright © 1999-2023 MercadoLibre S.R.L.
        </span>
        <span className="text-[#999999] text-center sm:text-left">
          Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA
        </span>
      </div>
    </footer>
  );
};

export default Footer;
