import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children :[
      {
        path:"/",
        element : <Home></Home>
      },
      {
        path:"/shop/:id",
        element :<ProductDetails></ProductDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
