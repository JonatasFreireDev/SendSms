import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
   background: white;
   padding: 40px;
   text-align: center;
   border-radius: 10px;
   box-shadow: 0px 8px 20px -10px rgba(0, 0, 0, 0.75);

   h1 {
      margin-bottom: 10px;
   }

   form {
      width: 100%;
      max-width: 400px;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;

      input {
         margin-bottom: 10px;
         padding: 10px;
         border: 0px;
         border-bottom: 1px solid grey;
         background: transparent;
         transition: all 0.5s;
      }

      input:focus {
         border-bottom: 1px solid blue;
      }

      div {
         display: flex;
         justify-content: space-between;

         input {
            width: 45%;
         }
      }

      span {
         margin-bottom: 7px;
         text-align: center;
         color: red;
      }

      button {
         background: ${(props) => props.theme.colors.buttonColors};
         opacity: ${(props) => (props.loading ? '0.5' : '1')};
         margin-top: 30px;
         padding: 15px;
         border: none;
         border-radius: 10px;
         transition: all 0.2s;
      }

      button:hover {
         background: ${darken(0.1, '#C2FFFF')};
      }
   }
`;
