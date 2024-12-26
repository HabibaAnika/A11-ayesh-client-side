import {motion} from 'framer-motion';

const About = () => {
    const fadeDown = {
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
        <div className="container mx-5 lg:mx-auto py-32 items-center lg:relative">
            <div className="lg:absolute md:w-[50%] top-72">
                <motion.h3 variants={fadeDown} initial="hidden" whileInView="show" viewport={{once: true}} className="font-myFont text-6xl text-[#da455d]">About</motion.h3>
                <h1 className="text-5xl font-black mt-[-20px] mb-4">Welcome to Ayesh</h1>
                <p className="md:font-bold md:text-lg">
                    Welcome to AYESH, where passion for food meets unparalleled service. We've grown from humble beginnings to become a trusted partner for weddings, corporate events, private parties, and more.

                    What sets us apart is our unwavering commitment to culinary excellence and personalized service. Our talented team of chefs and event professionals meticulously craft bespoke menus tailored to your tastes and preferences. Whether you're craving classic comfort food or seeking innovative culinary creations, we'll bring your vision to life with flair and finesse.

                    

                    </p>
            </div>
            <div className="">
                <img className="" src="https://i.ibb.co/d0LctXy/about.jpg" alt="" />
            </div>
        </div>
    );
};

export default About;