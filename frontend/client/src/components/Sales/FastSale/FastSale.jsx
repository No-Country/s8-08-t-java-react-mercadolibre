import React from "react";
import gaiming from "../../../assets/icons/gaiming.svg";
import bicycle from "../../../assets/icons/bicycle.svg";
import monopoly from "../../../assets/icons/monopoly.svg";
import coffe from "../../../assets/icons/coffe.svg";
import vino from "../../../assets/icons/vino.svg";
import contruction from "../../../assets/icons/contruction.svg";
import colchon from "../../../assets/icons/colchon.svg";
import bocinas from "../../../assets/icons/bocinas.svg";
const listIcons = [
  {
    id: 1,
    name: "GAMING",
    icon: gaiming
  },
  {
    id: 2,
    name: "BICICLETAS Y DEPORTES",
    icon: bicycle
  },
  {
    id: 3,
    name: "JUEGOS Y JUGUETES",
    icon: monopoly
  },
  {
    id: 4,
    name: "PEQUEÑOS ELECTROS",
    icon: coffe
  },
  {
    id: 5,
    name: "SUPERMERCADO",
    icon: vino
  },
  {
    id: 6,
    name: "CONSTRUCCIÓN",
    icon: contruction
  },
  {
    id: 7,
    name: "COLCHONES",
    icon: colchon
  },
  {
    id: 8,
    name: "AUDIO",
    icon: bocinas
  }
];
const FastSale = () => {
  return (
    <div className="flex flex-wrap gap-12 justify-center">
      {listIcons.map(icon => {
        return (
          <article
            key={icon.id}
            className="mb-8 flex flex-col justify-start items-start cursor-pointer"
          >
            <div className="bg-white rounded-full border-[10px] border-white">
              <img className="rounded-2xl" src={icon.icon} alt={icon.name} />
            </div>
            <p className="mt-4 text-center w-[96px] text-xs">{icon.name} </p>
          </article>
        );
      })}
    </div>
  );
};

export default FastSale;
