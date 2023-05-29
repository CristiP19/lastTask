import React, { useEffect, useState } from "react";
import Table from "components/common/table/Table";
import columns from "pages/Products/headers.json";
import api from "api";
import { Link } from "react-router-dom";
import Button from "components/common/button";
import { Alert } from "@mui/material";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const getProducts = async () => {
    try {
      const response = await api.products().get();
      setProducts(response);
    } catch (error) {
      if (error && error.message) {
        setError(error.message);
      } else {
        setError("An error occurred while retrieving products.");
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.products().delete(id);
      await getProducts();
    } catch (error) {
      if (error && error.message) {
        setError(error.message);
      } else {
        setError("An error occurred while deleting the product.");
      }
    }
  };

  const handleDismissError = () => {
    setError("");
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Link to="/newProduct">
        <Button>Add new Products</Button>
      </Link>

      {error && (
        <Alert severity="error" onClose={handleDismissError}>
          {error}
        </Alert>
      )}

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
