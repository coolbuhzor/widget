import React from 'react';
import InputField from '../components/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import ClipLoader from "react-spinners/ClipLoader";
import { ErrorStyled, FormRow, Header1, Paragraph, Form } from '../styles';
import axios from 'axios';

import PropTypes from 'prop-types';

FormOne.propTypes = {
  setFormState: PropTypes.func,
};

const FormOne = ({ setFormState }) => {
  // const [isLoading, setIsLoading] = React.useState(false);
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Enter Your First Name'),
    lastName: Yup.string().required('Enter Your Last Name'),
    country: Yup.string().required('Enter Your Country'),
    state: Yup.string().required('Enter Your State'),
    date: Yup.date().required('Add date of birth'),
  });

  const handleLoginSubmit = (values) => {
    const age = new Date().getFullYear() - values.date.split('-')[0];

    axios
      .post('https://6297078214e756fe3b273ab8.mockapi.io/bnpl/api/profile', {
        firstName: values.firstName,
        lastName: values.lastName,
        country: values.country,
        state: values.state,
        age: age,
      })
      .then(function (response) {
        console.log(response);
        setFormState(2);
      })
      .catch(function (error) {
        console.log(error);
      });
    // setSubmitting(true);
    // setIsLoading(true);
  };
  return (
    <>
      <div
        style={{
          background: '#fff',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* </div> */}
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            country: '',
            state: '',
            date: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleLoginSubmit}
          setSubmitting
          enableReinitialize
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Header1>Profile Information</Header1>
              <Paragraph>Enter You Profile Information</Paragraph>
              <FormRow>
                <div className="inner-div">
                  <InputField
                    label="First Name"
                    type="text"
                    placeholder="John "
                    name="firstName"
                    className={` ${errors.firstName && touched.firstName ? 'border-danger' : ''}`}
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.firstName && touched.firstName ? (
                    <ErrorStyled>{errors.firstName || touched.firstName}</ErrorStyled>
                  ) : null}
                </div>
              </FormRow>
              <FormRow>
                <div className="inner-div">
                  <InputField
                    label="Last Name"
                    type="text"
                    placeholder="Doe"
                    name="lastName"
                    className={` ${errors.lastName && touched.lastName ? 'border-danger' : ''}`}
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lastName && touched.lastName ? (
                    <ErrorStyled>{errors.lastName || touched.lastName}</ErrorStyled>
                  ) : null}
                </div>
              </FormRow>
              <FormRow>
                <div className="inner-div">
                  <InputField
                    label="Country"
                    type="text"
                    placeholder="Enter Your Country"
                    name="country"
                    className={` ${errors.country && touched.country ? 'border-danger' : ''}`}
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.country && touched.country ? (
                    <ErrorStyled>{errors.country || touched.country}</ErrorStyled>
                  ) : null}
                </div>
              </FormRow>
              <FormRow>
                <div className="inner-div">
                  <InputField
                    label="State"
                    type="text"
                    placeholder="Enter Your State"
                    name="state"
                    className={` ${errors.state && touched.state ? 'border-danger' : ''}`}
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.state && touched.state ? (
                    <ErrorStyled>{errors.state || touched.state}</ErrorStyled>
                  ) : null}
                </div>
              </FormRow>
              <FormRow>
                <div className="inner-div">
                  <InputField
                    label="Date of Birth"
                    type="date"
                    name="date"
                    placeholder="Jdoe@gmail.com"
                    className={` ${errors.date && touched.date ? 'border-danger' : ''}`}
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.date && touched.date ? (
                    <ErrorStyled>{errors.date || touched.date}</ErrorStyled>
                  ) : null}
                </div>
              </FormRow>
              <FormRow className="credo__register-form-margin-top">
                <button type="submit">
                  proceed
                  {/* {isLoading ? "proceed" : <Spinner />} */}
                  {/* <ClipLoader
                    color="#fff"
                    loading={isLoading}
                    // css={override}
                    size={150}
                  /> */}
                  {/* {!isLoading && "proceed"} */}
                </button>
              </FormRow>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormOne;
