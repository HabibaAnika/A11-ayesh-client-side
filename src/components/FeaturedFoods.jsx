import { useEffect, useState } from "react";
import axios from 'axios';
import FoodCard from "./FoodCard";
import { Link } from "react-router-dom";


const FeaturedFoods = () => {
  const [foods, setFoods] = useState([])
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios('https://b9-a11-ayesh-server.vercel.app/foods')
      // console.log(data);
      setFoods(data)
    }
    getData()
  }, [])


  const slicedFoods = foods.slice(0, 4);


  return (
    <div className="text-center">
      <div className='grid grid-cols-1 gap-8 mb-20 mt-8 xl:mt-32 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto'>
        {slicedFoods.map(food =>
          <FoodCard key={food._id} food={food}></FoodCard>
        )
        }
      </div>
      <Link to="/all-food">
          <button className='px-8 mb-20 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#e43847] rounded-md hover:bg-[#972525] focus:outline-none focus:bg-gray-600'>
            Show All
          </button>
      </Link>
    </div>
  )
};

export default FeaturedFoods;