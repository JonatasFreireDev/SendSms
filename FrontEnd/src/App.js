import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import history from './services/history';
import theme from './styles/theme';
import Routes from './routes';
import GlobalStyle from './styles/globalStyles';

function App() {
   return (
      <Router history={history}>
         <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routes />
            <ToastContainer autoClose={3000} />
         </ThemeProvider>
      </Router>
   );
}

export default App;
