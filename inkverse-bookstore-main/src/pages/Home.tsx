import Hero from "../components/hero/Hero";
import MainNavBar from "../components/navbar/MainNavBar";
import { Footer } from "../components/footer/Footer";
import BookSection from "../components/card/BookSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Inkverse Bookstore</title>
      </Helmet>
      <div className="flex flex-col md:space-y-10">
        <MainNavBar />
        <div className="pt-12">
          <Hero />
        </div>

        <div className="p-8">
          <BookSection title="Featured Items" showAddToCart={false} />
          <BookSection title="Best Sellers in Your Area" showAddToCart={true} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
