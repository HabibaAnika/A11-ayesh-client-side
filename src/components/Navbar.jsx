import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className='navbar shadow-sm container px-4 mx-auto'>
            <div className='flex-1'>
                <Link to='/' className='flex gap-2 items-center'>
                    <img className='w-auto h-7' src="https://i.ibb.co/qM1DsK1/download-removebg-preview.png" alt='' />
                    <span className='font-extrabold text-2xl font-myFont'>Ayesh</span>
                </Link>
            </div>
            <div className='flex-none'>
                <ul className='menu lg:menu-horizontal px-1 hidden'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/all-food' className='justify-between'>
                            Available Foods
                        </Link>
                    </li>
                    <li>
                        <Link to='/add-food'>Add Food</Link>
                    </li>
                    <li>
                        <Link to='/my-foods'>My Foods</Link>
                    </li>

                    <li>
                        <Link to='/my-req'>My Food Request</Link>
                    </li>

                    {!user && (
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    )}
                    {user && (
                        <li className=''>
                            <button
                                onClick={logOut}
                                className='bg-gray-200 block text-center'
                            >
                                Logout
                            </button>
                        </li>
                    )}

                </ul>

                {user && (
                    <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div title={user?.displayName} className='w-10 rounded-full'>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user?.photoURL}
                                />
                            </div>
                        </div>

                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/all-food' className='justify-between'>
                                    Available Foods
                                </Link>
                            </li>
                            <li>
                                <Link to='/add-food'>Add Food</Link>
                            </li>
                            <li>
                                <Link to='/my-food'>My Foods</Link>
                            </li>

                            <li>
                                <Link to='/food-req'>My Food Request</Link>
                            </li>

                            {!user && (
                                <li>
                                    <Link to='/login'>Login</Link>
                                </li>
                            )}
                            {user && (
                                <li className=''>
                                    <button
                                        onClick={logOut}
                                        className='bg-gray-200 block text-center'
                                    >
                                        Logout
                                    </button>
                                </li>
                            )}
                        </ul>


                    </div>
                )}


                {!user && (
                    <div className='dropdown dropdown-end z-50'>
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/add-job' className='justify-between'>
                                    Add Job
                                </Link>
                            </li>
                            <li>
                                <Link to='/my-posted-jobs'>My Posted Jobs</Link>
                            </li>
                            <li>
                                <Link to='/my-bids'>My Bids</Link>
                            </li>
                            <li>
                                <Link to='/bid-requests'>Bid Requests</Link>
                            </li>
                            <li>
                                <Link to='/jobs'>All Jobs</Link>
                            </li>

                            {!user && (
                                <li>
                                    <Link to='/login'>Login</Link>
                                </li>
                            )}
                            {user && (
                                <li className=''>
                                    <button
                                        onClick={logOut}
                                        className='bg-gray-200 block text-center'
                                    >
                                        Logout
                                    </button>
                                </li>
                            )}
                        </ul>


                    </div>
                )}

            </div>
        </div>
    )
}

export default Navbar
