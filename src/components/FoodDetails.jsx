import { useContext, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import toast from 'react-hot-toast'
import useAxiosSecure from '../hooks/useAxiosSecure'
import UseTitle from './UseTitle'


const FoodDetails = ({ deleteFoodCard }) => {

    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date())
    const { user } = useContext(AuthContext)
    const food = useLoaderData()
    const {
        _id,
        FoodImage,
        FoodName,
        Donator,
        FoodQuantity,
        PickupLocation,
        ExpiredDateTime,
        AdditionalNotes
    } = food || {}

    const handleFormSubmission = async e => {
        e.preventDefault()
        const email = user?.email || '';
        const donationAmount = document.getElementById('amount').value;

        const reqData = {
            email,
            startDate,
            FoodImage,
            FoodName,
            Donator,
            FoodQuantity,
            PickupLocation,
            ExpiredDateTime,
            AdditionalNotes,
            donationAmount
        }
        try {
            const { data } = await axiosSecure.post('https://b9-a11-ayesh-server.vercel.app/req', reqData)
            // console.log(data)
            toast.success('Request Placed Successfully!')
            navigate('/my-req')
            // delete food card from Available Food
            deleteFoodCard(_id);
        } catch (err) {
            toast.error(err.response.data)
            e.target.reset()
        }



    }
    return (
        <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>    
           <UseTitle title="Food Details| Ayesh"></UseTitle>
            {/* Food Details */}
            <div className='my-20 px-4 py-7 bg-white rounded-md shadow-md'>
                <div className='flex items-center justify-between mb-5'>
                    <span className='text-sm font-light text-gray-800 '>
                        Expired Date: {new Date(ExpiredDateTime).toLocaleDateString()}
                    </span>
                    <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
                        Quantity : {FoodQuantity}
                    </span>
                </div>

                <div>
                    <img src={FoodImage} alt="" />
                    <h1 className='mt-8 text-3xl font-black text-gray-800'>
                        {FoodName}
                    </h1>

                    <p className='mt-6 text-md font-extrabold text-gray-600'>
                        Donator Details:
                    </p>
                    <div className='flex items-center gap-5'>
                        <div>
                            <p className='mt-2 text-sm  text-gray-600 '>
                                Name: {Donator?.Name}
                            </p>
                            <p className='mt-2 text-sm  text-gray-600 '>
                                Email: {Donator?.email}
                            </p>
                        </div>
                        <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
                            <img src={Donator?.photo} alt='' />
                        </div>
                    </div>
                    <button
                        type='submit' onClick={() => document.getElementById('my_modal_5').showModal()}
                        className='mt-5 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#e43847] rounded-md hover:bg-[#972525] focus:outline-none focus:bg-gray-600'
                    >
                        Request
                    </button>
                </div>
            </div>


            {/* Place A Request form Form */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle p-6 w-full  bg-white rounded-md shadow-md md:min-h-[350px]">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-5">Request for food</h3>
                    <img src={FoodImage} alt="" />
                    <div className='grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2'>

                        {/* food name and image */}
                        <div>

                            <label className='text-gray-700 ' htmlFor='price'>
                                Food Name
                            </label>
                            <input
                                disabled
                                id='fName'
                                type='text'
                                name=''
                                defaultValue={FoodName}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>


                        {/* user email  */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                User Email
                            </label>
                            <input
                                id='emailAddress'
                                type='email'
                                name='email'
                                disabled
                                defaultValue={user?.email}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        {/* food id */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='comment'>
                                Food Id
                            </label>
                            <input
                                id='foodId'
                                name='foodId'
                                disabled
                                defaultValue={_id}
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        {/*  Request Date */}
                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-700'> Request Date </label>

                            {/* Date Picker Input Field */}
                            <DatePicker
                                className='border p-2 rounded-md'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                disabled
                                name='date'
                            />
                        </div>

                        {/*  Food Donator Name */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='comment'>
                                Food Donator Name
                            </label>
                            <input
                                id='donator'
                                name='d-name'
                                disabled
                                defaultValue={Donator?.Name}
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>


                        {/*  Food Donator Email */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='comment'>
                                Food Donator Email
                            </label>
                            <input
                                id='donator-e'
                                name='d-email'
                                disabled
                                defaultValue={Donator?.email}
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>



                        {/*  Pickup Location */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='comment'>
                                Pickup Location
                            </label>
                            <input
                                id='location'
                                name='location'
                                disabled
                                defaultValue={PickupLocation}
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>


                        {/*   Expire Date */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='comment'>
                                Expire Date
                            </label>
                            <input
                                id='date'
                                name='date'
                                disabled
                                defaultValue={ExpiredDateTime}
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>


                        {/*   Additional Notes */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='comment'>
                                Additional Notes
                            </label>
                            <textarea
                                id='note'
                                name='note'
                                defaultValue={AdditionalNotes}
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>


                        {/*   Your Donation Amount */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='comment'>
                                Your Donation Amount
                            </label>
                            <input
                                id='amount'
                                name='amount'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                    </div>

                    <button onClick={handleFormSubmission}
                        type='submit'
                        className='mt-5 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#e43847] rounded-md hover:bg-[#972525] focus:outline-none focus:bg-gray-600'
                    >
                        Request
                    </button>

                    {/* close btn */}
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>

                </div>
            </dialog>





        </div>
    )
};

export default FoodDetails;