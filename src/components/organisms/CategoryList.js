import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Flex } from '@chakra-ui/react'
import { CategoryCard, BookCard } from 'components/molecules'
import { Text } from 'components/atoms'
import { getBooksByCategory, getCategories } from 'services/api/requests'

export const CategoryList = () => {
  const [selected, setSelected] = useState()
  const { data } = useQuery('categories', getCategories)
  const bookQuery = useQuery(
    ['booksById', selected],
    () => getBooksByCategory(selected),
    {
      enabled: !!selected
    }
  )
  console.log({ bookQuery })

  useEffect(() => {
    if (!selected && data?.data) {
      setSelected(data?.data[0].id)
    }
  }, [data])
  return (
    <Flex
      flexDir="column"
      mt={['24px', '48px']}
      paddingX={['24px', '48px', '80px', '112px']}
      overflowX={['scroll', 'auto']}
      h='400px'
      css={{
        '::-webkit-scrollbar': {
          display: 'none'
        }
      }}
    >
      <Text.ScreenTitle>Categories</Text.ScreenTitle>
      <Flex mt={['12px', '24px']} flexDir="row">
        {data?.data &&
          data?.data.map((item) =>
            <CategoryCard
              key={`book_${item.id}`}
              selected={selected === item.id}
              onClick={() => setSelected(item.id)}
              {...item}
          />
          )}
      </Flex>
      <Flex mt={['12px', '24px']} flexDir="row" pb='48px' cursor='pointer'>
        {bookQuery?.data &&
          bookQuery?.data?.data.map((item) => <BookCard key={`book_${item.id}`} {...item} />)}
      </Flex>
    </Flex>
  )
}
