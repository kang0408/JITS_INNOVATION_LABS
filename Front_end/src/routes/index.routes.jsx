import { useRoutes } from "react-router-dom";

import DefaultLayout from "../layouts/default.jsx";
import Product from "../pages/Products/index.jsx";
import ProductList from "../pages/Products/List/ProductList.jsx";
// import CreateProduct from "../pages/Products/Create/Create.jsx";
import Welcome from "../pages/Welcome.jsx";

const routes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <Welcome />,
      },
      {
        path: "products",
        element: <Product />,
        children: [
          {
            path: "",
            element: <ProductList />,
          },
          {
            path: "create",
            // element: <CreateProduct />,
          },
        ],
      },
    ],
  },
];

export default function AppRoutes() {
  const elements = useRoutes(routes);

  return elements;
}
