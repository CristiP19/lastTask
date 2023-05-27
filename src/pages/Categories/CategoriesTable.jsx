import React, { useEffect, useState } from "react";
import Table from "components/common/table/Table";
import columns from "pages/Categories/headers.json";
import api from "api";
import { Link } from "react-router-dom";
import Button from "components/common/button";

const CategoriesTable = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  const getCategories = async () => {
    try {
      const response = await api.categories().get();
      setCategories(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.categories().delete(id);
    } catch (error) {
      setError("An error occurred while deleting the data.");
    }
  };

  return (
    <>
      <Link to="/newCategories">
        <Button>Add new Categories</Button>
      </Link>
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
