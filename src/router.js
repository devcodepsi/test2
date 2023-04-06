import { createBrowserRouter } from "react-router-dom";

import Index from "./pages/index/Index";

import ProductList from "./pages/product/ProductList";
import ProductDetail from "./pages/product/ProductDetail";

import IdsList from "./pages/ids/IdsList";
import IdsDetail from "./pages/ids/IdsDetail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
    },
    {
        path: "/product",
        element: <ProductList />,
    },
    {
        path: "/product/:id",
        element: <ProductDetail />,
    },
    {
        path: "/ids",
        element: <IdsList />,
    },
    {
        path: "/ids/:id",
        element: <IdsDetail />,
    },
]);