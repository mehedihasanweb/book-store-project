/* eslint-disable react/prop-types */
import { Link, useLoaderData } from "react-router-dom";

const ListedBooks = ({ books }) => {
  const allReadBooks = useLoaderData();
  //   const [listedBooks, setListedBooks] = useState([]);
  let listedBooks = [];
  for (let id of books) {
    const singleBook = allReadBooks?.find((book) => book.bookId === id);
    listedBooks.push(singleBook);
  }

  return (
    <>
      {listedBooks?.map((book, idx) => (
        <div
          key={idx}
          className="flex flex-wrap my-6 border rounded-lg p-6 gap-4"
        >
          <div className="bg-[#F3F3F3] rounded-2xl mx-auto md:mx-0">
            <img
              src={book.image}
              alt="book_image"
              className=" p-4  h-[200px]"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{book.bookName}</h2>
            <p className="text-gray-600 py-2 text-xl">By: {book.author}</p>
            <div className="flex items-center justify-between gap-4 flex-wrap pb-3">
              <div className="flex flex-wrap items-center my-4 gap-2">
                <span className="font-semibold">Tags:</span>{" "}
                {book?.tags.map((tag, idx) => (
                  <p
                    key={idx}
                    className="bg-[#F3F3F3] rounded-full px-3 py-1 text-[#23BE0A] font-semibold"
                  >
                    #{tag}
                  </p>
                ))}
              </div>
              <p className="text-gray-600">
                Year of publishing: {book.yearOfPublishing}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-gray-600">Publisher: {book.publisher}</p>
              <p className="text-gray-600">page: {book.totalPages}</p>
            </div>
            <hr className="my-5" />
            <div className="flex flex-wrap gap-4">
              <p className="bg-[#328EFF] bg-opacity-35 px-3 py-2 text-[#328EFF] rounded-full">
                Category: {book.category}
              </p>
              <p className="bg-[#FFAC33] bg-opacity-35 px-3 py-2 text-[#FFAC33] rounded-full">
                Rating: {book.rating}
              </p>
              <Link to={`/bookDetails/${book?.bookId}`}>
                <button className="bg-[#23BE0A]  px-3 py-2 text-white rounded-full">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListedBooks;
