import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import ListedBookPage from "../pages/ListedBookPage";
import PageToReadPage from "../pages/PageToReadPage";
import BookDetailsPage from "../pages/BookDetailsPage";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: (
      <h2 className="text-4xl font-bold text-center ">
        Something went wrong!!
      </h2>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listed-books",
        element: <ListedBookPage />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/page-to-read",
        element: <PageToReadPage />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/bookDetails/:id",
        element: (
          <PrivateRoute>
            <BookDetailsPage />
          </PrivateRoute>
        ),
        loader: () => fetch("/books.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
