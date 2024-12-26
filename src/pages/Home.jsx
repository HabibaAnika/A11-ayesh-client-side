import About from "../components/About";
import Carousel from "../components/Carousel";
import FeaturedFoods from "../components/FeaturedFoods";
import FoodDonationSection from "../components/FoodDonationSection";
import Happy from "../components/Happy";
import UseTitle from "../components/UseTitle";

const Home = () => {
    return (
        <div>
            <UseTitle title="Home | Ayesh"></UseTitle>
            <Carousel></Carousel>
            <About></About>
            <Happy></Happy>
            <FeaturedFoods></FeaturedFoods>
            <FoodDonationSection></FoodDonationSection>
        </div>
    );
};

export default Home;