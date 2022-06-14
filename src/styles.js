import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const ModalContainer = styled.div`
  width: 600px;
  min-height: 400px;
  max-height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  position: relative;
  overflow-y: scroll;
  .evolve-test-div {
    display: block;
    position: absolute;
    top: 30px;
    right: 30px;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

export const Header1 = styled.h1`
  margin: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 50px;
  letter-spacing: -0.02em;
  color: #0a083b;
`;

export const Paragraph = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 50px;
  letter-spacing: -0.02em;
  color: #57586e;
`;

export const ErrorStyled = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #eb5757 !important;
  margin-top: -10px;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 40px;
  justify-content: center;
  align-items: center;
  aside {
    margin-top: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 50px;
    letter-spacing: -0.02em;
    color: #57586e;
  }
  button {
    width: 48%;
    height: 52px;
    border: 0.3px solid rgb(0, 0, 0, 0.4);
    border-radius: 20px;
    background: transparent;
    // typography
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #0a083b;
  }
`;

export const FormRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  .inner-div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  p {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
  }
`;
