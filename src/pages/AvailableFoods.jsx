import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import axios from "axios";
import UseTitle from "../components/UseTitle";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios("https://b9-a11-ayesh-server.vercel.app/foods");
      setFoods(data);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `https://b9-a11-ayesh-server.vercel.app/all-foods?sort=${sort}&search=${search}`
      );
      setFoods(data);
    };
    getData();
  }, [search, sort]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  const handleReset = () => {
    setSort("");
    setSearch("");
    setSearchText("");
  };

  

  return (
    <div className="mt-20 mb-40">
      <UseTitle title="Available Foods | Ayesh"></UseTitle>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <form onSubmit={handleSearch}>
          <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              name="search"
              placeholder="Enter Food Name"
              aria-label="Enter Food Name"
            />
            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#e72650] rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
        <div>
          <select
            onChange={(e) => {
              setSort(e.target.value);
            }}
            value={sort}
            name="sort"
            id="sort"
            className="border p-4 rounded-md"
          >
            <option value="">Sort By Expire Date</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>
        <button onClick={handleReset} className="btn">
          Reset
        </button>
      </div>

      <div
        className={`grid gap-10 mt-8 xl:mt-28 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
      >
        {foods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
