import { Flex } from '@chakra-ui/react'
import { NavBar, Text, Button } from 'components'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getBookDetail } from 'services/api/requests'

export const BookDetailScreen = () => {
  const { id } = useParams()
  const { data } = useQuery(
    ['bookDetail', id],
    () => getBookDetail(id),
    {
      enabled: !!id
    }
  )
  console.log({ data })
  return (
    <Flex flexDir='column'>
      <NavBar/>
      <Flex
        w='100%'
        paddingX={['24px', '48px', '80px', '112px']}
        mt={['24px', '48px']}
        flexDir='row'
      >
        <Flex
          bgImage={`url(${data?.data?.book?.cover_url})`}
          bgSize='cover'
          bgPosition='center'
          bgRepeat='no-repeat'
          borderRadius='12px'
          w={['238px']}
          h={['358px']}
        />
        <Flex w='70%' mx='48px' flexDir='column'>
          <Text.ScreenTitle fontSize='24px'>{data?.data?.book?.name}</Text.ScreenTitle>
          <Text fontSize='16px' mt='8px'>{data?.data?.book?.author?.name}</Text>
          <Flex flexDir='column' color='brand.grayDark'>
            <Text.ScreenTitle mt='24px'>About</Text.ScreenTitle>
            <Flex mt='8px' w='100%' flexDir='row' justifyContent='space-between'>
              <Text mt='8px' fontSize='14px'>Category: {data?.data?.book?.category?.name}</Text>
              <Text fontSize='14px'>Pages: {data?.data?.book?.pages}</Text>
              <Text fontSize='14px'>Publication Year: {new Date(data?.data?.book?.release_date).getFullYear()}</Text>
            </Flex>
            <Text.ScreenTitle mt='16px'> Synopsis: </Text.ScreenTitle>
            <Text fontSize='12px' mt='8px'>{data?.data?.book?.synopsis}</Text>
          </Flex>
        </Flex>
        <Flex>
          <Button>Add to Favorites</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
