import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
    height:100%;
}
*{
    box-sizing:border-box
}
body{
    background-color:#74B9FF;
    font-family:Arial, Helvetica, sans-serif;
    padding-top:30px;
}
h1{
  font-size:3rem;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  height: 80%;
  margin: auto;
  background-color: white !important;
  > p {
    color: #74b9ff;
  }
  .score {
    color: #111;
    font-size: 2rem;
  }
  h1 {
    font-size: 3rem;
    color: #74b9ff;
    margin: 10px;
  }
  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(90deg, #56ffa4, #59bc86);
    color: white;
    margin-top: 20px;
    border: 0px;
    border-radius: 25px;
    padding: 10px 25px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  align-items: center;
  color: #74b9ff;
  padding-top: 50px;
  text-align: left;
  > button {
    margin-bottom: 20px;
    width: 25%;
  }
  > label {
    font-size: 1.5rem;
    margin-top: 50px;
    text-align: left;
  }
  > select {
    color: #fff;
    margin-top: 5px;
    width: 25%;
    font-size: 1rem;
    padding: 10px 25px;
    align-items: center;
    border: 0px;
    border-radius: 25px;
    background-color: #74b9ff;
    overflow: hidden;
    margin-bottom: 20px;
  }
`;
