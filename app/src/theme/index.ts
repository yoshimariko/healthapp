import { extendTheme } from "@chakra-ui/react";

import { Menu, Badge } from "./components";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: '#414141',
        backgroundColor: '#F2F2F2'
      }
    }
  },
  fonts: {
    body: 'Inter, Noto Sans JP, system-ui, sans-serif'
  },
  fontSizes: {
    lg: '18px',
    md: '16px', // default
    sm: '14px',
    xs: '12px',
    xxs: '10px'
  },
  colors: {
    primary: {
      '500': '#FF963C', // default
      '600': '#EA6C00'
    },
    dark: {
      '300': '#777777',
      '500': '#414141' // default
    }
  },
  components: {
    Menu,
    Badge
  }
})