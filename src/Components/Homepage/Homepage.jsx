import Navbar from "./Navbar";
import Banner from "./Banner";
import Products from "./Products";
import Brands from "./Brands";
import Advertise from "./Advertise/Advertise";
import Wanted from "./Wanted/Wanted";
import Categories from "./Categories/Categories";
import Footer from "./Footer/Footer";


const Homepage = () => {
    return (
        <div>
          <Navbar />
          <Banner />
          <Products />
          <Brands />
          <Advertise />
          <Wanted />
          <Categories />
          <Footer />
        </div>
    )
}

export default Homepage;