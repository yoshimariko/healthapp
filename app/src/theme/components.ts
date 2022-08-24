import type { ComponentStyleConfig, ComponentMultiStyleConfig } from '@chakra-ui/theme';

export const Menu: ComponentMultiStyleConfig = {
  parts: ['button', 'list', 'item'],
  variants: {
    hamburger: {
      button: {
        bgColor: 'dark.500',
        _hover: {
          bgColor: 'dark.500'
        },
        _active: {
          bgColor: 'dark.500'
        }
      },
      list: {
        bgColor: 'dark.300',
        border: 'none',
        borderRadius: '0',
        p: '0'
      },
      item: {
        py: '22px',
        px: '32px',
        borderTop: '1px solid rgb(255 255 255 / 15%)',
        borderBottom: '1px solid rgb(46 46 46 / 25%)',
        fontSize: 'lg',
        minW: '280px',
        _hover: {
          bgColor: 'blackAlpha.400'
        },
        _focus: {
          bgColor: 'blackAlpha.400'
        }
      }
    }
  }
}

export const Badge: ComponentStyleConfig = {
  variants: {
    notification: {
      bgColor: 'primary.600',
      borderRadius: '55px',
      fontSize: 'xxs',
      px: '5px'
    }
  }
};

export const Button: ComponentStyleConfig = {
  variants: {
    primary: {
      bgGradient: 'linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)',
      color: 'white'
    }
  }
}

export const Tabs: ComponentMultiStyleConfig = {
  parts: ['list', 'tab'],
  variants: {
    dark: {
      tab: {
        borderRadius: '55px',
        bgColor: 'white',
        color: 'primary.300',
        fontSize: '15px',
        me: '16px',
        _selected: {
          bgColor: 'primary.300',
          color: 'white',
        },
      }
    }
  }
}


/**
 * ----------------------------
 * Custom Styled Components
 * ----------------------------
 */
export const CustomScroll = {
  baseStyle: {
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'dark.300',
      width: '6px',
      borderRadius: '10px'
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'primary.300',
      borderRadius: '24px',
    },
  }
}