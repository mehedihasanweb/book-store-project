import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { addBookToLs, addWishlistBookToLs } from "../utility/localStorage";

const BookDetailsPage = () => {
  const book = useLoaderData();
  const { id } = useParams();

  const singleBook = book?.find((book) => book.bookId === id);
  const {
    bookId,
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = singleBook;
  console.log(singleBook);

  const handleReadBook = (bookId) => {
    addBookToLs(bookId);
  };

  const handleWishlistBook = (bookId) => {
    addWishlistBookToLs(bookId);
  };

  return (
    <div>
      <Helmet>
        <title>Book Store | Details Book {id}</title>
      </Helmet>
      <div className=" border p-6 max-w-fit rounded-lg md:my-16">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-6">
          <div className="bg-[#F3F3F3] rounded-2xl w-full md:w-[50%]">
            <img src={image} alt="" className=" mx-auto p-6 md:h-[500px]  " />
          </div>
          <div className="md:w-[50%] w-full">
            <h3 className="text-3xl font-semibold">{bookName}</h3>
            <p className="text-xl text-[#131313] pb-4">By: {author}</p>
            <hr />
            <h3 className="text-3xl py-4">{category}</h3>
            <hr />
            <p>
              <span className="text-xl font-bold">Review:</span>{" "}
              <span>{review}</span>
            </p>

            <div>
              <p className="flex flex-wrap my-6 gap-4">
                <span className="text-xl font-bold">Tag:</span>
                {tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#F3F3F3] rounded-full px-3 py-1 text-[#23BE0A] font-semibold mx-4"
                  >
                    {tag}
                  </span>
                ))}
              </p>
            </div>

            <hr className="my-4" />
            <div className=" ">
              <p>Number of Pages: {totalPages}</p>
              <p>Publisher: {publisher}</p>
              <p>Year of Publisher: {yearOfPublishing}</p>
              <p>Rating: {rating}</p>
            </div>

            <div className="flex gap-3 my-4">
              <button
                onClick={() => handleReadBook(bookId)}
                className="border px-3 py-2  rounded-md"
              >
                Read
              </button>
              <button
                onClick={() => handleWishlistBook(bookId)}
                className="bg-[#59C6D2] px-3 py-2 text-white rounded-md"
              >
                WatchList
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
