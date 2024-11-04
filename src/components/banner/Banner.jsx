import { Link } from "react-router-dom";
import bannerImg from "../../assets/image1.png";

const Banner = () => {
  return (
    <div className="bg-[#F3F3F3] my-8 py-8 rounded-lg ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-between items-center ">
        <div className="col-span-2 text-center space-y-8">
          <h2 className="text-5xl font-bold leading-[50px]">
            Books to freshen up <br /> your bookshelf
          </h2>

          <div>
            <Link to={"/listed-books"}>
              <button className="bg-[#23BE0A] px-4 py-3 text-white rounded-md">
                View The List
              </button>
            </Link>
          </div>
        </div>
        <div className=" col-span-1 mt-12 md:mt-0">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
