import styled from 'styled-components';

export const Container = styled.div`
   width: 90vw;
   height: 100vh;
   padding: 10px;
   margin-left: 70px;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   align-content: flex-start;
`;

export const Perfil = styled.div`
   border-radius: 10px;
   background: ${(props) => {
      if (props.distance >= 0 && props.distance < 200) {
         return props.theme.cardColors.green;
      } else if (props.distance >= 200 && props.distance < 300) {
         return props.theme.cardColors.yellow;
      } else if (props.distance >= 300) {
         return props.theme.cardColors.red;
      } else {
         return props.theme.cardColors.default;
      }
   }};
   display: flex;
   flex-direction: row;
   width: 350px;
   height: 135px;
   margin: 10px;
   box-shadow: 0px 8px 20px -10px rgba(0, 0, 0, 0.75);
   padding: 10px;

   &:last-child {
      margin-bottom: 50px;
   }
   & > button {
      background: none;
      color: black;
      margin: 0px;
      padding: 5px;
      width: 10px;
      height: 10px;
      position: relative;
      top: -15px;

      &:hover {
         background: none;
      }

      svg {
         font-size: 20px;
         background: black;
         color: white;
         border-radius: 100%;
         padding: 2px;
         margin: 0px;
      }
   }
`;

export const User = styled.div`
   display: flex;
   flex-direction: column;

   div {
      display: flex;
      align-items: center;
      margin: auto;

      span {
         margin-left: 10px;
      }
   }
`;

export const Checks = styled.div`
   margin-left: auto;
   display: flex;
   flex-direction: column;
   text-align: right;

   p {
      margin: 6px;
   }
`;
