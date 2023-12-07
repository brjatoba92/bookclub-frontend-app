import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Button, Link } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const ResetPasswordScreen = () => {
  const navigate = useNavigate()
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      token: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      token: Yup.string().length(4, 'O token deve ter 4 caracteres.').required('Token é obrigatorio.'),
      password: Yup.string().min(6, 'senha deve ter ao menos 6 caracteres.').required('Senha é obrigatorio.'),
      confirmPassword: Yup.string(6, 'Confirmar a senha deve ter ao menos 6 caracteres.').oneOf([Yup.ref('password'), null], 'Senhas não são iguais.')
    }),
    onSubmit: (data) => {
      navigate('/login')
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
                <Text.ScreenTitle mt='48px'>New password</Text.ScreenTitle>
                <Text mt='24px' >Digite o código enviado e uma nova senha  nos campos abaixo:</Text>
                <Input
                  id='token'
                  name='token'
                  value={values.token}
                  onChange={handleChange}
                  error={errors.token}
                  mt='16px'
                  placeholder='Ex: 0000'
                />
                <Input.Password
                  id='password'
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password}
                  mt='16px'
                  placeholder='New password'
                />
                <Input.Password
                  id='confirmPassword'
                  name='confirmPassword'
                  value={values.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                  mt='16px'
                  placeholder='Confirm new password'
                />
                <Button mb='12px' mt='24px' onClick={handleSubmit}>Save</Button>
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
