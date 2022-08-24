import React from 'react';
import {
  AspectRatio, 
  Box, 
  Image, 
  VStack, 
  Button, 
  Tabs, 
  TabList, 
  Tab, 
  TabPanels, 
  Grid, 
  GridItem, 
  Text,
  TabPanel,
  HStack,
  useStyleConfig
} from '@chakra-ui/react';

import MainLayout from '../components/Layout';
import Chart from '../components/Chart';

import { chartData, diaryEntries, exerciseEntries } from '../lib/populator';

import Rec01 from '../assets/image/rec01.jpg';
import Rec02 from '../assets/image/rec02.jpg';
import Rec03 from '../assets/image/rec03.jpg';
import StringToJsx from '../components/StringToJsx';

interface RecordEntryLinkGridItemType {
  /** 記録のリンク先 */
  link: string,
  /** 記録のリンクサムネイル */
  img: string,
  /** 記録のリンク見出し */
  title: string,
  /** 記録のリンク小見出し */
  sub: string
}

interface DiaryEntryGridItemType {
  /** 日記の作成した日付 */
  date: string,
  /** 日記の作成した時間 */
  time: string,
  children: React.ReactNode
}

interface ExerciseEntryGridItemType {
  /** 運動記録のタイトル */
  title: string,
  /** 運動記録のカロリ */
  cal: number,
  /** 運動記録の時間 */
  time: number
}

const RecordEntryLinkGridItem: React.FC<RecordEntryLinkGridItemType> = ({
  link,
  img,
  title,
  sub
}) => {
  return (
    <GridItem
      as="a"
      href={link}
      color="white"
      textAlign="center"
      borderWidth="20px"
      borderColor="primary.300"
      position="relative"
    >
      <Box
        bgColor="dark.500"
        position="absolute"
        zIndex={1}
        top={0}
        h="100%"
        w="100%"
        opacity="0.7"
      ></Box>
      <AspectRatio ratio={1 / 1}>
        <Image
          src={img}
          objectFit="cover"
          style={{ filter: 'grayscale(100%)' }}
        />
      </AspectRatio>
      <VStack
        justifyContent="center"
        position="absolute"
        top={0}
        h="100%"
        w="100%"
        zIndex={11}
      >
        <Text fontSize="3xl" color="primary.300">{title}</Text>
        <Text fontSize="sm" bgColor="primary.500" w="160px">{sub}</Text>
      </VStack>
    </GridItem>
  );
}

const DiaryEntryGridItem: React.FC<DiaryEntryGridItemType> = ({
  date,
  time,
  children
}) => {
  return (
    <GridItem
      bgColor="white"
      border="2px"
      borderColor="dark.400"
      minH="230px"
      p="16px"
    >
      <Text fontSize="lg" color="dark.500" w="100%" mb="8px">
        {date}<br />{time}
      </Text>
      <Text fontSize="xs" color="dark.500">
        {children}
      </Text>
    </GridItem>
  );
}

const ExerciseEntryGridItem: React.FC<ExerciseEntryGridItemType> = ({
  title,
  cal,
  time
}) => {
  return (
    <GridItem borderBottom="1px" borderColor="dark.300" pe="16px">
      <HStack mb="4px">
        <HStack flex={1} alignItems="start">
          <Text color="white" fontWeight="extrabold">・</Text>
          <Box>
            <Text color="white" fontSize="15px">{title}</Text>
            <Text color="primary.300" fontSize="15px">{cal}kcal</Text>
          </Box>
        </HStack>
        <Text color="primary.300" fontSize="lg">{time} min</Text>
      </HStack>
    </GridItem>
  );
}

const Record: React.FC = () => {
  const styles = useStyleConfig('CustomScroll', {});

  return (
    <MainLayout>
      <Grid templateColumns="repeat(3, 1fr)" gap="32px" mb="56px">
        <RecordEntryLinkGridItem img={Rec01} title="BODY RECORD" sub="自分のカラダの記録" link="#" />
        <RecordEntryLinkGridItem img={Rec02} title="MY EXERCISE" sub="自分の運動の記録" link="#" />
        <RecordEntryLinkGridItem img={Rec03} title="MY DIARY" sub="自分の日記" link="#" />
      </Grid>
      <Box bgColor="dark.500" p="16px" mb="56px">
        <HStack gap="24px">
          <Text color="white" fontSize="14px">BODY<br/>RECORD</Text>
          <Text color="white" fontSize="xxl">2021.05.21</Text>
        </HStack>
        <Tabs variant="dark">
          <TabPanels>
            <TabPanel>
              <Chart graphData={chartData} height={204} />
            </TabPanel>
            <TabPanel>
              <Chart graphData={chartData} height={204} />
            </TabPanel>
            <TabPanel>
              <Chart graphData={chartData} height={204} />
            </TabPanel>
            <TabPanel>
              <Chart graphData={chartData} height={204} />
            </TabPanel>
          </TabPanels>
          <TabList>
            <Tab w="56px" h="24px">日</Tab>
            <Tab w="56px" h="24px">週</Tab>
            <Tab w="56px" h="24px">月</Tab>
            <Tab w="56px" h="24px">年</Tab>
          </TabList>
        </Tabs>
      </Box>
      <Box bgColor="dark.500" p="16px" mb="56px" h="312px">
        <HStack gap="24px" mb="4px">
          <Text color="white" fontSize="14px">MY<br/>EXERCISE</Text>
          <Text color="white" fontSize="xxl">2021.05.21</Text>
        </HStack>
        <Grid
          sx={styles}
          templateColumns="repeat(2, 1fr)"
          columnGap="40px"
          rowGap="8px"
          maxH="225px"
          pe="24px"
          overflowY="scroll"
        >
          {/* TODO: 本データに変更 */}
          {exerciseEntries.map((data) => 
            <ExerciseEntryGridItem title={data.title} cal={data.cal} time={data.time} />
          )}
        </Grid>
      </Box>
      <Text fontSize="xxl" color="dark.500">MY DIARY</Text>
      <Grid templateColumns="repeat(4, 1fr)" gap="32px" mb="56px">
        {/* TODO: 本データに変更 */}
        {diaryEntries.map((data) => 
          <DiaryEntryGridItem date={data.date} time={data.time}>
            <StringToJsx text={data.content} />
          </DiaryEntryGridItem>
        )}
      </Grid>
      <Button
        display="flex"
        mx="auto"
        variant="primary"
        minW="296px"
        minH="56px"
      >
        自分の日記をもっと見る
      </Button>
    </MainLayout>
  );
};

export default Record;