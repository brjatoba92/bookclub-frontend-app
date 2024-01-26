import { Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { NavBar, BookList, CategoryList } from 'components'


export const HomeScreen = () => {
  
  const userStore = useSelector((state) => state.user)
  console.log({ userStore })
  return (
      <Flex flexDir='column'>
        <NavBar/>
        <Flex w='100%' h='200px' paddingX={['24px', '48px', '80px', '112px']} mt='48px'>
          <Flex
            bgImage="url('/img/banner.svg')"
            bgSize='cover'
            bgPosition='center'
            bgRepeat='no-repeat'
            borderRadius='24px'
            w='100%'
            h='100%'
          />
        </Flex>
        <BookList />
        <CategoryList />
      </Flex>
  )
}
