import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const CategoryCard = ({ onClick, name, selected }) => {
  return (
    <Flex
      onClick={onClick}
      h='36px'
      px='14px'
      py='12px'
      borderColor={selected ? 'brand.black' : 'brand.grayLight'}
      bg={selected ? 'brand.black' : 'brand.background'}
      borderStyle='solid'
      borderWidth='1px'
      mr = '8px'
      borderRadius='8px'
      alignItems='center'
      justifyContent='center'
      cursor='pointer'
    >
      <Text
        fontSize='14px'
        fontWeight='600'
        color={selected ? 'brand.white' : 'brand.black'}
      >
        {name}
      </Text>
    </Flex>
  )
}
