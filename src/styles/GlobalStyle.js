import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
}
*:focus {
  outline: 0;
}
html, body ,#root {
  height: 100%;
}
body {
    -webkit-font-smoothing: antialiased;
    background: #0005;
  }
  body, input, button {
    font: 14px 'Roboto' ,sans-serif;
  }
  a {
     text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }

`;
