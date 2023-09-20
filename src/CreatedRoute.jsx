import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Products from './Products';
import Dashboard from './Dashboard';
import ProductDetails from './ProductDetails';

const CreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/products",
                loader: () => fetch(`https://dummyjson.com/products`),
                element: <Products></Products>,
            },
            {
                path: "/products/:id",
                loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`),
                element: <ProductDetails></ProductDetails>,
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
            },
        ],
    },

]);

export default CreatedRoute;