import * as yup from "yup";

const CreateCategoriesValidation = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, "\n" + "Error: The name should not contain numbers.")
    .required("Error: The name is a required field.")
});

export default CreateCategoriesValidation;
