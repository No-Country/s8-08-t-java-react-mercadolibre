import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllCategories = () => {
  const { list: listCategories } = useSelector(store => store.categories);
  const subCategoryRows = listSubCategories => {
    let categoriesPerRow = 5;

    if (listSubCategories?.length <= 15) categoriesPerRow = 3;
    if (listSubCategories?.length <= 10) categoriesPerRow = 2;
    if (listSubCategories?.length <= 5) categoriesPerRow = 1;

    const categoryRows = listSubCategories.reduce((rows, category, index) => {
      if (index % categoriesPerRow === 0) {
        rows.push([]);
      }
      rows[rows.length - 1].push(category);
      return rows;
    }, []);

    return categoryRows;
  };
  return (
    <div className="flex w-full p-5 bg-[#EDEDED] justify-center">
      <div className="max-w-[1200px]">
        <h1 className="text-2xl text-[#4a4a4a] mb-6 mt-2">Categorías para comprar y vender</h1>
        <div className="bg-white rounded-md p-8 mt-4">
          {listCategories?.map((category, index) => {
            return (
              <div key={`categ-${index}`} className="bg-white rounded-md p-4 mt-2">
                <Link to={`/product-list/category/${category?.id}/${category?.name}`}>
                  <p className="flex font-medium cursor-pointer hover:text-blue-500">
                    {category.name}
                  </p>
                </Link>
                <div className="flex gap-4 w-full text-black mt-2">
                  {subCategoryRows(category?.subcategories)?.map((row, index) => (
                    <div key={index} className="flex w-full">
                      <div className="flex flex-col">
                        {row.map((category, categoryIndex) => (
                          <div
                            key={categoryIndex}
                            className="flex mt-2 font-normal text-sm text-gray-400 cursor-pointer hover:text-blue-500"
                          >
                            <p>{category?.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className=" border-b mt-8"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
