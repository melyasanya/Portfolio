import { useFormik } from "formik";
import { FormSchema } from "../../schemas/formSchema";

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: FormSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div className="py-[48px]">
      <h3 className="contactsHeader">Get in Touch</h3>
      <form className="flex flex-col gap-[20px]" onSubmit={formik.handleSubmit}>
        <label htmlFor="name" className="relative">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            className={
              formik.errors.name && formik.touched.name
                ? `${"formInput"} ${"errorInput"}`
                : "formInput"
            }
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <p className="formErrorMessage">{formik.errors.name}</p>
          )}
        </label>
        <label htmlFor="email" className="relative">
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            className={
              formik.errors.email && formik.touched.email
                ? `${"formInput"} ${"errorInput"}`
                : "formInput"
            }
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="formErrorMessage">{formik.errors.email}</p>
          )}
        </label>
        <label htmlFor="message" className="relative">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className={
              formik.errors.message && formik.touched.message
                ? `${"formInput"} ${"errorInput"} ${"min-h-[200px]"}`
                : "formInput min-h-[200px]"
            }
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          {formik.errors.message && formik.touched.message && (
            <p className="formErrorMessage">{formik.errors.message}</p>
          )}
        </label>
        <button
          type="submit"
          className="bg-black text-white p-[15px] font-semibold text-[16px] rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
