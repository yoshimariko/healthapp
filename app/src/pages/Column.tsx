import React, { useEffect, useState } from 'react';
import {
  Button,
  Divider,
  Grid,
  GridItem,
  Text
} from '@chakra-ui/react';

import { getColumnEntries } from '../lib/populator';

import MainLayout from '../components/Layout';
import { ImageCardLinkGridItem } from '../components/GridCards';

interface ColumnEntryType {
  /** コラムのサムネイル */
  img: string,
  /** コラムの日付 */
  date: string,
  /** コラムの抜粋 */
  desc: string,
  /** コラムのリンク先 */
  link: string,
  /** コラムのカテゴリ */
  cat: string[]
}

interface ColumnCategoryGridType {
  /** カテゴリ見出し */
  title: string,
  /** カテゴリ小見出し */
  sub: string,
  /** カテゴリリンク先 */
  link: string
}

const ColumnCategoryGridItem: React.FC<ColumnCategoryGridType> = ({ title, sub, link }) => {
  return (
    <GridItem
      as="a"
      href={link}
      bgColor="dark.600"
      color="white"
      textAlign="center"
      py="24px"
      px="8px"
    >
      {title.split(' ').map((word) => 
        <Text fontSize="xxl" color="primary.300">{word}</Text>
      )}
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
    getColumnEntries().then((data) => setColumnEntries(data));
  }, []);
  
  return (
    <MainLayout>
      <Grid templateColumns="repeat(4, 1fr)" gap="32px" mb="56px">
        <ColumnCategoryGridItem link="#" title="RECOMMENDED COLUMN" sub="オススメ" />
        <ColumnCategoryGridItem link="#" title="RECOMMENDED DIET" sub="ダイエット" />
        <ColumnCategoryGridItem link="#" title="RECOMMENDED BEAUTY" sub="美容" />
        <ColumnCategoryGridItem link="#" title="RECOMMENDED HEALTH" sub="健康" />
      </Grid>
      <Grid templateColumns='repeat(4, 1fr)' gap={3} mb="28px">
        {/* TODO: 本データに変更 */}
        {columnEntries?.length &&
          columnEntries.map((data) => 
            <ImageCardLinkGridItem
              img={data.img}
              label={`${data.date}`}
              link={data.link}
            >
              <Text>{data.desc}</Text>
              {data.cat.map((cat) => 
                <Text as="span" fontSize="xs" color="primary.500" me="8px">#{cat}</Text>
              )}
            </ImageCardLinkGridItem>
          )
        }
      </Grid>
      <Button
        display="flex"
        mx="auto"
        variant="primary"
        minW="296px"
        minH="56px"
      >
        コラムをもっと見る
      </Button>
    </MainLayout>
  );
};

export default Column;