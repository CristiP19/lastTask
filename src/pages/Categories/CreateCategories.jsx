import React, { useState } from "react";
import api from "api";
import TextFields from "components/common/textFields";
import { useForm } from "react-hook-form";
import Button from "components/common/button";
import { yupResolver } from "@hookform/resolvers/yup";
import CreateCategoriesValidation from "validation/CreateCategiries";

const CreateCategories = () => {
  const [error, setError] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateCategoriesValidation),
  });

  const onSubmit = async (data) => {
    try {
      await api.categories().create(data);
    } catch (error) {
      if (error.message) {
        setError(error.message);
      } else {
        setError("An error occurred while creating the category.");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFields
          label="Name of Category"
          id="name"
          name="name"
          control={control}
          errors={errors}
        />
        <Button type="submit">Create</Button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreateCategories;
