import React from 'react';
import {
  Grid,
  GridItem,
  Image,
  Box,
  Text,
  GridProps
} from '@chakra-ui/react';

interface ImageCardType {
  /** カードのサムネイル */
  img: string,
  /** カードのバッジ */
  label: string
}

export const ImageCardGrid: React.FC<GridProps> = (props) => {
  return (
    <Grid {...props}>
      {props.children}
    </Grid>
  );
}

export const ImageCard: React.FC<ImageCardType> = ({ img, label }) => {
  return (
    <GridItem as="a" href="#" position="relative">
      <Image src={img} h="100%" objectFit="cover" />
      <Box
        position="absolute"
        bottom={0} ps="8px"
        pe="22px"
        bgColor="primary.300"
      >
        <Text color="white" fontSize="sm">{label}</Text>
      </Box>
    </GridItem>
  );
};