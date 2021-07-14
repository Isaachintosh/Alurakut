import styled from "styled-components";

const Box = styled.div`
  border-radius: 12px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.37);
  background: #424242;
  padding: 16px;
  
  /* CSS Pré-Pronto */
  margin-bottom: 10px;
  .boxLink {
    font-size: 14px;
    color: #2E7BB4;
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #f2f2f7;
    margin-bottom: 20px;
  }
  .borderPerfil {
    border-radius: '16px';
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.26);
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #505050;
  }
  input {
    width: 100%;
    background-color: #F4F4F4;
    color: #fff;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: #c4c4c4;
      opacity: 1;
    }
  }
  box, input {
    background: rgba(255,255,255, 0.15);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  }
  input:hover {
    background-color: rgba(255,255,255, 0.3);
    transition: 0.5s;
  }
  input:focus {
    background-color: rgba(0,0,0, 0.3);
    border: 1px solid rgba(225, 225, 255, 0.6205);
    transition: 0.5s;
    outline-style: none;
  }
  button {
    border: 0;
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 10000px;
    background-color: rgba(255, 255, 255, 0.1105);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
    }
  button:hover {
    background-color: rgba(225, 225, 255, 0.3205);
    transition: 0.5s;
  }
  button:active {
    background-color: rgba(225, 225, 255, 0.6205);
    transition: 0.5s;
  }
`;

export default Box;