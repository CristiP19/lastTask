import React, {useState} from "react";
import api from "api";
import TextFields from "components/common/textFields";
import {useForm} from "react-hook-form";
import Button from "components/common/button";
import {yupResolver} from '@hookform/resolvers/yup';
import CreateProduct from 'validation/CreateProduct';

const CreateProducts = () => {

  const [error, setError] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateProduct)
  });

  const onSubmit = async (data) => {
    try {
      await api.products().create(data);
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
          label="Name"
          id="name"
          name="name"
          control={control}
          errors={errors}
        />
        <TextFields
          label="Price"
          id="price"
          name="price"
          type="number"
          control={control}
          errors={errors}
        />
        <TextFields
          label="Category ID"
          id="categoryId"
          name="categoryId"
          control={control}
          errors={errors}
          type="number"
        />
        <TextFields
          label="PhotoId"
          id="photoId"
          name="photoId"
          control={control}
          errors={errors}
          type="number"
        />

        <Button type="submit">Create</Button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreateProducts;
