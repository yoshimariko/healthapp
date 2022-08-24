import React from 'react';
import { Box, Image, VStack, Text } from '@chakra-ui/react';

import Hex from '../assets/image/hex.svg';

interface HexButtonType {
  /** ボタンのリンク先 */
  link: string,
  /** ボタンのアイコン */
  img: string,
  /** ボタンのラーベル */
  label: string
}

export const HexButton: React.FC<HexButtonType> = ({ link, img, label }) => {
  return (
    <Box as="a" href={link} position="relative">
      <Image src={Hex} />
      <VStack position="absolute" top="20%" left={0} right={0} mx="auto">
        <Image src={img} display="flex" />
        <Text color="white" mt={0}>{label}</Text>
      </VStack>
    </Box>
  );
}