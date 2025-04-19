import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";

import Home from "../Pages/Home";
import Favorites from "../Pages/Favorites"
import About from '../Pages/About';
import ErrorPage from '../Pages/ErrorPage';
import PhoneDetails from '../Pages/phoneDetails'
import Cart from "../Pages/Cart";
const router = createBrowserRouter([
    {
      path: '/',
      Component: MainLayout,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            Component: Home
        },
        {
            path: '/favorites',
            Component: Favorites
        },
        {
            path: '/about',
            Component: About
        },
        {
            path: '/cart',
            Component: Cart
        },
        {
            path: '/phonedetails',
            Component: PhoneDetails
        }

      ]
    }
  ])

  export default router;  