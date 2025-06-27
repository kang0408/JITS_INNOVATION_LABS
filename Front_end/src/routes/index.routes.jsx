import { useRoutes } from 'react-router-dom';

import DefaultLayout from '../layouts/default.jsx';
import Product from '../pages/Products/index.jsx';
import ProductList from '../pages/Products/List/ProductList.jsx';
import ProductFormCreate from '../pages/Products/Form/Create/ProductFormCreate.jsx';
import ProductFormEdit from '../pages/Products/Form/Edit/ProductFormEdit.jsx';

import Welcome from '../pages/Welcome.jsx';

const routes = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        element: <Welcome />,
      },
      {
        path: 'products',
        element: <Product />,
        children: [
          {
            path: '',
            element: <ProductList />,
          },
          {
            path: 'create',
            element: <ProductFormCreate />,
          },
          {
            path: 'edit/:id',
            element: <ProductFormEdit />,
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
