import { Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { NavBar, BookList } from 'components'
import { useQuery } from 'react-query'
import { getHighlightedBooks } from 'services/api/requests'

export const HomeScreen = () => {
  const userStore = useSelector((state) => state.user)
  console.log({ userStore })
  const { error, data } = useQuery('highlighted', getHighlightedBooks)
  console.log({ error, data })
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
        <BookList data={data?.data} />
      </Flex>
  )
}
