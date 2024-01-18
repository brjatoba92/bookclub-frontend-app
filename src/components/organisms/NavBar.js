import { Flex, Image } from '@chakra-ui/react'
import { SearchBar, UserMenu } from 'components/molecules'

export const NavBar = () => {
  return (
    <Flex
      w='100vw'
      flexDir='row'
      alignItems='center'
      justifyContent='space-between'
      paddingX={['24px', '48px', '80px', '112px']}
      paddingTop='24px'

    >
      <Image h={'48px'} w={'160px'} src='/img/logo.svg' alt='BookClub Logo' />
      <SearchBar/>
      <UserMenu/>
    </Flex>
  )
}
