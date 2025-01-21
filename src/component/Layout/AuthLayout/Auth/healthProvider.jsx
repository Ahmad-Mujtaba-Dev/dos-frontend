import { Layout } from "./Lay";
import { useFormik } from "formik";
import * as Yup from "yup";

export const HealthProvider = () => {
  const validationSchema = Yup.object({
    providerName: Yup.string().required("Health Provider Name is required"),
    providerAddress: Yup.string().required(
      "Health Provider Address is required"
    ),
    providerPhone:Yup.string().required("Provider Phone is required")
  });

  const formik = useFormik({
    initialValues: {
      providerName: "",
      providerAddress: "",
      providerPhone: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <Layout>
      <div className="w-3/4">
        <h2 className="text-xl font-bold mb-4">Health Provider Details</h2>
        <form className="space-y-4">
          <div className="relative">
            <label className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-500">
              Provider Name
            </label>
            <input
              name="providerName"
              placeholder="John Doe"
              className={`w-full p-3 border rounded-md ${
                formik.touched.providerName && formik.errors.providerName
                  ? "border-red-500"
                  : ""
              }`}
              value={formik.values.providerName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.providerName && formik.errors.providerName && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.providerName}
              </p>
            )}
          </div>

          <div className="relative">
            <label className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-500">
              Address
            </label>
            <input
              name="providerAddress"
              placeholder="house no. 132 b"
              className={`w-full p-3 border rounded-md ${
                formik.touched.providerAddress && formik.errors.providerAddress
                  ? "border-red-500"
                  : ""
              }`}
              value={formik.values.providerAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.providerAddress &&
              formik.errors.providerAddress && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.providerAddress}
                </p>
              )}
          </div>

          <div className="relative">
            <label className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-500">
              Phone Number
            </label>
            <input
              name="providerPhone"
              placeholder="+923007916909"
              className={`w-full p-3 border rounded-md ${
                formik.touched.providerPhone && formik.errors.providerPhone
                  ? "border-red-500"
                  : ""
              }`}
              value={formik.values.providerPhone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.providerPhone &&
              formik.errors.providerPhone && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.providerPhone}
                </p>
              )}
          </div>


          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md"
          >
            Submit
          </button>

          <button type="submit" className="p-3 border rounded-md w-full py-3 rounded-md">
          Cancel
        </button>
          
        </form>
      </div>
    </Layout>
  );
};
