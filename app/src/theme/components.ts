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