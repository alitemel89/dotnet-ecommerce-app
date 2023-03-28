import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import ProductDetails from "../scenes/ProductDetails";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            { path: "products/:id", element: <ProductDetails /> },
        ]

    },
   
];

export const router = createBrowserRouter(routes);