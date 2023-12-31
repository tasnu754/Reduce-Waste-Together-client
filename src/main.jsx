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
import Authenticate from './Auth/Authenticate';
import PrivateRoute from './Components/PrivateRoute';
import SingleFood from './Pages/PrivateRoutes/SingleFood';
import { ChakraProvider } from '@chakra-ui/react';
import UpdateFood from './Pages/PrivateRoutes/UpdateFood';
import ManageSingleFood from './Pages/PrivateRoutes/ManageSingleFood';

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
        path: "/singleFood/:id",
        element: (
          <PrivateRoute>
            <SingleFood></SingleFood>
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateFood></UpdateFood>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://reduce-waste-together-server.vercel.app/api/singleFood/${params.id}`),
      },
      {
        path: "/manageFoods/:id",
        element: <PrivateRoute>
          <ManageSingleFood></ManageSingleFood>
        </PrivateRoute>
      },

      {
        path: "/manageMyFoods",
        element: (
          <PrivateRoute>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/myFoodsRequest",
        element: (
          <PrivateRoute>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authenticate>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Authenticate>
  </React.StrictMode>
);
