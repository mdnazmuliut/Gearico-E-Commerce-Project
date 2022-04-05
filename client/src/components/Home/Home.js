import SectionOne from "./Sections/Sec-1";
import Categories from "./Sections/Sec-2";
import FeaturedProducts from "./Sections/Sec-3";
import Sponsors from "./Sections/Sec-4";
import Footer from "./Sections/Sec-5";
import Demo from "./Sections/Demo";

const Home = () => {
  return (
    <>
      <SectionOne />
      <Categories />
      <FeaturedProducts />
      <Sponsors />
      <Footer />
      {/* <Demo /> */}
    </>
  );
};

export default Home;
