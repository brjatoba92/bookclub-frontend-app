import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Button, Link } from 'components'
// import { useNavigate } from 'react-router-dom'

export const ResetPasswordScreen = () => {
  // const navigate = useNavigate()
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
                <Text.ScreenTitle mt='48px'>New password</Text.ScreenTitle>
                <Text mt='24px' >Digite o código enviado e uma nova senha  nos campos abaixo:</Text>
                <Input mt='16px' placeholder='Ex: 0000' />
                <Input.Password mt='16px' placeholder='New password' />
                <Input.Password mt='16px' placeholder='Confirm new password' />
                <Button mb='12px' mt='24px'>Save</Button>
                <Link.Action
                    // onClick={() => navigate('/sigup')}
                    mt='8px'
                    text='Without code'
                    actionText='Click here to code re-send'
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
