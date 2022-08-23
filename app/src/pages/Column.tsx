import React, { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  GridItem,
  Text
} from '@chakra-ui/react';

import { ColumnEntries } from '../lib/populator';

import MainLayout from '../components/Layout';
import { ImageCard, ImageCardGrid } from '../components/Cards';

interface ColumnEntryType {
  /** コラムのサムネイル */
  img: string,
  /** コラムの日付 */
  date: string,
  /** コラムの抜粋 */
  desc: string,
  /** コラムのカテゴリ */
  cat: string[]
}

const ColumnCategoryGrid: React.FC<{
  /** カテゴリ見出し */
  title: string,
  /** カテゴリ小見出し */
  sub: string,
  /** カテゴリリンク先 */
  link: string
}> = ({ title, sub, link }) => {
  return (
    <GridItem as="a" href={link} bgColor="dark.600" color="white" textAlign="center" py="24px" px="8px">
      {title.split(' ').map((word) => <Text fontSize="xxl" color="primary.300">{word}</Text>)}
      <Divider w="56px" mx="auto" my="8px" />
      <Text>{sub}</Text>
    </GridItem>
  );
}

const Column: React.FC = () => {
  const [columnEntries, setColumnEntries] = useState<ColumnEntryType[]>();

  useEffect(() => {
    // NOTE: 仮データを用意する
    // TODO: 本データーに変更
    ColumnEntries().then((data) => setColumnEntries(data));
  }, []);
  
  return (
    <MainLayout>
      <Container px="160px" py="56px" maxW="100%">
        <Grid templateColumns="repeat(4, 1fr)" gap="32px" mb="56px">
          <ColumnCategoryGrid link="#" title="RECOMMENDED COLUMN" sub="オススメ" />
          <ColumnCategoryGrid link="#" title="RECOMMENDED DIET" sub="ダイエット" />
          <ColumnCategoryGrid link="#" title="RECOMMENDED BEAUTY" sub="美容" />
          <ColumnCategoryGrid link="#" title="RECOMMENDED HEALTH" sub="健康" />
        </Grid>
        <ImageCardGrid templateColumns='repeat(4, 1fr)' gap={3} mb="28px">
          {columnEntries &&
            columnEntries.map((data) => 
              <ImageCard img={data.img} label={`${data.date}`}>
                <Text>{data.desc}</Text>
                {data.cat.map((cat) => 
                  <Text as="span" fontSize="xs" color="primary.500" me="8px">#{cat}</Text>
                )}
              </ImageCard>
            )
          }
        </ImageCardGrid>
        <Button
          display="flex"
          mx="auto"
          variant="primary"
          minW="296px"
          minH="56px"
        >
          コラムをもっと見る
        </Button>
      </Container>
    </MainLayout>
  );
};

export default Column;