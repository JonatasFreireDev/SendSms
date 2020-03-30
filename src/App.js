import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import theme from './styles/theme';

import Routes from './routes';
import GlobalStyle from './styles/globalStyles';

function App() {
   return (
      <BrowserRouter>
         <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routes />
         </ThemeProvider>
      </BrowserRouter>
   );
}

export default App;
