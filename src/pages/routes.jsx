import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";
import BlogPage from "./BlogPage";
import BlogDetailsPage from "./BlogDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "blog",
        children: [
          {
            index: true,
            element: <BlogPage />,
          },
          {
            path: ":postId",
            element: <BlogDetailsPage />,
          }
        ]
      }
    ],
  }
]);