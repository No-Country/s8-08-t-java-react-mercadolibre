import React from "react";
import Hero from "../components/Hero/Hero";
import Sales from "../components/Sales/Sales";
import SliderIcon from "../components/sliderIcon/SliderIcon";

const Home = () => {
  return (
    <div className="bg-[#EDEDED] ">
      <section className="mx-auto w-[85%]">
        <Hero />
      </section>
      <section className="mx-auto w-[85%]">
        <Sales />
      </section>
      <section className="mx-auto w-[85%]">
        <p className=" text-[12px] px-12 py-4 ">
          (1)Imágenes de referencia. Válido en Argentina del 08/05/2023 al 10/05/2023 para compras
          de productos seleccionados publicados en www.mercadolibre.com.ar/ofertas/hot-sale. Ofertas
          a cargo de cada usuario vendedor, sujetas a disponibilidad de los productos ofertados y a
          las condiciones establecidas por el vendedor en el anuncio publicado en el Sitio Web. (2)
          Costo Financiero Total (CFT) 0,00%. Tasa Nominal Anual (TNA) 0,00%. Cuotas para que
          aplique la promoción: 6, 12, 18, 24 o 30 cuotas según indique cada producto. Exclusivo
          para pagos online de productos nacionales seleccionados a través de la plataforma de
          Mercadolibre S.R.L, con tarjetas de crédito Mastercard, Visa, Cabal y American Express
          bancarias únicamente emitidas y administradas por bancos autorizados en la Argentina.
          Aplicable para tarjetas de crédito que se encuentren vigentes y en estado de cumplimiento.
          Más información en https://www.argentina.gob.ar/ahora-12. Mercadolibre S.R.L., Avenida
          Caseros 3039, piso 2, CABA, 30-70308853-4. Envíos gratis a partir de $8.000. HSBC Cartera
          de consumo. TNA (tasa Nominal Anual) 0.00%, CFT (costo ﬁnanciero total Nominal Anual)
          0.00%. Beneficio válido en la República Argentina desde las 00.00 horas del 8/5/2023 hasta
          las 23.59 horas del 15/05/2023. El beneﬁcio consiste en hasta 9 cuotas sin interés, para
          las compras de productos seleccionados realizadas a través de la plataforma de
          MercadoLibre S.R.L. (disponible en https://www.mercadolibre.com.ar/l/sin-intereses)
          abonadas con las tarjetas de crédito emitidas por HSBC Bank Argentina S.A, exclusivamente
          a través del servicio de gestión de pagos de Mercado Pago operado por MercadoLibre S.R.L.
          Mercado Pago no es una entidad financiera. Los fondos en cuentas de pago no son depósitos
          garantizados. MercadoLibre S.R.L. CUIT 30-70308853-4, Caseros 3039, Piso 2º, CABA. Para
          más información consulta en www.mercadolibre.com.ar/hot-sale MACRO Cartera de consumo. TNA
          (tasa Nominal Anual) 0.00%, CFT (costo ﬁnanciero total Nominal Anual) 0.00%. Beneficio
          válido en la República Argentina desde las 00.00 horas del 8/05/2023 hasta las 23.59 horas
          del 17/05/2023. El beneﬁcio consiste en hasta 9 cuotas sin interés, para las compras de
          productos seleccionados realizadas a través de la plataforma de MercadoLibre S.R.L.
          (disponible en https://www.mercadolibre.com.ar/l/sin-intereses) abonadas con las tarjetas
          de crédito emitidas por Banco Macro S.A, exclusivamente a través del servicio de gestión
          de pagos de Mercado Pago operado por MercadoLibre S.R.L. Mercado Pago no es una entidad
          financiera. Los fondos en cuentas de pago no son depósitos garantizados. MercadoLibre
          S.R.L. CUIT 30-70308853-4, Caseros 3039, Piso 2º, CABA. Para más información consulta en
          www.mercadolibre.com.ar/hot-sale SANTANDER Cartera de consumo. TNA (tasa Nominal Anual)
          0.00%, CFT (costo ﬁnanciero total Nominal Anual) 0.00%. Beneficio válido en la República
          Argentina desde las 00.00 horas del 8/05/2023 hasta las 23.59 horas del 15/05/2023. El
          beneﬁcio consiste en un 10% de descuento y hasta 6 cuotas sin interés para las compras de
          productos seleccionados realizadas a través de la plataforma de MercadoLibre S.R.L.
          (disponible en – completar con URL- ) abonadas con las tarjetas de crédito Visa emitidas
          por Banco Santander, exclusivamente a través del servicio de gestión de pagos de Mercado
          Pago operado por MercadoLibre S.R.L., que se aplicará al momento de realizar la compra.
          Mercado Pago no es una entidad financiera. Los fondos en cuentas de pago no son depósitos
          garantizados. MercadoLibre S.R.L. CUIT 30-70308853-4, Caseros 3039, Piso 2º, CABA. Para
          más información consulta en www.mercadolibre.com.ar/hot-sale
        </p>
      </section>
      <section className="flex mx-auto w-[85%] h-[340px]">
        <SliderIcon />
      </section>
    </div>
  );
};

export default Home;
