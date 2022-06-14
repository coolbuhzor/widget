import React from 'react';
import InputField from '../components/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ErrorStyled, FormRow, Header1, Paragraph, Form } from '../styles';
import axios from 'axios';

const FormThree = ({ setFormState }) => {
  const validationSchema = Yup.object().shape({
    fieldone: Yup.string()
      .required('Enter The last four digit Of Your Card')
      .min(4, 'Should not be less than 4 digits')
      .max(4, 'Should not be more than 4 digits'),
    fieldtwo: Yup.string()
      .required('Enter the d digit OTP sent to you')
      .min(4, 'OTP should not be less than 4 digits')
      .max(4, ' OTP should not be more than 4 digits'),
    fieldthree: Yup.string(),
    // .("Enter the d digit OTP sent to you")
  });

  const handleLoginSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    axios
      .post('https://6297078214e756fe3b273ab8.mockapi.io/bnpl/api/debitmandate', {
        fieldone: values.fieldone,
        fieldtwo: values.fieldtwo,
        fieldthree: values.fieldthree,
        // fieldthree
      })
      .then(function (response) {
        console.log(response);
        setFormState(4);
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
              <Header1>Card Details</Header1>
              <Paragraph>Enter Card Details</Paragraph>
              <FormRow>
                <div className="inner-div">
                  <InputField
                    label="last four card digit"
                    type="number"
                    placeholder="Enter The Last FOur Digit Of Your Card"
                    name="fieldone"
                    className={` ${errors.fieldone && touched.fieldone ? 'border-danger' : ''}`}
                    value={values.fieldone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.fieldone && touched.fieldone ? (
                    <ErrorStyled>{errors.fieldone || touched.fieldone}</ErrorStyled>
                  ) : null}
                </div>
              </FormRow>
              <FormRow>
                <div className="inner-div">
                  <InputField
                    label="OTP"
                    type="number"
                    placeholder="Enter The OTP Sent To You"
                    name="fieldtwo"
                    className={` ${errors.fieldtwo && touched.fieldtwo ? 'border-danger' : ''}`}
                    value={values.fieldtwo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.fieldtwo && touched.fieldtwo ? (
                    <ErrorStyled>{errors.fieldtwo || touched.fieldtwo}</ErrorStyled>
                  ) : null}
                </div>
              </FormRow>
              <FormRow>
                <div className="inner-div">
                  <InputField
                    label="Payment Description"
                    optional
                    type="text"
                    placeholder="Enter Your payment Description"
                    name="fieldthree"
                    value={values.fieldthree}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
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

export default FormThree;
