import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
   position: fixed;
   left: 0px;
   top: 0px;
   background: ${(props) => props.theme.colors.backgSeg};
   width: 80px;
   height: 100vh;
   padding: 10px;
   color: white;
`;

export const Content = styled.aside`
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 100%;
   justify-content: space-between;
   align-items: center;

   div {
      display: flex;
      flex-direction: column;
      margin-top: 15px;

      svg {
         margin-bottom: 15px;
         cursor: pointer;
      }

      button {
         background: transparent;
         padding: 0px;
         margin: 0px;
      }
   }
`;

export const Logo = styled.div`
   margin-bottom: 10px;

   img {
      width: 100%;
   }
`;
