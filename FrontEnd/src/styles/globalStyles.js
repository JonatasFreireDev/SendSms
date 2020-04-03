import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
   *{
      margin: 0;
      padding:0;
      outline: 0;
      box-sizing: border-box;
   }
   body{
      background: ${(props) => props.theme.mainColors.primary};
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-items: center;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
   }
   body, input, button{
      font: 14px sans-serif;
   }
   #root{
      margin: 0 auto;
   }
   button{
      cursor: pointer;
   }
   hr{
      opacity: 0.2;
      margin: 0 25px;
      color: red;
   }
   a {
      text-decoration: none;
      color: black;
      &:active,
      &:focus,
      &:visited {
         color: black;
      }
   }
   button {
         background: ${(props) => props.theme.colors.backgSeg};
         color: white;
         opacity: ${(props) => (props.loading ? '0.5' : '1')};
         margin-top: 30px;
         padding: 15px;
         border: none;
         border-radius: 10px;
         transition: all 0.2s;
      }

      button:hover {
         background: ${darken(0.1, 'grey')};
      }
`;
