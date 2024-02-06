import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Flex, Spinner } from '@chakra-ui/react'
import { CategoryCard, BookCard } from 'components/molecules'
import { Text } from 'components/atoms'
import { getBooksByCategory, getCategories } from 'services/api/requests'

export const CategoryList = ({ title, categoryId }) => {
  const [selected, setSelected] = useState(categoryId)
  const { data } = useQuery('categories', getCategories)
  const {
    data: bookQuery,
    refetch,
    isLoading
  } = useQuery(
    ['booksById', selected],
    () => getBooksByCategory(selected),
    {
      enabled: !!selected
    }
  )

  useEffect(() => {
    if (!selected && data?.data) {
      setSelected(data?.data[0].id)
    }
  }, [data])

  useEffect(() => {
    refetch()
  }, [categoryId])

  return (
    <Flex
      flexDir="column"
      mt={['24px', '48px']}
      paddingX={['24px', '48px', '80px', '112px']}
      overflowX={['scroll', 'auto']}
      h='520px'
      css={{
        '::-webkit-scrollbar': {
          display: 'none'
        }
      }}
    >
      <Text.ScreenTitle>{title || 'Categories'}</Text.ScreenTitle>
      {
        !categoryId && (
          <Flex
            mt='12px'
            flexDir='row'
            overflowX={['scroll', 'auto']}
            css={{
              '::-webkit-scrollbar': {
                display: 'none'
              }
            }}
          >
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
        )
      }
      <Flex
        mt='12px'
        flexDir="row"
        pb='48px'
        cursor='pointer'
        overflowX={['scroll', 'auto']}
        css={{
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {
          isLoading && (
            <Flex alignItems='center' justifyContent='center' h='230px'>
              <Spinner />
            </Flex>
          )}
        {
          (!isLoading && bookQuery?.data?.lenght === 0) ||
          (!bookQuery && (
            <Flex alignItems='center' justifyContent='center' h='230px'>
              <Text>Nenhum livro encontrado</Text>
            </Flex>))
        }
        {bookQuery &&
          bookQuery?.data.map((item) => (
          <BookCard key={`book_${item.id}`} {...item} />
          ))}
      </Flex>
    </Flex>
  )
}
