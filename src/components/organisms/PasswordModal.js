import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useToast
} from '@chakra-ui/react'
import { Text, Button } from 'components/atoms'
import { Input } from 'components/molecules'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useMutation } from 'react-query'
import { updateUserCall } from 'services/api/requests'

export const PasswordModal = ({ onClose }) => {
  const toast = useToast()
  const mutation = useMutation((data) => updateUserCall(data), {
    onError: (error) => {
      toast({
        title: 'Falha ao atualizar senha.',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    },
    onSuccess: (data) => {
      toast({
        title: 'Senha atualizada com sucesso.',
        status: 'success',
        duration: 6000,
        isClosable: true
      })
    }
  })

  const { values, handleChange, errors, handleSubmit } = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, 'senha deve ter ao menos 6 caracteres.')
        .required('Senha é obrigatorio.'),
      confirmPassword: Yup.string(
        6,
        'Confirmar a senha deve ter ao menos 6 caracteres.'
      ).oneOf([Yup.ref('password'), null], 'Senhas não são iguais.')
    }),
    onSubmit: (data) => {
      mutation.mutate(data)
    }
  })

  return (
    <Drawer size={'sm'} isOpen={true} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text.ScreenTitle>Change Password</Text.ScreenTitle>
        </DrawerHeader>

        <DrawerBody>
          <Input.Password
            id="password"
            name="password"
            value={values.password}
            mt="16px"
            placeholder="Password"
            onChange={handleChange}
            error={errors.password}
          />
          <Input.Password
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            mt="16px"
            placeholder="Confirm password"
            onChange={handleChange}
            error={errors.confirmPassword}
          />
          <Button
            onClick={handleSubmit}
            isLoading={mutation.isLoading}
            mt={['64px']}
            w="100%"
          >
            Save
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
