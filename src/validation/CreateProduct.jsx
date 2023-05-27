import * as yup from "yup";

const CreateProduct = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, "errors.name_should_not_contain_numbers")
    .required("errors.name_is_a_required_field"),
  price: yup.number()
    .positive("Must be more than 0")
    .integer("Must be more than 0")
    .required("This field is required"),
  categoryId: yup.number()
    .positive("Must be more than 0")
    .integer("Must be more than 0")
    .required("This field is required"),
  photoId: yup.number()
    .positive("Must be more than 0")
    .integer("Must be more than 0")
    .required("This field is required"),
});

export default CreateProduct;
