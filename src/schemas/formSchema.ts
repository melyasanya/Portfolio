import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short! Minimum 3 symbols")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});
