import * as yup from "yup";

const createUser = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, "errors.name_should_not_contain_numbers")
    .required("errors.name_is_a_required_field"),
  company_id: yup
    .number()
    .typeError("errors.the_country_code_is_mandatory")
    .required("errors.the_country_code_is_mandatory"),
  location_id: yup
    .number()
    .typeError("errors.location_is_required")
    .required("errors.location_is_required"),
  password: yup
    .string()
    .min(8, "errors.password_should_be_at_least_8_characters")
    .max(20, "errors.password_should_be_at_most_20_characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "errors.password_should_have_lower_and_uppercase_letters_numbers_and_symbols"
    )
    .required("errors.password_is_a_required_field"),
});

export default createUser;
