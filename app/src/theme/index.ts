import { extendTheme } from "@chakra-ui/react";

import { Menu, Badge, Button, Tabs, CustomScroll } from "./components";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: '#414141',
        bgColor: '#F2F2F2'
      }
    }
  },
  fonts: {
    body: 'Inter, Noto Sans JP, system-ui, sans-serif'
  },
  fontSizes: {
    '3xl': '25px',
    xxl: '22px',
    xl: '20px',
    lg: '18px',
    md: '16px', // default
    sm: '14px',
    xs: '12px',
    xxs: '10px'
  },
  colors: {
    primary: {
      '300': '#FFCC21',
      '500': '#FF963C', // default
      '600': '#EA6C00'
    },
    dark: {
      '300': '#777777',
      '400': '#707070',
      '500': '#414141', // default
      '600': '#2E2E2E'
    }
  },
  components: {
    Menu,
    Badge,
    Button,
    Tabs,
    CustomScroll
  }
});