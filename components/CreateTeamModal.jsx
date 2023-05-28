import React from "react";
import Modal from "./common/Modal";
import * as Yup from "yup";
import { ADD_TEAM } from "../redux/types";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";

const CreateSchema = Yup.object().shape({
  name: Yup.string()
    .max(40, "Team name length must be within 40 !")
    .required("This field is required"),

  playercount: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")

    .required("This field is required"),
  region: Yup.string()
    .max(40, "Team name length must be within 40 !")
    .required("This field is required"),
  country: Yup.string()
    .max(40, "Team name length must be within 40 !")
    .required("This field is required"),
});

export default function CreateTeamModal({ openModal, setOpenModal }) {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.team.teams);

  function onSubmit(values) {
    dispatch({
      type: ADD_TEAM,
      data: {
        teams: [...teams, values],
      },
    });

    setOpenModal(false);
  }

  return (
    <Modal
      isOpen={openModal}
      setIsOpen={setOpenModal}
      title="Create Team"
      bannerIcon=""
      loading={false}
    >
      <div className="mt-8">
        <Formik
          initialValues={{
            name: "",
            playercount: "",
            region: "",
            country: "",
          }}
          validationSchema={CreateSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <div>
                <div className="relative flex space-x-8 items-end mt-[8px]">
                  <div className="w-full text-left">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Team name"
                      className={`input-field mt-1 ${
                        formik.errors.name ? "error-border" : ""
                      }`}
                      autoComplete="off"
                    />
                    <div className="error-field-wrapper h-7 mt-1 ">
                      {formik.errors.name && formik.touched.name ? (
                        <div className="text-negative p3 opacity-60">
                          {formik.errors.name}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="relative flex space-x-8 items-end mt-[8px]">
                  <div className="w-full text-left">
                    <Field
                      type="text"
                      name="playercount"
                      placeholder="Player Count"
                      className={`input-field mt-1 ${
                        formik.errors.playercount ? "error-border" : ""
                      }`}
                      autoComplete="off"
                    />
                    <div className="error-field-wrapper h-7 mt-1 ">
                      {formik.errors.playercount &&
                      formik.touched.playercount ? (
                        <div className="text-negative p3 opacity-60">
                          {formik.errors.playercount}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="relative flex space-x-8 items-end mt-[8px]">
                  <div className="w-full text-left">
                    <Field
                      type="text"
                      name="region"
                      placeholder="Region"
                      className={`input-field mt-1 ${
                        formik.errors.region ? "error-border" : ""
                      }`}
                      autoComplete="off"
                    />
                    <div className="error-field-wrapper h-7 mt-1 ">
                      {formik.errors.region && formik.touched.region ? (
                        <div className="text-negative p3 opacity-60">
                          {formik.errors.region}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="relative flex space-x-8 items-end mt-[8px]">
                  <div className="w-full text-left">
                    <Field
                      type="text"
                      name="country"
                      placeholder="Country"
                      className={`input-field mt-1 ${
                        formik.errors.country ? "error-border" : ""
                      }`}
                      autoComplete="off"
                    />
                    <div className="error-field-wrapper h-7 mt-1 ">
                      {formik.errors.country && formik.touched.country ? (
                        <div className="text-negative p3 opacity-60">
                          {formik.errors.country}
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
                    Create
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="bg-gray-50 flex  justify-center mt-4">
        <button
          type="button"
          className="text-info px-8 primary-outline-button w-full  py-[4px] rounded-[8px] p2"
          onClick={() => setOpenModal(false)}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}
