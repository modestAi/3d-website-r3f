import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Oswald', sans-serif;
    font-size: 25px;
    box-sizing: border-box;
  }


html,
body,
#root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  user-select: none;
  overflow: hidden;
  font-size: 14px;
}

#root {
  overflow: auto;
}
  ul {
    list-style-type: none;
  }
  body{
     position:fixed
  }
  input:focus {
    outline: none;  
  }
  
  a {
    text-decoration: none;
  }
`;
