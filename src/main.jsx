import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPage/ErrorPage';
import MainPage from './Pages/MainPage';
import Home from './Components/Home';
import AvailableFoods from './Pages/PublicRoutes/AvailableFoods';
import Register from './Pages/PublicRoutes/Register';
import AddFood from './Pages/PrivateRoutes/AddFood';
import ManageMyFoods from './Pages/PrivateRoutes/ManageMyFoods';
import MyFoodRequest from './Pages/PrivateRoutes/MyFoodRequest';
import Signin from './Pages/PublicRoutes/Signin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/availableFoods",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/addFoods",
        element: <AddFood></AddFood>,
      },

      {
        path: "/manageMyFoods",
        element: <ManageMyFoods></ManageMyFoods>,
      },
      {
        path: "/myFoodsRequest",
        element: <MyFoodRequest></MyFoodRequest>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
