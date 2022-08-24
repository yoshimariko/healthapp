import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { HStack } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <HStack
      color="white"
      bgColor="dark.500"
      h="128px"
      px="10%"
      gap="45px"
      fontSize="11px"
    >
      <RouterLink to="#">会員登録</RouterLink>
      <RouterLink to="#">運営会社</RouterLink>
      <RouterLink to="#">利用規約</RouterLink>
      <RouterLink to="#">個人情報の取扱について</RouterLink>
      <RouterLink to="#">特定商取引法に基づく表記</RouterLink>
      <RouterLink to="#">お問い合わせ</RouterLink>
    </HStack>
  );
};

export default Footer;