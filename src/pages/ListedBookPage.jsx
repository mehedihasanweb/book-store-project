import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  getReadBookFromStorage,
  getWishlistBookFromStorage,
} from "../utility/localStorage";
import ListedBooks from "../components/listedBooks/ListedBooks";
import { Link } from "react-router-dom";

const ListedBookPage = () => {
  const readBooks = getReadBookFromStorage();
  const WishlistBooks = getWishlistBookFromStorage();

  return (
    <div className="my-8">
      <h2 className="bg-[#F3F3F3] w-full py-4 text-4xl font-semibold rounded-lg text-center mb-6">
        Books
      </h2>

      <div
        className="flex justify-center  mx-auto max-w-fit -white font-bold cursor-pointer mb-6
      "
      >
        <details className="dropdown">
          <summary className="btn m-1 bg-[#23BE0A] px-4 py-2 rounded-lg text-white">
            Sort By
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow bg-[#F3F3F3] rounded-lg text-gray-600">
            <li>
              <Link>Rating</Link>
            </li>
            <li>
              <Link>Number of Pages</Link>
            </li>
            <li>
              <Link>Publisher year</Link>
            </li>
          </ul>
        </details>
      </div>

      <Tabs>
        <TabList>
          <Tab>
            <span className="text-xl text-gray-500">Read Book</span>
          </Tab>
          <Tab>
            <span className="text-xl text-gray-500">Wishlist books</span>
          </Tab>
        </TabList>
        <TabPanel>
          <ListedBooks books={readBooks} />
        </TabPanel>
        <TabPanel>
          <ListedBooks books={WishlistBooks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBookPage;
