import React, { useEffect, useState } from "react";
import Table from "components/common/table/Table";
import columns from "pages/Products/headers.json";
import api from "api";
import { Link } from "react-router-dom";
import Button from "components/common/button";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const getProducts = async () => {
    try {
      const response = await api.products().get();
      setProducts(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.products().delete(id);
    } catch (error) {
      setError("An error occurred while deleting the data.");
    }
  };

  return (
    <>
      <Link to="/newProduct">
        <Button>Add new Products</Button>
      </Link>
      <div>
        <Table
          handleRefresh={getProducts}
          handleDelete={handleDelete}
          data={products}
          columns={columns}
          dataType="products"
        />
      </div>
    </>
  );
};
export default ProductsTable;
