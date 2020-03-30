import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   *{
      margin: 0;
      padding:0;
      outline: 0;
      box-sizing: border-box;
   }
   body{
      background: #9ed9ff;
      background: -moz-linear-gradient(-45deg,  #9ed9ff 1%, #a3ebff 59%);
      background: -webkit-linear-gradient(-45deg,  #9ed9ff 1%,#a3ebff 59%);
      background: linear-gradient(135deg,  #9ed9ff 1%,#a3ebff 59%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9ed9ff', endColorstr='#a3ebff',GradientType=1 );

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
`;
