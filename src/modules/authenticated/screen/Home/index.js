import { Flex } from '@chakra-ui/react'
// import { useSelector } from 'react-redux'
import { NavBar, BookList, CategoryList } from 'components'
import { useQuery } from 'react-query'
import { getHighlightedBooks } from 'services/api/requests'

export const HomeScreen = () => {
  const { data, isLoading } = useQuery('highlighted', getHighlightedBooks)
  return (
      <Flex flexDir='column'>
        <NavBar/>
        <Flex w='100%' h={['72px', '200px']} paddingX={['24px', '48px', '80px', '112px']} mt={['24px', '48px']}>
          <Flex
            bgImage="url('/img/banner.svg')"
            bgSize='cover'
            bgPosition={['start', 'center']}
            bgRepeat='no-repeat'
            borderRadius={['8px', '24px']}
            w='100%'
            h='100%'
          />
        </Flex>
        <BookList title='Highlighteds' data={data?.data} isLoading={isLoading} />
        <CategoryList />
      </Flex>
  )
}
