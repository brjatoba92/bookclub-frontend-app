import { Flex, useToast } from '@chakra-ui/react'
import { NavBar, Text, Button, CategoryList } from 'components'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'
import { getBookDetail, addBookToFavorites, deleteBookFromFavorites } from 'services/api/requests'

export const BookDetailScreen = () => {
  const toast = useToast()
  const { id } = useParams()
  const { data, refetch, isLoading } = useQuery(
    ['bookDetail', id],
    () => getBookDetail(id),
    {
      enabled: !!id
    }
  )
  const addFavoriteMutation = useMutation(data => addBookToFavorites(data), {
    onError: (error) => {
      toast({
        title: 'Falha em adicionar livro aos favoritos.',
        description: error?.response?.data?.error || 'Por favor, tente novamente',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
      refetch()
    },
    onSuccess: () => {
      toast({
        title: 'Livro adicionado aos favoritos com sucesso.',
        status: 'success',
        duration: 6000,
        isClosable: true
      })
      refetch()
    }
  })

  const deleteFavoriteMutation = useMutation(data => deleteBookFromFavorites(data), {
    onError: (error) => {
      toast({
        title: 'Falha ao remover livro dos favoritos.',
        description: error?.response?.data?.error || 'Por favor, tente novamente',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
      refetch()
    },
    onSuccess: () => {
      toast({
        title: 'Livro deletado dos favoritos com sucesso.',
        status: 'success',
        duration: 6000,
        isClosable: true
      })
      refetch()
    }
  })

  const handleButtonClick = () => {
    if (data?.data?.favorite) {
      deleteFavoriteMutation.mutate(data?.data?.favorite?.id)
    } else {
      addFavoriteMutation.mutate({
        book_id: id
      })
    }
  }

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
          <Button
            isLoading={
              isLoading ||
              addFavoriteMutation.isLoading ||
              deleteFavoriteMutation.isLoading
            }
            secondary={data?.data?.favorite}
            onClick={() => handleButtonClick()}
          >
            {data?.data?.favorite ? 'Remove From Favorites' : 'Add to Favorites'}
          </Button>
        </Flex>
      </Flex>
      <CategoryList title='Outhers Books' categoryId={data?.data?.book?.category?.id}></CategoryList>
    </Flex>
  )
}
