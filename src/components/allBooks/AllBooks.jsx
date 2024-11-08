import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  return (
    <div className="md:my-20">
      <h2 className="text-4xl text-center font-bold  mb-8">
        Books: {allBooks.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {allBooks?.map((book, idx) => (
          <Link
            to={`/bookDetails/${book?.bookId}`}
            key={idx}
            className=" border p-6 max-w-fit rounded-lg"
          >
            <div className="bg-[#F3F3F3] rounded-2xl ">
              <img
                src={book?.image}
                alt=""
                className=" mx-auto p-4  h-[200px]"
              />
            </div>
            <div className="flex flex-wrap items-center my-4 gap-4">
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
            <h3 className="text-3xl font-semibold">The Catcher in the Rye</h3>
            <p className="text-xl text-[#131313]">By: Awlad Hossain</p>
            <hr className="border-dashed  border-2 my-4" />
            <div className="flex justify-between items-center ">
              <p>Fiction</p>
              <p>Rating</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
