import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const ForgotPasswordScreen = () => {
  const navigate = useNavigate()
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('E-mail invalido').required('E-mail é obrigatorio.')
    }),
    onSubmit: (data) => {
      console.log({ data })
      navigate('/reset-pwd')
    }
  })
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
                <Text.ScreenTitle mt='48px'>Forgot password</Text.ScreenTitle>
                <Text mt='24px' >Digite abaixo seu e-mail que enviaremos um código de recuperação de senha:</Text>
                <Input
                  type='email'
                  id='email'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                  mt='24px'
                  placeholder='E-mail'
                />
                <Button mt='24px' onClick={handleSubmit} >Next</Button>
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
