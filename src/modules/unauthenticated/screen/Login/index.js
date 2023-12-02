import { Flex, Image, Button } from '@chakra-ui/react'
import { Text, Input, Link } from 'components'

export const LoginScreen = () => {
  return (
        <Flex flexDir={'row'} w='100vw' h='100vh'>
            <Flex alignItems='flex-start' justifyContent='center' paddingLeft='112px' flexDir={'column'} w={'40%'} h={'100%'}>
                <Image
                    h={'48px'}
                    w={'160px'}
                    src='/img/logo.svg'
                    alt='BookClub Logo'
                />
                <Flex flexDir='column' w='416px'>
                    <Text.ScreenTitle mt='48px'>Login</Text.ScreenTitle>
                    <Input mt='24px' placeholder='user@email.com' />
                    <Input.Password mt='16px' placeholder='*****'/>
                    <Flex mt='8px' w='100%' alignItems='flex-end' justifyContent='flex-end'>
                      <Link>Forgot Password</Link>
                    </Flex>
                    <Button mt='24px'>Signin</Button>
                    <Link mt='48px'>No have account? Sigup now </Link>
                </Flex>
            </Flex>
            <Flex
              w={'60%'}
              h={'100vh'}
              bgImage="url('/img/auth-background.svg')"
              bgSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
              borderTopLeftRadius='32px'
              borderBottomLeftRadius='32px'
            />
        </Flex>
  )
}
