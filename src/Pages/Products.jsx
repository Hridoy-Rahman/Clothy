import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Card from "../Components/Card";

const Products = () => {
  const [products, setproducts] = useState([]);

  const [filteritems, setFilteritems] = useState([]);
  const [selectcategory, setSelectCategory] = useState("all");
  const [selectOption, setSelectOption] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://mocki.io/v1/84515102-9604-4489-8cb2-4328b6b66bcf");
        const data = await res.json();
        setproducts(data);
        setFilteritems(data);
      } catch (error) {
        console.log("fetching error", error);
      }
    };
    fetchData();
  }, []);

  // filtering function

  const filtereditems = (category) => {
    const items =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);

    setFilteritems(items);
    setSelectCategory(category);
  };

  const showAll = () => {
    setFilteritems(products);
    selectcategory("all");
  };

  const handleSort = (option) => {
    setSelectOption(option);

    let sortedItems = [...filteritems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;

      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price -a.price);
        break;
      default:
        break;
    }
    console.log(sortedItems)
    setFilteritems(sortedItems)
  };

  return (
    <div className="max-w-screen-2xl xl:px-28 px-4 pt-16">
      <h1 className="text-3xl capitalize font-semibold px-8 text-center mb-8">
        Or Subscribe To The Newsletter
      </h1>

      <div className="flex justify-between items-center">
        {/* Filtering Option */}
        <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap text-lg text-gray-800">
          <button className="hover:text-orange-500" onClick={showAll}>
            All products
          </button>
          <button
            onClick={() => filtereditems("Dress")}
            className="hover:text-orange-500"
          >
            Clothing
          </button>
          <button
            onClick={() => filtereditems("Hoodies")}
            className="hover:text-orange-500"
          >
            Hodies
          </button>
          <button
            onClick={() => filtereditems("Bag")}
            className="hover:text-orange-500"
          >
            Bag
          </button>
        </div>

        {/* sorting option */}

        <div className="flex justify-end mb-4 rounded-lg">
          <div className="bg-black p-2">
            <FaFilter className="text-white h-4 w-4"></FaFilter>
          </div>
          <select 
          id="sort"
          onChange={(e)=>handleSort(e.target.value)}
          value={selectOption}
          className="bg-black text-white p-2">
            <option value="default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="low-to-high">Low to high</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
      </div>

      <div>
        <Card products={filteritems}></Card>
      </div>
    </div>
  );
};

export default Products;
