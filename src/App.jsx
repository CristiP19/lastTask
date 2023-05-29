import React from "react";
import Home from "pages/Home";
import {Route, Routes} from "react-router-dom";
import DefaultLayout from "components/layout/DefaultLayout";
import {AuthPage} from "pages/authPage/authPage";
import RegisterPage from "pages/authPage/RegisterPage";
import CategoriesTable from "./pages/Categories/CategoriesTable";
import CreateCategories from "./pages/Categories/CreateCategories";
import UpdateCategories from "./pages/Categories/UpdateCategories";
import InfoCategories from "./pages/Categories/InfoCategories/InfoCategories";
import ProductsTable from "./pages/Products/ProductsTable";
import CreateProducts from "./pages/Products/CreateProducts";
import UpdateProduct from "./pages/Products/UpdateProduct";
import InfoProducts from "./pages/Products/InfoProducts/InfoProducts";
import PasswordResetPage from "./pages/PasswordResetPage";

const App = () => {
  return (
    <>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resetPassword" element={<PasswordResetPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/*Categories CRUD*/}
          <Route path="/categoriesTable" element={<CategoriesTable />} />
          <Route path="/newCategories" element={<CreateCategories />} />
          <Route path="/categories/:id/edit" element={<UpdateCategories />} />
          <Route path="/categories/:id/info" element={<InfoCategories />} />

          {/*Categories CRUD*/}
          <Route path="/productsTable" element={<ProductsTable />} />
          <Route path="/newProduct" element={<CreateProducts />} />
          <Route path="/products/:id/edit" element={<UpdateProduct />} />
          <Route path="/products/:id/info" element={<InfoProducts />} />
        </Routes>
      </DefaultLayout>
    </>
  );
};

export default App;
