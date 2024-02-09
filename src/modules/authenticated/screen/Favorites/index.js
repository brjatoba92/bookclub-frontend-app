import { Flex } from '@chakra-ui/react'
import { NavBar, Text, BookCard } from 'components'
import { useQuery } from 'react-query'
import { getFavorites } from 'services/api/requests'

export const FavoritesScreen = () => {
  const { data } = useQuery('getFavorites', getFavorites)
  return (
    <Flex flexDir='column'>
      <NavBar/>
        <Flex
          flexDir='column'
          w='100%'
          paddingX={['24px', '48px', '80px', '112px']}
          mt={['24px', '48px']}

        >
            <Text.ScreenTitle>Favorites</Text.ScreenTitle>
            <Flex w='100%' flexDir='row' flexWrap='wrap' mt={['24px']} alignItems={['center', 'flex-start']} justifyContent={['center', 'flex-start']}>
              {data?.data?.map(item => <BookCard key={`book_list_favorites_${item.book.id}`} {...item.book}/>)}
            </Flex>
        </Flex>
    </Flex>
  )
}
