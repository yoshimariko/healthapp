import React from 'react';
import {
  GridItem,
  Image,
  Box,
  Text,
} from '@chakra-ui/react';

interface ImageCardLinkGridItemType {
  /** カードのサムネイル */
  img: string,
  /** カードのバッジ */
  label: string,
  /** カードのリンク先 */
  link: string,
  children?: React.ReactNode
}

export const ImageCardLinkGridItem: React.FC<ImageCardLinkGridItemType> = ({
  link,
  img,
  label,
  children
}) => {
  return (
    <GridItem
      as="a"
      display="flex"
      flexDirection="column"
      href={link}
      pb="18px"
    >
      <Box
        position="relative"
        h="100%"
        w="100%"
        mb="8px"
      >
        <Image src={img} h="100%" objectFit="cover" />
        <Box
          position="absolute"
          bottom={0} ps="8px"
          pe="22px"
          bgColor="primary.300"
        >
          <Text color="white" fontSize="sm">{label}</Text>
        </Box>
      </Box>
      <Box>
        {children}
      </Box>
    </GridItem>
  );
};