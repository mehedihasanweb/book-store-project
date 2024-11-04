import toast from "react-hot-toast";

// get read books from storage
const getReadBookFromStorage = () => {
  const getReadBook = localStorage.getItem("read-books");
  if (getReadBook) {
    return JSON.parse(getReadBook);
  }
  return [];
};

// get wishlist book from storage
const getWishlistBookFromStorage = () => {
  const wishListBooks = localStorage.getItem("wishlist-books");
  if (wishListBooks) {
    return JSON.parse(wishListBooks);
  }
  return [];
};

// add read books to storage
const addBookToLs = (id) => {
  const books = getReadBookFromStorage();
  const exists = books?.find((book) => book === id);

  if (!exists) {
    books.push(id);
    localStorage.setItem("read-books", JSON.stringify(books));
    toast.success("Read Book Added Successfully in read books!!");
  } else {
    toast.error("already added this book");
  }
};

// add wishlist book to storage
const addWishlistBookToLs = (id) => {
  const books = getWishlistBookFromStorage();
  const readBooks = getReadBookFromStorage();

  // check is in exist in read books
  const isInReadBooks = readBooks?.find((book) => book === id);
  if (isInReadBooks) {
    toast.error("This book already added in read books");
    return;
  }

  const exists = books?.find((book) => book === id);
  if (!exists) {
    books.push(id);
    localStorage.setItem("wishlist-books", JSON.stringify(books));
    toast.success("Wishlist book added successfully in wishlist books!!");
  } else {
    toast.error("already added this book");
  }
};

export {
  getReadBookFromStorage,
  addBookToLs,
  getWishlistBookFromStorage,
  addWishlistBookToLs,
};
