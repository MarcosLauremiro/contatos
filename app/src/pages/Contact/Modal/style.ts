import styled from "styled-components";

export const StyleModal = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Roboto Mono', monospace;

  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;

  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);

  z-index: 10;
  .modal-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: #fff;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    form {
      max-width: 400px;
      width: 100%;
      padding: 20px;
      background-color: #f5f5f5;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

      .header-form {
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        button {
          background-color: transparent;
          border: none;
          cursor: pointer;

          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
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
`;
