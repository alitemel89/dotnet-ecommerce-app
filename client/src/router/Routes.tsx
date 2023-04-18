import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import ProductDetails from "../scenes/ProductDetails";
import OrderSummaryPage from "../scenes/OrderSummaryPage";
import CheckOutPage from "../scenes/CheckOutPage";
import OrdersPage from "../scenes/OrdersPage";


export const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            { path: "products/:id", element: <ProductDetails /> },
            { path: "cart", element: <OrderSummaryPage /> },
            { path: "checkout", element: <CheckOutPage /> },
            { path: "orders", element: <OrdersPage /> },
        ]

    },
   
];

export const router = createBrowserRouter(routes);