import React, { useEffect, useState } from 'react';
import { 
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Grid,
  HStack,
  Image,
  Text
} from '@chakra-ui/react';

import { chartData, getDietHistories } from '../lib/populator';

import MainLayout from '../components/Layout';
import Chart from '../components/Chart';
import { ImageCardLinkGridItem } from '../components/GridCards';
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
  date: string,
  /** 食事履歴のリンク先 */
  link: string,
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
            fontSize="3xl"
          >
            {per}%
          </Text>
        </CircularProgressLabel>
      </CircularProgress>
    </Flex>
  );
}

const Top: React.FC = () => {
  const [dietHistories, setDietHistories] = useState<DietHistoryType[]>();

  useEffect(() => {
    // NOTE: 仮データを用意する
    // TODO: 本データーに変更
    getDietHistories().then((data) => setDietHistories(data));
  }, []);

  return (
    <MainLayout>
      <HStack h="312px" overflow="hidden" mt="-56px" mx="-160px" bgColor="dark.600">
        <Flex position="relative" minW="45%">
          <Image position="relative" src={Top01} width="auto" />
          {/* TODO: 本データに変更 */}
          <TopCircularChart date="05/21" per={75} />
        </Flex>
        <Flex flex="1">
          {/* TODO: 本データに変更 */}
          <Chart graphData={chartData} height={312} />
        </Flex>
      </HStack>
      <HStack my="22px" gap="84px" justifyContent="center">
        <HexButton link="#" img={KnifeIco} label="Morning" />
        <HexButton link="#" img={KnifeIco} label="Lunch" />
        <HexButton link="#" img={KnifeIco} label="Dinner" />
        <HexButton link="#" img={CupIco} label="Snack" />
      </HStack>
      <Grid templateColumns='repeat(4, 1fr)' gap={6} mb="28px">
        {/* TODO: 本データに変更 */}
        {dietHistories &&
          dietHistories.map((data) => 
            <ImageCardLinkGridItem 
              img={data.img} 
              label={`${data.date}.${data.label}`} 
              link={data.link}
            />
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
        記録をもっと見る
      </Button>
    </MainLayout>
  );
}

export default Top;