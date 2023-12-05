import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'

export const RegisterScreen = () => {
  return (
        <Flex flexDir={'row'} w='100vw' h='100vh'>
            <Flex
              alignItems={['center', 'flex-start']}
              justifyContent={['center']}
              padding={['24px', '48px', '80px', '112px']}
              flexDir='column'
              w={['100%', '100%', '100%', '40%']}
              h='100%'
            >
              <Flex flexDir='column' w={['100%', '100%', '100%', '416px']}>
                <Image h={'48px'} w={'160px'} src='/img/logo.svg' alt='BookClub Logo' />
                <Text.ScreenTitle mt='48px'>Register</Text.ScreenTitle>
                <Input mt='24px' placeholder='Name full' />
                <Input mt='16px' placeholder='E-mail' />
                <Input.Password mt='16px' placeholder='Password'/>
                <Input.Password mt='16px' placeholder='Confirm password'/>
                <Button mt='24px'>Sigup</Button>
                  <Link.Action
                    mt='48px'
                    text='Have account?'
                    actionText='Make login here'
                  />
              </Flex>
            </Flex>
            <Flex
              w={['0%', '0%', '0%', '60%']}
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
