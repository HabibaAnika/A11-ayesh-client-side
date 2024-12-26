import { Link } from "react-router-dom";
 


const FoodCard = ({ food }) => {

    const {
        _id,
        FoodImage,
        FoodName,
        Donator,
        FoodQuantity,
        PickupLocation,
        ExpiredDateTime,
        AdditionalNotes,
    } = food || {};
    console.log(FoodName);
    return (

        <div className="flex">
            <div
                
                className='w-full mx-auto max-w-sm px-4 py-3 dark:bg-gray-800 rounded-md shadow-md hover:scale-[1.05] transition-all'
            >
                <div>

                    <img className="object-cover object-center w-full h-56" src={FoodImage} alt="avatar" />

                    <div className="flex items-center px-6 py-3 bg-gray-900">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={Donator.Image} alt="" />
                            </div>
                        </div>

                        <p className="mx-3 text-lg font-semibold text-white">{Donator.Name}</p>
                    </div>
                    <div className="px-6 py-4">
                        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{FoodName}</h1>

                        <p className="py-2 text-gray-700 dark:text-gray-400">{AdditionalNotes}</p>

                        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                            <img className="h-8 w-6" src="https://i.ibb.co/jkzRygW/icons8-kawaii-pizza-24.png" alt="" />
                            <h1 className="px-2 text-sm">Quantity: {FoodQuantity}</h1>
                        </div>

                        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                            <img className="h-6 w-6" src="https://i.ibb.co/j3jm8QW/location.png" alt="" />
                            <h1 className="px-2 text-sm">{PickupLocation}</h1>
                        </div>

                        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                            <img className="h-6 w-6" src="https://i.ibb.co/7CtWjJn/timetable.png" alt="" />
                            <h1 className="px-2 text-sm">{new Date(ExpiredDateTime).toLocaleDateString()}</h1>
                        </div>

                        <Link to={`/food/${_id}`}>
                            <button className="px-8 py-2.5 leading-5 mt-12 text-white transition-colors duration-300 transform bg-[#e43847] rounded-md hover:bg-[#972525] focus:outline-none focus:bg-gray-600">Show Details</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default FoodCard;