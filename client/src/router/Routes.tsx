import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import ProductDetails from "../scenes/ProductDetails";
import OrderSummaryPage from "../scenes/OrderSummaryPage";
import CheckOutPage from "../scenes/CheckOutPage";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            { path: "products/:id", element: <ProductDetails /> },
            { path: "cart", element: <OrderSummaryPage /> },
            { path: "checkout", element: <CheckOutPage /> },
        ]

    },
   
];

export const router = createBrowserRouter(routes);