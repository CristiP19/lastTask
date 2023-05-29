import React, { useState, useEffect } from "react";
import api from "api";
import TextFields from "components/common/textFields";
import { useForm } from "react-hook-form";
import Button from "components/common/button";
import { useParams } from "react-router-dom";

const UpdateCategories = () => {
  const [error, setError] = useState("");
  const [categories, setCategories] = useState(null);

  const { id } = useParams();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await api.categories().update(id, data);
    } catch (error) {
      if (error.message) {
        setError(error.message);
      } else {
        setError("An error occurred while creating the category.");
      }
    }
  };

  const getCategories = async () => {
    try {
      const response = await api.categories().getById(id);
      reset(response)
      setCategories(response);
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

  return (
    <div>
      {categories ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextFields
            label="Name"
            id="name"
            name="name"
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

export default UpdateCategories;
