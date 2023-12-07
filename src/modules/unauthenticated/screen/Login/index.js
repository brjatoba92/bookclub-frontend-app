import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const LoginScreen = () => {
  const navigate = useNavigate()
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('E-mail invalido').required('E-mail é obrigatorio'),
      password: Yup.string().min(6, 'senha deve ter ao menos 6 caracteres').required('Senha é obrigatorio')
    }),
    onSubmit: (data) => {
      console.log({ data })
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
                <Text.ScreenTitle mt='48px'>Login</Text.ScreenTitle>
                <Input
                  type='email'
                  id='email'
                  name='email'
                  value={values.email}
                  mt='24px'
                  placeholder='user@email.com'
                  onChange={handleChange}
                  error={errors.email}
                />
                <Input.Password
                  id='password'
                  name='password'
                  value={values.password}
                  mt='16px'
                  placeholder='*****'
                  onChange={handleChange}
                  error={errors.password}
                />
                <Flex
                  mt='8px'
                  w='100%'
                  alignItems='flex-end'
                  justifyContent='flex-end'
                >
                  <Link onClick={() => navigate('/forgot-pwd')}>
                    Forgot Password
                  </Link>
                </Flex>
                <Button onClick={handleSubmit} mb='12px' mt='24px'>Login</Button>
                  <Link.Action
                    onClick={() => navigate('/sigup')}
                    mt='8px'
                    text='No have account?'
                    actionText='Sigup Now'
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
