import { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import UseTitle from '../components/UseTitle';

const MyFoods = () => {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://b9-a11-ayesh-server.vercel.app/my-foods/${user?.email}`);
        // console.log('Response:', response.data);
        setFoods(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching foods:', error);
        setError('Error fetching foods');
      }
    };
    // console.log('Fetching data...');
    fetchData();
  }, [user]);


    const handleDelete = async (id) => {
      try {
        await axios.delete(`https://b9-a11-ayesh-server.vercel.app/food/${id}`);
        // Remove the deleted food item from the state
        setFoods(foods.filter((food) => food._id !== id));
      } catch (error) {
        console.error('Error deleting food:', error);
      }
    };

  
   

  return (
    <div>
      <UseTitle title="My Food | Ayesh"></UseTitle>
    
      <div className="overflow-x-auto container mx-auto border">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                Food Image
              </th>
              <th>
                Food Name</th>
              <th>Donator Name & Image</th>
              <th>Donator Email</th>
              <th>Pickup Location</th>
              <th>
                Food Quantity</th>
              <th>Expired Date</th>
              <th>Additional Notes</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {foods.map(food => 
            <tr key={food._id}>

                {/* Food Image */}
                <th>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={food.FoodImage} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </th>

                {/* Food name  */}
                <td>{food.FoodName}</td>


                {/* Donator name & img */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={food.Donator.Image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{food.Donator.Name}</div>
                    </div>
                  </div>
                </td>


                {/* Donator email */}
                <td>
                  {food.Donator.email}
                </td>


                {/* Pickup location */}
                <td>
                  {food.PickupLocation}
                </td>


                {/* Food Quantity */}
                <td>
                   {food.FoodQuantity}
                </td>


                {/* Expired Date */}
                <td>
                   {food.ExpiredDateTime}
                </td>


                {/* Additional Notes */}
                <th>
                   {food.AdditionalNotes}
                </th>

                <td>
                    <div className='flex flex-col'>
                      <Link to={`/update/${food._id}`}><button className='px-7 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-green-500 rounded-md hover:bg-[#972525] focus:outline-none focus:bg-gray-600 mb-4'>Update</button></Link>
                      <button className=' py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#e43847] rounded-md hover:bg-[#972525] focus:outline-none focus:bg-gray-600' onClick={() => handleDelete(food._id)}>Delete</button>
                    </div>
                </td>


              </tr>
            )}


          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>

        </table>
      </div>

    </div>
  );
};

export default MyFoods;
