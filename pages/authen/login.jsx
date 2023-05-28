import React from "react";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_LOADING, UPDATE_USER } from "../../redux/types";

import { Formik, Form, Field } from "formik";

import { wrapper } from "../../redux/store";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .max(40, "Characters length must be within 40 !")
    .required("This field is required"),
});
export default function login() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const router = useRouter();

  function onSubmit(values) {
    dispatch({ type: UPDATE_LOADING, loading: true });

    dispatch({
      type: UPDATE_USER,
      data: {
        username: values.username,
      },
    });
    Cookies.set("username", values.username);
    router.push("/");
  }

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="p-8 border border-[#d7d7d7] rounded-md min-w-[350px] shadow-lg">
          <Formik
            initialValues={{
              username: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <div>
                  <div className="relative flex space-x-8 items-end mt-[8px]">
                    <div className="w-full">
                      <label htmlFor="username" className="p2 ">
                        Username
                      </label>
                      <Field
                        type="text"
                        name="username"
                        placeholder="Username"
                        className={`input-field mt-1 ${
                          formik.errors.username ? "error-border" : ""
                        }`}
                        autoComplete="off"
                      />
                      <div className="error-field-wrapper h-7 mt-1">
                        {formik.errors.username && formik.touched.username ? (
                          <div className="text-negative p3 opacity-60">
                            {formik.errors.username}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-right">
                    <button
                      type="submit"
                      className="primary-gradient-button w-full px-8 py-[4px] rounded-[8px] p2"
                    >
                      {loading ? <>...</> : "Login"}
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

login.getLayout = (page) => page;

export const getServerSideProps = wrapper.getServerSideProps(
  () =>
    async ({ req }) => {
      const { username } = req.cookies;

      if (username) {
        return {
          redirect: {
            destination: "/",
            statusCode: 302,
          },
        };
      }

      return {
        props: {},
      };
    }
);
