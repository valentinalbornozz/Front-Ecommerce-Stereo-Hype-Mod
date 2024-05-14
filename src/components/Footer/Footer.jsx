import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
  FaCcDiscover,
  FaCcDinersClub,
} from "react-icons/fa";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./Footer.css";

// Esquema de validación de Yup
const NewsletterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email inválido")
    .required("El email es obligatorio"),
});

const Footer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <footer className="bg-black text-white p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Columna MENU */}
        <div>
          <h5 className="font-name font-bold mb-3">MENU</h5>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Search
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                All Products
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Shipping Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Return Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Terms of Service
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Columna MUSIC */}
        <div>
          <h5 className=" font-name font-bold mb-3">MUSIC</h5>
          <ul>
            <li className="mb-2">
              <a
                href="https://www.beatport.com/label/stereohype/85356"
                className="hover:text-gray-300"
              >
                STEREOHYPE | label
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://lnkfi.re/STEREOHYPESOUNDS"
                className="hover:text-gray-300"
              >
                STEREOHYPE | playlist
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://www.youtube.com/stereohype"
                className="hover:text-gray-300"
              >
                STEREOHYPE | YouTube
              </a>
            </li>
          </ul>
        </div>

        {/* Columna FOLLOW US */}
        <div>
          <h5 className="font-name font-bold mb-3">FOLLOW US</h5>
          <div className="icon-follow flex justify-center md:justify-start space-x-4">
            <a
              href="https://www.facebook.com/stereohypeglobal"
              className=" hover:text-gray-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/stereohypegbl"
              className=" hover:text-gray-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/stereohypeglobal"
              className=" hover:text-gray-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/c/stereohype"
              className=" hover:text-gray-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Columna BE IN THE KNOW */}
        <div>
          <h5 className="font-name font-bold mb-3">BE IN THE KNOW</h5>
          <div className="flex flex-col items-center justify-center">
            <Formik
              initialValues={{ email: "" }}
              validationSchema={NewsletterSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                console.log(values);
                setIsSubmitted(true);
                setTimeout(() => {
                  setIsSubmitted(false);
                  setSubmitting(false);
                }, 10000);
                resetForm();
              }}
            >
              {({ errors, touched, isValid, dirty }) => (
                <>
                  <Form className="w-full flex flex-col items-center justify-center">
                    <p className="text-sm  text-white mb-6">
                      Promotions, new products and sales. Directly to your
                      inbox.
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
                      >
                        <FaArrowRight />
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
        </div>
      </div>

      {/* Información de copyright y métodos de pago */}
      <div className="copyright mt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="copyright-p">
          &copy; 2024, <a href="/">STEREOHYPE.</a>
        </p>
        <div className="icon-footer flex justify-center md:justify-start space-x-2">
          <FaCcAmex className="mx-1" />
          <FaCcDinersClub className="mx-1" />
          <FaCcDiscover className="mx-1" />
          <FaCcVisa className="mx-1" />
          <FaCcMastercard className="mx-1" />
          <FaCcPaypal className="mx-1" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
