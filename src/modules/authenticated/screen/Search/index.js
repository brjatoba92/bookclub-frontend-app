import { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { NavBar, Text, BookList, AuthorList } from 'components'
import { searchQuery } from 'services/api/requests'
import { useQuery } from 'react-query'

export const SearchScreen = () => {
  const [query, setQuery] = useState('')
  const { data, isLoading } = useQuery(
    ['search', query],
    () => searchQuery(query),
    {
      enabled: query.length >= 3
    }
  )

  return (
    <Flex flexDir='column'>
      <NavBar query={query} setQuery={setQuery}/>
      <Flex
        w='100%'
        maxW='100vw'
        mt={['24px', '48px']}
        flexDir={['column']}
        alignItems={['center', 'flex-start']}
        justifyContent={['center', 'flex-start']}
      >
        <Flex paddingX={['24px', '48px', '80px', '112px']}>
          <Text.ScreenTitle>Search result</Text.ScreenTitle>
        </Flex>
        <Flex width='100%' alignItems='flex-start' justifyContent='flex-start'>
          <BookList
            title='Books'
            data={data?.data?.books}
            isLoading={isLoading}
          />
        </Flex>
        <Flex width='100%' alignItems='flex-start' justifyContent='flex-start'>
          <AuthorList
            data={data?.data?.authors}
            isLoading={isLoading}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
