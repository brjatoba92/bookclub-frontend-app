import { Text as ChakraText } from '@chakra-ui/react'

export const Text = ({ children, ...props }) => (
  <ChakraText {...props}>{children}</ChakraText>
)

Text.ScreenTitle = ({ children, ...props }) => (
  <ChakraText
    fontSize={['16px', '20px']}
    fontWeight='800'
    color='brand.black'
    {...props}
  >
    {children}
  </ChakraText>
)

Text.ScreenTitle.displayName = 'ScreenTitle'
