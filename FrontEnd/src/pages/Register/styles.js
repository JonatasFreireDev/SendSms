import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
   background: white;
   padding: 40px;
   text-align: center;
   border-radius: 10px;
   box-shadow: 0px 8px 20px -10px rgba(0, 0, 0, 0.75);

   h2 {
      margin-bottom: 15px;
   }

   form {
      width: 100%;
      max-width: 300px;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;

      div {
         display: flex;
         width: 100%;

         svg {
            position: absolute;
            margin: 8px;
            width: 20px;
         }

         input {
            margin-bottom: 10px;
            padding: 10px 20px 10px 40px;
            border: 0px;
            border-bottom: 1px solid grey;
            background: transparent;
            transition: all 0.5s;
         }
         input:focus {
            border-bottom: 1px solid blue;
         }
      }

      span {
         margin-bottom: 7px;
         text-align: center;
         color: red;
      }

      div:last-child {
         display: flex;
         width: 100%;
         height: 100%;
         padding: 10px 0 20px 0;
         margin: auto;
         justify-content: center;
         align-content: center;
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
   }
`;
