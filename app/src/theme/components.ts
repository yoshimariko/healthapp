import type { ComponentStyleConfig, ComponentMultiStyleConfig } from '@chakra-ui/theme';

export const Menu: ComponentMultiStyleConfig = {
  parts: ['button', 'list', 'item'],
  variants: {
    hamburger: {
      button: {
        backgroundColor: 'dark.500',
        _hover: {
          backgroundColor: 'dark.500'
        },
        _active: {
          backgroundColor: 'dark.500'
        }
      },
      list: {
        backgroundColor: 'dark.300',
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
          backgroundColor: 'blackAlpha.400'
        },
        _focus: {
          backgroundColor: 'blackAlpha.400'
        }
      }
    }
  }
}

export const Badge: ComponentStyleConfig = {
  variants: {
    notification: {
      backgroundColor: 'primary.600',
      borderRadius: '55px',
      fontSize: 'xxs',
      px: '5px'
    }
  }
};