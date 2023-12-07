import { Flex, Image, useToast } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { registerCall } from 'services/api/requests'

export const RegisterScreen = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const mutation = useMutation(newUser => registerCall(newUser), {
    onError: (error) => {
      toast({
        title: 'Falha ao criar a conta.',
        description: error?.response?.data?.error || 'Por favor, tente novamente',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    },
    onSuccess: () => {
      toast({
        title: 'Conta criada.',
        status: 'success',
        duration: 6000,
        isClosable: true
      })
      navigate('/')
    }
  })
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'O nome deve ter ao menos 3 caracteres.').required('Nome é obrigatorio.'),
      email: Yup.string().email('E-mail invalido').required('E-mail é obrigatorio.'),
      password: Yup.string().min(6, 'senha deve ter ao menos 6 caracteres.').required('Senha é obrigatorio.'),
      confirmPassword: Yup.string(6, 'Confirmar a senha deve ter ao menos 6 caracteres.').oneOf([Yup.ref('password'), null], 'Senhas não são iguais.')
    }),
    onSubmit: (data) => {
      mutation.mutate(data)
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
                <Text.ScreenTitle mt='48px'>Register</Text.ScreenTitle>
                <Input
                  id='name'
                  name='name'
                  value={values.name}
                  mt='24px'
                  placeholder='Name full'
                  onChange={handleChange}
                  error={errors.name}
                />
                <Input
                  id='email'
                  name='email'
                  value={values.email}
                  mt='16px'
                  placeholder='E-mail'
                  onChange={handleChange}
                  error={errors.email}
                />
                <Input.Password
                  id='password'
                  name='password'
                  value={values.password}
                  mt='16px'
                  placeholder='Password'
                  onChange={handleChange}
                  error={errors.password}
                />
                <Input.Password
                  id='confirmPassword'
                  name='confirmPassword'
                  value={values.confirmPassword}
                  mt='16px'
                  placeholder='Confirm password'
                  onChange={handleChange}
                  error={errors.confirmPassword}
                />
                <Button
                  isLoading={mutation.isLoading}
                  onClick={handleSubmit}
                  mb='8px'
                  mt='24px'
                >
                  Sigup
                </Button>
                  <Link.Action
                    onClick={() => navigate('/')}
                    mt='8px'
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
