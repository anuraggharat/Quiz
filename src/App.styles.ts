import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
    height:100%;
}
*{
    box-sizing:border-box
}
body{
    background: linear-gradient(180deg, #74b9ff, #0984e3);
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
  }
  h1 {
    font-size: 3rem;
    color: #fff;
    margin: 10px;
  }
  .start,
  .next {
    cursor: pointer;
    margin-top: 50px;
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
  color: white;
  padding-top: 100px;
  > button {
    margin-bottom: 20px;
    width: 25%;
  }
  > select {
    margin-top: 5px;
    width: 25%;
    font-size: 1rem;
    padding: 10px 25px;
    border: 0px;
    border-radius: 25px;
    overflow: hidden;
    margin-bottom: 20px;
  }
`;
