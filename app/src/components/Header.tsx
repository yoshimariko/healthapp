import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Badge,
  Box,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react';

import Logo from '../assets/image/logo.png';
import MemoIco from '../assets/icons/memo.svg';
import ChallengeIco from '../assets/icons/challenge.svg';
import InfoIco from '../assets/icons/info.svg';
import MenuIco from '../assets/icons/menu.svg';
import CloseIco from '../assets/icons/close.svg';

interface HeaderItemType {
  /** メニューのリンク先 */
  link: string,
  /** メニューのアイコン */
  img: string,
  /** メニューのテキストラベル */
  label: string,
  /** メニューの数字バッジ */
  badge?: number
}

const HeaderItem: React.FC<HeaderItemType> = ({ link, img, label, badge }) => {
  return (
    <RouterLink to={link}>
      <HStack wordBreak="keep-all">
        <Box w="32px" position="relative">
          <Image src={img} />
          {!!badge && (
            <Badge 
              variant="notification"
              position="absolute"
              top="0"
              right="-8px"
            >
              {badge}
            </Badge>
          )}
        </Box>
        <Text>{label}</Text>
      </HStack>
    </RouterLink>
  )
}

const Header: React.FC = () => {
  return (
    <HStack bgColor="dark.500" h="64px" px="10%">
      <RouterLink to="/">
        <Box flex={1}>
          <Image src={Logo} w="110px" />
        </Box>
      </RouterLink>
      <HStack color="white" flex="1" gap="32px" justifyContent="end">
        <HeaderItem link="/record" img={MemoIco} label="自分の記録" />
        <HeaderItem link="#" img={ChallengeIco} label="チャレンジ" />
        <HeaderItem link="#" img={InfoIco} label="お知らせ" badge={1} />
        <Menu variant="hamburger" placement="bottom-end">
          {({ isOpen }) => (
            <>
              <MenuButton
                as={IconButton}
                aria-label="Hamburger"
                isActive={isOpen}
                variant="hamburger"
              >
                <Image src={isOpen ? CloseIco : MenuIco} />
              </MenuButton>
              <MenuList zIndex={111}>
                <RouterLink to="/record"><MenuItem>自分の記録</MenuItem></RouterLink>
                <RouterLink to="#"><MenuItem>体重グラフ</MenuItem></RouterLink>
                <RouterLink to="#"><MenuItem>目標</MenuItem></RouterLink>
                <RouterLink to="#"><MenuItem>選択中のコース</MenuItem></RouterLink>
                <RouterLink to="/column"><MenuItem>コラム一覧</MenuItem></RouterLink>
                <RouterLink to="#"><MenuItem>設定</MenuItem></RouterLink>
              </MenuList>
            </>
          )}
        </Menu>
      </HStack>
    </HStack>
  );
}

export default Header;