import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export const SearchBar = () => {
  return (
    <Flex w='478px' h='52px' bg='brand.grayLight' borderRadius='12px'>
      <InputGroup>
        <InputLeftElement h='100%'>
          <SearchIcon color='brand.greyDark'/>
        </InputLeftElement>
        <Input
          placeholder='Enter the name of the book or author'
          w='100%'
          h='100%'
          _placeholder={{ color: 'brand.greyDark' }}
          borderWidth='0px'
          focusBorderColor='transparent'
        />
      </InputGroup>
    </Flex>
  )
}
