import { useEffect, useState } from 'react'
import useAxiosSecure from '../hooks/useAxiosSecure'
import useAuth from '../hooks/useAuth'
import UseTitle from '../components/UseTitle';


const MyFoodReq = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [reqs, setReq] = useState([])

    useEffect(() => {
        // console.log('User email:', user?.email); 
        getData()
    }, [user])

    const getData = async () => {
        try {
            const { data } = await axiosSecure(`https://b9-a11-ayesh-server.vercel.app/my-req/${user?.email}`)
            setReq(data)
        } catch (error) {
            console.error('Error fetching food requests:', error);
        }
    }
    


    return (
        <section className='container px-4 mx-auto pt-12 border my-36'>
            <UseTitle title="My Food REQ | Ayesh"></UseTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Donar Name</th>
                            <th>Pickup Location</th>
                            <th>Expire Date</th>
                            <th>Request Date</th>
                            <th>Your Donation Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {reqs.map((req, index) => (
                            <tr key={index}>
                                <td>{req.Donator?.Name}</td>
                                <td>{req.PickupLocation}</td>
                                <td>{req.ExpiredDateTime}</td>
                                <td>{req.startDate}</td>
                                <td>{req.donationAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th>Donar Name</th>
                            <th>Pickup Location</th>
                            <th>Expire Date</th>
                            <th>Request Date</th>
                            <th>Your Donation Amount</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </section>
    )
};

export default MyFoodReq;