import React from 'react';
import { Container, Image, Link } from '@chakra-ui/react';

import ToTop from '../assets/icons/to_top.svg';

const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };

  return (
    <Container maxW="100%" position="relative" p="0">
      {children}
      <Link
        href="#"
        display="flex"
        justifyContent="end"
        bottom="25px"
        mb="25px"
        me="80px"
        position="sticky"
        onClick={() => goToTop()}
      >
        <Image src={ToTop} />
      </Link>
    </Container>
  );
}

export default MainLayout;