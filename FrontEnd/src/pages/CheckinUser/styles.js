import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 300px;
   padding: 30px;
   background: white;
   text-align: center;
   border-radius: 10px;
   box-shadow: 0px 8px 20px -10px rgba(0, 0, 0, 0.75);

   & > span {
      color: red;
      margin-bottom: 20px;
   }

   div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 20px;
      padding: 5px;
   }

   button:disabled {
      cursor: not-allowed;
      opacity: 0.3;
   }
`;
