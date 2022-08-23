import React, { useEffect, useState } from 'react';
import { 
  Button,
  CircularProgress,
  CircularProgressLabel,
  Container,
  Flex,
  HStack,
  Image,
  Text
} from '@chakra-ui/react';
import { CartesianGrid, LineChart, XAxis, Line, ResponsiveContainer } from 'recharts';

import { chartData, DietHistory } from '../lib/populator';

import MainLayout from '../components/Layout';
import { ImageCard, ImageCardGrid } from '../components/Cards';
import { HexButton } from '../components/Buttons';

import Top01 from '../assets/image/top_01.jpg';
import CupIco from '../assets/icons/cup.svg';
import KnifeIco from '../assets/icons/knife.svg';

interface DietHistoryType {
  /** 食事履歴のサムネイル */
  img: string,
  /** 食事履歴のテキストラベル */
  label: string,
  /** 食事履歴の日付 */
  date: string
}

interface GraphDataType {
  /** グラフのアクシスXラベル */
  name: string,
  /** ラインデータ１ */
  firstData: number,
  /** ラインデータ２ */
  secondData: number
}

const TopGraph: React.FC<{ graphData: GraphDataType[] }> = ({ graphData }) => {
  return (
    <ResponsiveContainer width="100%" minHeight={312}>
      <LineChart data={graphData}
        margin={{ top: 12, right: 30, left: 20, bottom: 12 }}>
        <CartesianGrid horizontal={false} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <Line
          type="linear" 
          dot={{ fill: '#FFCC21' }}
          dataKey="firstData"
          stroke="#FFCC21"
          strokeWidth={3}
        />
        <Line
          type="linear"
          dot={{ fill: '#8FE9D0' }}
          dataKey="secondData"
          stroke="#8FE9D0"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

const TopCircularChart: React.FC<{
  /** ドーナツチャート内の日付ラベル */
  date: string, 
  /** ドーナツチャート内の百分率ラベル */
  per: number
}> = ({ date, per }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      position="absolute"
      top={0}
      bottom={0}
      right={0}
      left={0}
      m={0}
    >
      <CircularProgress
        trackColor="transparent"
        size="180px"
        value={per}
        color="white"
        thickness="2px"
        style={{ filter: 'drop-shadow(0px 0px 6px #FCA500)' }} 
      >
        <CircularProgressLabel>
          <Text 
            as="span" 
            color="white" 
            fontSize="lg" 
            me="4px" 
          >
            {date}
          </Text>
          <Text
            as="span"
            color="white"
            fontSize="25px"
          >
            {per}%
          </Text>
        </CircularProgressLabel>
      </CircularProgress>
    </Flex>
  );
}

const Top: React.FC = () => {
  const [dietHistory, setDietHistory] = useState<DietHistoryType[]>();

  useEffect(() => {
    // NOTE: 仮データを用意する
    // TODO: 本データーに変更
    DietHistory().then((data) => setDietHistory(data));
  }, []);

  return (
    <MainLayout>
      <HStack h="312px" overflow="hidden" bgColor="dark.600">
        <Flex position="relative" minW="45%">
          <Image position="relative" src={Top01} width="auto" />
          {/* TODO: 本データに変更 */}
          <TopCircularChart date="05/21" per={75} />
        </Flex>
        <Flex flex="1">
          {/* TODO: 本データに変更 */}
          <TopGraph graphData={chartData} />
        </Flex>
      </HStack>
      <HStack my="22px" gap="84px" justifyContent="center">
        <HexButton link="#" img={KnifeIco} label="Morning" />
        <HexButton link="#" img={KnifeIco} label="Lunch" />
        <HexButton link="#" img={KnifeIco} label="Dinner" />
        <HexButton link="#" img={CupIco} label="Snack" />
      </HStack>
      <Container px="160px" maxW="100%" pb="64px">
        <ImageCardGrid templateColumns='repeat(4, 1fr)' gap={6} mb="28px">
          {dietHistory &&
            dietHistory.map((data) => 
            <ImageCard img={data.img} label={`${data.date}.${data.label}`} />
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
          記録をもっと見る
        </Button>
      </Container>
    </MainLayout>
  );
}

export default Top;