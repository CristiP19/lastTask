import React, { useState, useEffect } from "react";
import api from "api";
import TextFields from "components/common/textFields";
import { useForm } from "react-hook-form";
import Button from "components/common/button";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [error, setError] = useState("");
  const [products, setProducts] = useState(null);

  const { id } = useParams();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await api.products().update(id, data);
    } catch (error) {
      if (error.message) {
        setError(error.message);
      } else {
        setError("An error occurred while creating the category.");
      }
    }
  };

  const getProducts = async () => {
    try {
      const response = await api.products().getById(id);
      reset(response)
      setProducts(response);
    } catch (error) {
      if (error.message) {
        setError(error.message);
      } else {
        setError("An error occurred while creating the category.");
      }
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextFields
            label="Name"
            id="name"
            name="name"
            control={control}
            errors={errors}
            rules={{ required: "Name is required" }}
          />
          <TextFields
            label="Price"
            id="price"
            name="price"
            control={control}
            errors={errors}
            rules={{ required: "Name is required" }}
          />
          <Button type="submit">Update</Button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default UpdateProduct;
