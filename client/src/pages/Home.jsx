import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/Foooter";
import Newsletter from "../components/Newsletter";

const Home = () => {
    return (
        <>
        <Announcement />
        <Navbar/>
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
        </>
      );
   


   
}

export default Home;
