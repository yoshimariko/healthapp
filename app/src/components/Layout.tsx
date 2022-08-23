import React from 'react';
import { Container } from '@chakra-ui/react';

const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Container maxW="100%" p="0">
      {children}
    </Container>
  );
}

export default MainLayout;