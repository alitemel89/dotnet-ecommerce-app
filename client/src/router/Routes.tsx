import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import ProductDetails from "../scenes/ProductDetails";
import OrderSummaryPage from "../scenes/OrderSummaryPage";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            { path: "products/:id", element: <ProductDetails /> },
            { path: "cart", element: <OrderSummaryPage /> },
        ]

    },
   
];

export const router = createBrowserRouter(routes);