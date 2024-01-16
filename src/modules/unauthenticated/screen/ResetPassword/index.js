import { Flex, Image, useToast } from '@chakra-ui/react'
import { Text, Input, Button, Link } from 'components'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { resetPasswordCall } from 'services/api/requests'

export const ResetPasswordScreen = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const [searchParams] = useSearchParams()

  const mutation = useMutation((data) => resetPasswordCall(data), {
    onError: (error) => { // mostrando error
      toast({
        title: 'Request failed.',
        description: error?.response?.data?.error || 'Please try again',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    },
    onSuccess: () => {
      toast({
        title: 'Password changed successfully!',
        status: 'success',
        duration: 6000,
        isClosable: true
      })
      navigate('/')
    }
  })

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      token: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      token: Yup.string().length(6, 'The token must be 6 characters long.').required('Token is mandatory.'),
      password: Yup.string().min(6, 'The password must have at least 6 characters.').required('Password is mandatory.'),
      confirmPassword: Yup.string(6, 'Confirm password must have at least 6 characters.').oneOf([Yup.ref('password'), null], 'Passwords are not the same.')
    }),
    onSubmit: (data) => {
      mutation.mutate({
        email: searchParams.get('email'),
        token: data.token,
        password: data.password
      })
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
                <Text mt='24px' >Enter the code sent and a new password in the fields below:</Text>
                <Input
                  id='token'
                  name='token'
                  value={values.token}
                  onChange={handleChange}
                  error={errors.token}
                  mt='16px'
                  placeholder='Ex: 000000'
                  maxLenght={6}
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
                <Button isLoading={mutation.isLoading} mb='12px' mt='24px' onClick={handleSubmit}>Save</Button>
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
