import { MenuItem as ChakraMenuItem, Icon } from '@chakra-ui/react'
import { Text } from './Text'

export const MenuItem = ({ icon, text, divider, onClick }) => (
    <ChakraMenuItem
      h='48px'
      borderBottomWidth={ divider ? '1px' : '0px' }
      borderBottomStyle='solid'
      borderBottomColor='brand.grayLight'
      onClick={onClick}
    >
      <Icon as={icon} mr='8px' boxSize='18px' color='brand.greyDark' />
      <Text color='brand.greyDark' size='14px' fontWeight='600'>{text}</Text>
    </ChakraMenuItem>
)
