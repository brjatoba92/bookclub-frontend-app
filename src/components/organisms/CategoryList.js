import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Flex } from '@chakra-ui/react'
import { CategoryCard, BookCard } from 'components/molecules'
import { Text, Loader, EmptyMessage } from 'components/atoms'
import { getBooksByCategory, getCategories } from 'services/api/requests'

export const CategoryList = ({ title, categoryId }) => {
  const [selected, setSelected] = useState(categoryId)

  const { data } = useQuery('categories', getCategories)
  const {
    data: bookQuery,
    refetch,
    isLoading
  } = useQuery(
    [`booksById-${selected}`, selected],
    () => getBooksByCategory(selected),
    {
      enabled: !!selected,
      refetchOnWindowFocus: true,
      refetchOnMount: true
    }
  )

  useEffect(() => {
    if (!selected && data?.data) {
      setSelected(data?.data[0].id)
    }
  }, [data])

  useEffect(() => {
    if (categoryId) {
      setSelected(categoryId)
      refetch()
    }
  }, [categoryId])

  return (
    <Flex
      flexDir="column"
      mt={['24px', '48px']}
      paddingX={['24px', '48px', '80px', '112px']}
      overflowX={['scroll', 'auto']}
      h="520px"
      css={{
        '::-webkit-scrollbar': {
          display: 'none'
        }
      }}
    >
      <Text.ScreenTitle>{title || 'Categories'}</Text.ScreenTitle>
      {!categoryId && (
        <Flex
          mt="12px"
          flexDir="row"
          overflowX={['scroll', 'auto']}
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          {data?.data &&
            data?.data.map((item) => (
              <CategoryCard
                key={`book_${item.id}`}
                selected={selected === item.id}
                onClick={() => setSelected(item.id)}
                {...item}
              />
            ))}
        </Flex>
      )}
      <Flex
        mt="12px"
        flexDir="row"
        pb="48px"
        cursor="pointer"
        overflowX={['scroll', 'auto']}
        css={{
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {isLoading && <Loader />}
        {!isLoading && bookQuery && bookQuery?.data?.lenght === 0 && (
          <EmptyMessage>Nenhum livro encontrado</EmptyMessage>
        )}
        {bookQuery &&
          bookQuery?.data.map((item) => (
            <BookCard key={`book_${item.id}`} {...item} />
          ))}
      </Flex>
    </Flex>
  )
}
