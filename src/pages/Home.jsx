import { Helmet } from "react-helmet-async";
import AllBooks from "../components/allBooks/AllBooks";
import Banner from "../components/banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Book Store | Home</title>
      </Helmet>
      <Banner />
      <AllBooks />
    </div>
  );
};

export default Home;
