import styled from 'styled-components';

export const DivFormStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Roboto Mono', monospace;

  form {
    max-width: 400px;
    width: 100%;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    span {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .input-container {
      margin-bottom: 15px;

      label {
        margin-bottom: 5px;
        color: #555;
      }

      input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }
    }

    .buttons {
      display: flex;
      justify-content: space-between;

      button {
        padding: 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &.login {
          background-color: #3498db;
          color: #fff;
        }

        &.register {
          background-color: #2ecc71;
          color: #fff;
        }
      }
    }
  }
`;