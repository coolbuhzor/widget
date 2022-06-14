import React from 'react';
import InputField from '../components/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ErrorStyled, FormRow, Form, Header1, Paragraph } from '../styles';
import axios from 'axios';
import PropTypes from 'prop-types';

FormTwo.propTypes = {
  setFormState: PropTypes.func,
};

const FormTwo = ({ setFormState }) => {
  const validationSchema = Yup.object().shape({
    bankName: Yup.string().required('Enter Your Bank Name'),
    accountName: Yup.string().required('Enter Your Account Name'),
    // accountNumber: Yup.number().required("Enter Your Account Number"),
    accountNumber: Yup.string()
      .required('Enter Your Account Number')
      .min(10, 'Phone number should be 10 or 11 digits')
      .max(11, 'Phone number should be 10 or 11 digits'),
  });

  const handleLoginSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    axios
      .post('https://6297078214e756fe3b273ab8.mockapi.io/bnpl/api/bank', {
        accountName: values.accountName,
        accountNumber: values.accountNumber,
        bankName: values.bankName,
      })
      .then(function (response) {
        console.log(response);
        setFormState(3);
      })
      .catch(function (error) {
        console.log(error);
      });

    setSubmitting(false);
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
        <Formik
          initialValues={{
            accountName: '',
            bankName: '',
            accountNumber: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleLoginSubmit}
          enableReinitialize
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Header1>Bank Details</Header1>
              <Paragraph>Enter Your Bank Details</Paragraph>
              <FormRow>
                <div className="inner-div">
                  <InputField
                    label="Account Name"
                    type="text"
                    placeholder="Enter Your Account Name"
                    name="accountName"
                    className={` ${
                      errors.accountName && touched.accountName ? 'border-danger' : ''
                    }`}
                    value={values.accountName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.accountName && touched.accountName ? (
                    <ErrorStyled>{errors.accountName || touched.accountName}</ErrorStyled>
                  ) : null}
                </div>
              </FormRow>
              <FormRow>
                <div className="inner-div">
                  <InputField
                    label="Account Number"
                    type="number"
                    placeholder="Enter Your Account Number"
                    name="accountNumber"
                    className={` ${
                      errors.accountNumber && touched.accountNumber ? 'border-danger' : ''
                    }`}
                    value={values.accountNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.accountNumber && touched.accountNumber ? (
                    <ErrorStyled>{errors.accountNumber || touched.accountNumber}</ErrorStyled>
                  ) : null}
                </div>
              </FormRow>
              <FormRow>
                <div className="inner-div">
                  <InputField
                    label="Bank Name"
                    type="text"
                    placeholder="Enter Your Bank name"
                    name="bankName"
                    className={` ${errors.bankName && touched.bankName ? 'border-danger' : ''}`}
                    value={values.bankName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.bankName && touched.bankName ? (
                    <ErrorStyled>{errors.bankName || touched.bankName}</ErrorStyled>
                  ) : null}
                </div>
              </FormRow>
              <FormRow className="credo__register-form-margin-top">
                <button type="submit"> proceed </button>
              </FormRow>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormTwo;
