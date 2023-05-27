import * as yup from "yup";

const selectSchema = yup.object().shape({
  category: yup.string().required("errors.field_is_required_to_complete"),
  service: yup.string().required("errors.field_is_required_to_complete"),
  master: yup.string().required("errors.field_is_required_to_complete"),
  date: yup.string().required("errors.field_is_required_to_complete"),
  price: yup
    .number()
    .typeError("errors.only_numbers")
    .positive("errors.must_be_greater_then_zero")
    .integer()
    .required("errors.required"),
  value: yup.string().required("errors.field_is_required_to_complete"),
});

export default selectSchema;
