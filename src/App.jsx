// Common Ancestor Component (e.g., App.js)
import { useEffect, useState } from 'react';
import AvailableFoods from './AvailableFoods';
import FoodDetails from './FoodDetails';
import axios from 'axios';

const App = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchAvailableFoods = async () => {
      try {
        const response = await axios.get('https://b9-a11-ayesh-server.vercel.app/foods');
        setFoods(response.data);
        // console.log(setFoods);
      } catch (error) {
        console.error('Error fetching available foods:', error);
      }
    };

    fetchAvailableFoods();
  }, []);

  // Function to delete a food card
  const deleteFoodCard = (foodId) => {
       foods.filter(food => food._id == foodId);
  }

  return (
    <div>
      <AvailableFoods foods={foods} setFoods={setFoods} />
      <FoodDetails deleteFoodCard={deleteFoodCard} />
    </div>
  );
}

export default App;
