import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
    height:100%;
}
*{
    box-sizing:border-box
}
body{
    background:linear-gradient(#111,#fff)
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
    background: linear-gradient(180deg, #fff, #ffcc91);
    margin-top: 50px;
    border: 0px;
    border-radius: 25px;
    padding: 10px 25px;
  }
`;
