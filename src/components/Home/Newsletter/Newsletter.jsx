import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./Newsletter.css";

// Esquema de validación de Yup
const Newsletter = Yup.object().shape({
  email: Yup.string()
    .email("Email inválido")
    .required("El email es obligatorio"),
});

const NewsletterForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-6 w-full">
      <Formik
        initialValues={{ email: "" }}
        validationSchema={Newsletter}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          console.log(values);
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
            setSubmitting(false); // Finalizar el estado de envío
          }, 10000);
          resetForm();
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <>
            <Form
              className="w-full flex flex-col items-center justify-center"
              style={{ padding: "30px" }}
            >
              <h2
                className="font-bold text-center text-black mb-4"
                style={{ fontSize: "30px" }}
              >
                SUBSCRIBE TO OUR NEWSLETTER
              </h2>
              <p className="text-sm text-center text-black mb-6">
                Promotions, new products and sales. Directly to your inbox.
              </p>
              <div className="w-full flex justify-between items-center max-w-md">
                <Field
                  type="email"
                  name="email"
                  className="field-form w-full p-2.5 text-gray-700 border appearance-none focus:outline-none focus:shadow-outline cursor-pointer"
                  placeholder="Your email"
                />
                <button
                  type="submit"
                  className="btn inline-block px-6 py-4 text-white shadow focus:outline-none focus:shadow-outline"
                  disabled={!(isValid && dirty)} // El botón está deshabilitado si el formulario no es válido o no ha sido tocado
                  style={{ backgroundColor: "red" }}
                >
                  <FaChevronRight />
                </button>
              </div>
              {dirty && errors.email && touched.email && (
                <div className="text-red-500 text-sm">{errors.email}</div>
              )}
            </Form>
            {isSubmitted && (
              <div className="text-green-800 text-sm">
                ¡Correo suscrito al newsletter con éxito!
              </div>
            )}
          </>
        )}
      </Formik>
    </div>
  );
};

export default NewsletterForm;
