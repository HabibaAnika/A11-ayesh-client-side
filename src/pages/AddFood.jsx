import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import useAuth from '../hooks/useAuth'
import UseTitle from '../components/UseTitle'

const AddFood = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date())

    const handleFormSubmit = async e => {
        e.preventDefault()
        const form = e.target
        const FoodName = form.food.value
        const FoodImage = form.photo.value
        const FoodQuantity = form.qty.value
        const PickupLocation = form.location.value
        const ExpiredDateTime = startDate
        const AdditionalNotes = form.note.value
        const Donator = {
            Name : user?.displayName,
            email : user?.email,
            Image : user?.photoURL
        }
        const foodData = {
            FoodImage,
        FoodName,
        Donator,
        FoodQuantity,
        PickupLocation,
        ExpiredDateTime,
        AdditionalNotes,
        }
        try {
            const { data } = await axios.post(
                'https://b9-a11-ayesh-server.vercel.app/food',
                foodData
            )
            // console.log(data)
            toast.success('Food Data Updated Successfully!')
            navigate('/my-foods')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <UseTitle title="Add Food | Ayesh"></UseTitle>
            <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                    Add a Food
                </h2>

                <form onSubmit={handleFormSubmit}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        {/*  Food Name */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='job_title'>
                                Food Name
                            </label>
                            <input
                                id='food'
                                name='food'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        {/*  Food Photo Url */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='job_title'>
                                Food Image
                            </label>
                            <input
                                id='photo'
                                name='photo'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        {/*  Food Quantity */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='qty'>
                                Food Quantity
                            </label>
                            <input
                                id='qty'
                                type='text'
                                name='qty'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        
                        {/*  Pickup Location */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='location'>
                            Pickup Location
                            </label>
                            <input
                                id='location'
                                type='text'
                                name='location'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        
                        {/* Donator Image url  */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='donatorImg'>
                            Donator Image URL
                            </label>
                            <input
                                id='donatorImg'
                                type='text'
                                name='donatorImg'
                                defaultValue={ user?.photoURL}
                                disabled
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        {/* Donator Name  */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='donatorName'>
                            Donator Name
                            </label>
                            <input
                                id='donatorName'
                                type='text'
                                name='donatorName'
                                defaultValue={user?.displayName}
                                disabled
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                         
                        {/* Donator Email  */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='donatorEmail'>
                            Donator Name
                            </label>
                            <input
                                id='donatorEmail'
                                type='email'
                                name='donatorEmail'
                                defaultValue={user?.email}
                                disabled
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                         {/* Additional Notes  */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='additionalNotes'>
                              Additional Notes
                            </label>
                            <textarea
                                id='note'
                                type='text'
                                name='note'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        {/* User Email */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                User Email Address
                            </label>
                            <input
                                id='emailAddress'
                                type='email'
                                name='email'
                                disabled
                                defaultValue={user?.email}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        {/* Expired Date/Time */}
                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700'>Expired Date</label>

                            {/* Date Picker Input Field */}
                            <DatePicker
                                className='border p-2 rounded-md'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                        </div>

                        {/*  Food Status */}
                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700 ' htmlFor='status'>
                                Food Status
                            </label>
                            <select
                                name='status'
                                id='status'
                                className='border p-2 rounded-md'
                            >
                                <option value='available'>available</option>
                                <option value='unavailable'>unavailable</option>
                            </select>
                        </div>

                    </div>


                    <div className='flex justify-end mt-6'>
                        <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#e43847] rounded-md hover:bg-[#972525] focus:outline-none focus:bg-gray-600'>
                            Add
                        </button>
                    </div>

                </form>

            </section>
        </div>
    );
};

export default AddFood;