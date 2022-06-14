import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

InputField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  optional: PropTypes.bool,
};
function InputField({
  value,
  label,
  name,
  placeholder,
  type,
  required,
  className,
  onChange,
  optional,
}) {
  // const [showPassword, setShowPassword] = React.useState(false);
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setShowPassword(!showPassword);
  // };
  return (
    <InputDiv className="form-group">
      {label && (
        <label htmlFor="input-field">
          {label} &nbsp;
          {optional && <small>(optional)</small>}
        </label>
      )}
      <main>
        <input
          data-testid="input-field"
          // test-id="input-field"
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete="off"
          required={required}
          className={className}
        />
        {/* {type === "password" && (
          <button onClick={handleClick} className="btn btn-link">
            {showPassword ? <CloseEyeIcon /> : <EyeOpenIcon />}
          </button>
        )} */}
      </main>
    </InputDiv>
  );
}

const InputDiv = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  // min-width: 395px;
  cursor: pointer;
  margin: 10px 0;
  font-family: 'Roboto', sans-serif;
  .border-danger {
    border: 1px solid red;
  }

  & > label {
    color: #0a1045;
    display: block;
    margin-bottom: 5px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 15px;
  }

  main {
    width: 100%;
    position: relative;
  }

  input {
    // width: calc(100% - 20px);
    width: 100%;
    height: 40px;
    background: transparent;
    padding-left: 10px;
    border-radius: 5px;
    border: 1px solid #d9ddee;
    cursor: pointer;
    margin-bottom: 10px;

    ::placeholder {
      color: #0a1045;
      font-size: 15px;
      font-style: normal;
      font-weight: normal;
    }
  }

  input:focus {
    outline: 1px solid blue;
    // background: f3f3f3;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

export default InputField;
