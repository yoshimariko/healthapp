import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from './theme';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';

import CustomRoutes from './routes';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
