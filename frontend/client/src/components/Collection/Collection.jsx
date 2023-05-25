import { useState } from "react";

const listProd = {
  category: [
    {
      id: 1,
      name: "Smart home",
      coverImage: "https://http2.mlstatic.com/D_NQ_969839-MLA54711246145_032023-OO.jpg",
      products: [
        {
          id: 2,
          title: "Chromecas1",
          img: "https://http2.mlstatic.com/D_Q_NP_620605-MLA32691559317_102019-AC.jpg"
        },
        {
          id: 3,
          title: "Chromecas2",
          img: "https://http2.mlstatic.com/D_Q_NP_877966-MLA44401093823_122020-AC.jpg"
        },
        {
          id: 4,
          title: "Webcam",
          img: "https://http2.mlstatic.com/D_Q_NP_835568-MLA48771299156_012022-AC.jpg"
        },
        {
          id: 5,
          title: "Xiaomi Mi Robot",
          img: "https://http2.mlstatic.com/D_Q_NP_947900-MLA49975644617_052022-AC.webp"
        },
        {
          id: 6,
          title: "Noga PC ULTRA",
          img: "https://http2.mlstatic.com/D_Q_NP_643797-MLA52219427400_102022-AC.jpg"
        },
        {
          id: 7,
          title: "Noga PC ULTRA 2",
          img: "https://http2.mlstatic.com/D_Q_NP_633570-MLA43975741340_112020-AC.jpg"
        },
        {
          id: 8,
          title: "Webcam 2",
          img: "https://http2.mlstatic.com/D_Q_NP_828453-MLA52320839225_112022-AC.jpg"
        },
        {
          id: 9,
          title: "Xiaomi Mi TV",
          img: "https://http2.mlstatic.com/D_Q_NP_890199-MLA43336333673_092020-AC.jpg"
        }
      ]
    },
    {
      id: 2,
      name: "Novedades",
      coverImage: "https://http2.mlstatic.com/D_NQ_857497-MLA53784208190_022023-OO.jpg",
      products: [
        {
          id: 12,
          title: "Samsung1",
          img: "https://http2.mlstatic.com/D_Q_NP_996379-MLA53347691313_012023-AC.webp"
        },
        {
          id: 13,
          title: "Samsung2",
          img: "https://http2.mlstatic.com/D_Q_NP_867179-MLA53352656840_012023-AC.webp"
        },
        {
          id: 14,
          title: "Heladera",
          img: "https://http2.mlstatic.com/D_Q_NP_883854-MLA52215509777_102022-AC.webp"
        },
        {
          id: 15,
          title: "Xiaomi Mi Robot",
          img: "https://http2.mlstatic.com/D_Q_NP_947900-MLA49975644617_052022-AC.webp"
        },
        {
          id: 16,
          title: "Samsung3",
          img: "https://http2.mlstatic.com/D_Q_NP_903887-MLA53989413295_022023-AC.webp"
        },
        {
          id: 17,
          title: "Lavaropa",
          img: "https://http2.mlstatic.com/D_Q_NP_892718-MLA51901559502_102022-AC.webp"
        },
        {
          id: 18,
          title: "Audifonos",
          img: "https://http2.mlstatic.com/D_Q_NP_920480-MLA51523858060_092022-AC.webp"
        },
        {
          id: 19,
          title: "Heladera2",
          img: "https://http2.mlstatic.com/D_Q_NP_914290-MLU54983071418_042023-AC.webp"
        }
      ]
    }
  ]
};

const Collection = () => {
  const [selectedOption, setSelectedOption] = useState("Novedades");

  const handleSelectChange = event => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-center sm:justify-normal text-xl p-2 gap-2">
        <h2 className="py-1 text-gray-500">Colecciones:</h2>
        <select
          name="category"
          className="outline-none bg-transparent py-1 font-medium"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          {listProd.category.map(cat => {
            return (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-col items-center sm:items-start sm:flex-row sm:h-auto justify-center">
        <div className="max-w-[23.9375rem] sm:h-[17.5625rem] mr-0 sm:mr-4 sm:min-w-[14.0625rem]">
          <img
            src={listProd.category.find(cat => cat.name === selectedOption).coverImage}
            alt={listProd.category.find(cat => cat.name === selectedOption).name}
          />
          <div className="flex flex-col w-full h-[100px] bg-white p-5">
            <h3 className="text-xs ">DESCUBRI</h3>
            <h2 className="text-[28px] font-medium">
              {listProd.category.find(cat => cat.name === selectedOption).name.toLocaleUpperCase()}
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap mt-4 sm:mt-0 justify-center sm:justify-normal gap-4 sm:w-[49rem] sm:min-w-[24rem]">
          {listProd.category
            .find(cat => cat.name === selectedOption)
            .products.map(prod => {
              return (
                <div
                  key={prod.id}
                  className="flex w-full sm:w-auto hover:shadow-2xl cursor-pointer shadow-black"
                >
                  <img src={prod.img} alt={prod.title} className="w-full sm:w-46" />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
