import * as yup from "yup";

const CreateProduct = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, "Error: Name should not contain numbers")
    .required("Error: Name is a required field"),
  price: yup.number()
    .positive("Error: Must be more than 0")
    .integer("Error: Must be more than 0")
    .required("Error: This field is required"),
  categoryId: yup.number()
    .positive("Error: Must be more than 0")
    .integer("Error: Must be more than 0")
    .required("Error: This field is required"),
  photoId: yup.number()
    .positive("Error: Must be more than 0")
    .integer("Error: Must be more than 0")
    .required("Error: This field is required"),
});

export default CreateProduct;
