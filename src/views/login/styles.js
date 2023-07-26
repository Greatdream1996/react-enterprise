import styled from 'styled-components'

export const LoginStyle = styled.div`
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #aaa;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #335ddc;
    border-radius: 8px;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  body {
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell',
      'Fira Sans', 'Droid Sans', 'Helvetica Neue';
  }

  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  .login-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    max-width: 1000px;
    background-color: white;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.16);
    overflow: hidden;
    margin: 0 auto;
    border-radius: 12px;
  }
  #login-form {
    flex: 1 0 100%;
    max-width: 480px;
    width: 100%;
    padding: 60px;
  }
  #login-form p {
    margin-bottom: 30px;
  }
  #login-form p.form-title {
    color: #333333;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 42px;
    font-weight: bold;
    line-height: 1;
    margin-bottom: 0;
  }
  #login-form .ant-form-item-label > label.ant-form-item-required::before {
    display: none;
  }
  .ant-form-item-control-input-content {
    text-align: left;
  }
  #login-form .ant-input-affix-wrapper {
    padding: 12px 15px;
  }
  #login-form_username {
    height: 48px;
  }
  #login-form .ant-btn {
    height: 42px;
    letter-spacing: 1px;
    border-radius: 6px;
  }
  .login-form-button {
    width: 100%;
  }
  .illustration-wrapper {
    display: flex;
    align-items: flex-end;
    max-width: 800px;
    min-height: 100%;
    background-color: #fffdf2;
  }
  .illustration-wrapper img {
    display: block;
    width: 100%;
  }
  @media screen and (max-width: 1023px) {
    .login-box {
      flex-direction: column;
      box-shadow: none;
    }
    .illustration-wrapper {
      max-width: 100%;
      min-height: auto;
    }
    #login-form {
      max-width: 100%;
    }
  }
`
