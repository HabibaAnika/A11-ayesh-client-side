// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Carousel.css"
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

// farmer motion 
import  {motion}  from "framer-motion"


export default function Carousel() {

    const fadeUp = {
        hidden: {
            y: 100,
            opacity: 0
        },
        show:{
           y:0,
           opacity:1,
           transition:{
              duration: 0.9
           }
        }
    }


    return (

        <div className=''>
            <Swiper
                autoHeight={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='b-1'></div>
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once: true}} className="absolute top-[440px] text-center">
                        <p className='border text-center text-xl font-medium text-white py-2 uppercase w-96 mb-2 mx-auto'>Ayesh Catering Service</p>
                        <h1 data-aos="fade-down"
                            data-aos-duration="1000" className='text-7xl mb-10 text-slate-50 font-semibold font-myFont'> Exploring Culinary Adventures Together</h1>

                        <Link
                            to='/all-food'
                            className='w-full px-5 py-4 text-md font-medium capitalize transition-colors duration-300 transform bg-[#00000049] rounded-md lg:w-auto hover:bg-[#d84961]  hover:text-white text-[#d84961] focus:outline-none focus:bg-gray-500'
                        >
                            Available Foods
                        </Link>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='b-2'></div>
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once: true}} className="absolute top-[440px]">
                        <p className='border text-center text-xl font-medium text-white py-2 uppercase w-96 mb-2 mx-auto'>Ayesh Catering Service</p>
                        <h1 data-aos="fade-down"
                            data-aos-duration="1000" className='text-7xl mb-10 text-slate-50 font-semibold font-myFont'>A Journey of Shared Tastes and Memories</h1>

                        <Link
                            to='/all-food'
                            className='w-full px-5 py-4 text-md font-medium capitalize transition-colors duration-300 transform bg-[#00000049] rounded-md lg:w-auto hover:bg-[#d84961]  hover:text-white text-[#d84961] focus:outline-none focus:bg-gray-500'
                        >
                            Available Foods
                        </Link>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='b-3'></div>
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once: true}}  className="absolute top-[440px]">
                        <p className='border text-center text-xl font-medium text-white py-2 uppercase w-96 mb-2 mx-auto'>Ayesh Catering Service</p>
                        <h1 data-aos="fade-down"
                            data-aos-duration="1000" className='text-7xl mb-10 text-slate-50 font-semibold font-myFont'>Breaking Bread, Building Bonds: Food Sharing Unites Us</h1>

                        <Link
                            to='/all-food'
                            className='w-full px-5 py-4 text-md font-medium capitalize transition-colors duration-300 transform bg-[#00000049] rounded-md lg:w-auto hover:bg-[#d84961]  hover:text-white text-[#d84961] focus:outline-none focus:bg-gray-500'
                        >
                            Available Foods
                        </Link>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='b-4'></div>
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once: true}} className="absolute top-[440px]">
                        <p className='border text-center text-xl font-medium text-white py-2 uppercase w-96 mb-2 mx-auto'>Ayesh Catering Service</p>
                        <h1 data-aos="fade-down"
                            data-aos-duration="1000" className='text-7xl mb-10 text-slate-50 font-semibold font-myFont'>Nourishing Connections through Food Sharing</h1>

                        <Link
                            to='/food-req'
                            className='w-full px-5 py-4 text-md font-medium capitalize transition-colors duration-300 transform bg-[#00000049] rounded-md lg:w-auto hover:bg-[#d84961]  hover:text-white text-[#d84961] focus:outline-none focus:bg-gray-500'
                        >
                            Request For Delicious Foods
                        </Link>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='b-5'></div>
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once: true}}className="absolute top-[440px]">
                        <p className='border text-center text-xl font-medium text-white py-2 uppercase w-96 mb-2 mx-auto'>Ayesh Catering Service</p>
                        <h1 data-aos="fade-down"
                            data-aos-duration="1000" className='text-7xl mb-10 text-slate-50 font-semibold font-myFont'>Celebrating Friendship with Food Sharing</h1>

                        <Link
                            to='/all-food'
                            className='w-full px-5 py-4 text-md font-medium capitalize transition-colors duration-300 transform bg-[#00000049] rounded-md lg:w-auto hover:bg-[#d84961]  hover:text-white text-[#d84961] focus:outline-none focus:bg-gray-500'
                        >
                            Available Foods
                        </Link>
                    </motion.div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
}