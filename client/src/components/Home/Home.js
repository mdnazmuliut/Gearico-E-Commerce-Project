// import DemoProduct from "./Sections/Demo";
import SectionOne from "./Sections/Sec-1";
import Categories from "./Sections/Sec-2";
import FeaturedProducts from "./Sections/Sec-3";
import Sponsors from "./Sections/Sec-4";
import Footer from "./Sections/Sec-5";

const Home = () => {
  return (
    <>
      <SectionOne />
      <Categories />
      <FeaturedProducts />
      <Sponsors />
      <Footer />
      {/* <DemoProduct /> */}
    </>
  );
};

export default Home;
