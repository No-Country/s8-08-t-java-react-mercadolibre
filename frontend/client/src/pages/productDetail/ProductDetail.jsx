import React from "react";




const ProductDetail = () => {

  const Product = {
    name:"Samsung Galaxy A54 5g 256gb 8gb Ram Awesome Graphite",
    images:[
      "https://http2.mlstatic.com/D_NQ_NP_987793-MLA54614253497_032023-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_938631-MLA54614297095_032023-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_673617-MLA54614434255_032023-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_704347-MLA54617291492_032023-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_617389-MLA54617424542_032023-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_716903-MLA54617361036_032023-O.webp"
    ],
    description:{
      marca:"Samsung",
      modelo:"Galaxy A54",
      color: "Gris Oscuro",
      sistemaOperativo:"Android",
      pantallaSize:"6.4'",
      pantallaTipoResolucion:"Full HD+",
      pantallaResolucion:"1080px x 2340px",
      bateria:"5000 mAh",
      dualSim:true,
    },
    price:184.999,
    off:13,
    seller:"Agustin y Francisco",
    quantity:2,
  }

  return <div>ProductDetail
  <div></div>
  </div>
  ;
};

export default ProductDetail;

