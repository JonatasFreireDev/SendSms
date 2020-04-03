import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }to{
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
   height: 100%;
   width: 100%;
   color: 'grey';
   svg {
      font-size: 40px;
      animation: ${rotate} 1s linear infinite;
   }
`;

export default Loader;
