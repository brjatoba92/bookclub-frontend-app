import { Flex } from '@chakra-ui/react'
import { NavBar, Text, BookList } from 'components'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getAuthorDetail } from 'services/api/requests'

export const AuthorDetailScreen = () => {
  const { id } = useParams()
  const { data, isLoading } = useQuery(
    ['authorDetail', id],
    () => getAuthorDetail(id),
    {
      enabled: !!id
    }
  )

  return (
    <Flex flexDir="column">
      <NavBar />
      <Flex
        w="100%"
        maxW="100vw"
        paddingX={['24px', '48px', '80px', '112px']}
        mt={['24px', '48px']}
        flexDir={['column', 'row']}
        alignItems={['center', 'flex-start']}
        justifyContent={['center', 'flex-start']}
      >
        <Flex
          w={['170px', '290px']}
          h={['256px', '358px']}
          bgImage={`url(${data?.data?.avatar_url})`}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          borderRadius="12px"
        />
        <Flex
          w={['100%', '70%']}
          mx={['0px', '48px']}
          flexDir="column"
          mt={['24px', '0px']}
        >
          <Text.ScreenTitle fontSize="24px">
            {data?.data?.name}
          </Text.ScreenTitle>

          <Flex flexDir="column" color="brand.grayDark">
            <Text.ScreenTitle mt="24px">About the Author</Text.ScreenTitle>
            <Text maxWidth={['80%']} fontSize="12px" mt="8px">
              {data?.data?.bio}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <BookList
        title='Author books:'
        data={data?.data.book}
        isLoading={isLoading}
      />
    </Flex>
  )
}
