import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Alert} from "@mui/material";
import Button from "components/common/button";
import Table from "components/common/table/Table";
import columns from "pages/Categories/headers.json";
import api from "api";

const CategoriesTable = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  const getCategories = async () => {
    try {
      const response = await api.categories().get();
      setCategories(response);
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
      await api.categories().delete(id);
    } catch (error) {
      if (error.message) {
        setError(error.message);
      } else {
        setError("An error occurred while creating the category.");
      }
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleDismissError = () => {
    setError("");
  };

  return (
    <>
      <Link to="/newCategories">
        <Button>Add new Categories</Button>
      </Link>

      {error && (
        <Alert severity="error" onClose={handleDismissError}>
          {error}
        </Alert>
      )}

      <div>
        <Table
          handleRefresh={getCategories}
          handleDelete={handleDelete}
          data={categories}
          columns={columns}
          dataType="categories"
        />
      </div>
    </>
  );
};

export default CategoriesTable;
