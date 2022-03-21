import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;

  ::-webkit-scrollbar{
    width: 5px;
    background-color: #FFF8F5;
}
::-webkit-scrollbar-thumb{
    border-radius: 2px;
    background-color: #f91944;
}
::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #FFF8F5;
}
}

body{
  font-family: 'Poppins', sans-serif;

  input:focus{
    outline: 0;
    border: 0;
  }

  a{
    color:black;
  }
}
`;
