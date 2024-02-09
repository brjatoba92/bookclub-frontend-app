import { useRef } from 'react'
import {
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Avatar,
  useToast,
  Icon
} from '@chakra-ui/react'
import { Text, Button } from 'components/atoms'
import { Input } from 'components/molecules'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useMutation } from 'react-query'
import { updateUserCall, updateUserAvatar } from 'services/api/requests'
import { setUser } from 'services/store/slices/user'
import { HiMiniPencilSquare } from 'react-icons/hi2'

export const UserModal = ({ onClose }) => {
  const inputFileRef = useRef()
  const toast = useToast()
  const userStore = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const mutation = useMutation((data) => updateUserCall(data), {
    onError: (error) => {
      toast({
        title: 'Falha ao atualizar usuario.',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    },
    onSuccess: (data) => {
      toast({
        title: 'Usuario atualizado com sucesso.',
        status: 'success',
        duration: 6000,
        isClosable: true
      })
      dispatch(
        setUser({
          user: data?.data?.user
        })
      )
    }
  })

  const mutationAvatar = useMutation((data) => updateUserAvatar(data), {
    onError: (error) => {
      toast({
        title: 'Falha ao atualizar avatar do usuario.',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    },
    onSuccess: (data) => {
      toast({
        title: 'Avatar do usuario atualizado com sucesso.',
        status: 'success',
        duration: 6000,
        isClosable: true
      })
      dispatch(
        setUser({
          user: data?.data
        })
      )
    }
  })

  const { values, handleChange, errors, handleSubmit } = useFormik({
    initialValues: {
      name: userStore?.user?.name,
      email: userStore?.user?.email
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'O nome deve ter ao menos 3 caracteres.')
        .required('Nome é obrigatorio.'),
      email: Yup.string()
        .email('E-mail invalido')
        .required('E-mail é obrigatorio.')
    }),
    onSubmit: (data) => {
      mutation.mutate(data)
    }
  })

  const onChangeImage = async (event) => {
    const file = event?.target?.files[0]
    const type = file?.type

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const base64 = reader.result
      mutationAvatar.mutate({
        mime: type,
        base64
      })
    }
  }

  return (
    <Drawer size={'sm'} isOpen={true} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text.ScreenTitle>Data User</Text.ScreenTitle>
        </DrawerHeader>

        <DrawerBody>
          <Flex w="100%" alignItems="center" justifyContent="center">
            <input
              ref={inputFileRef}
              style={{ display: 'none' }}
              onChange={onChangeImage}
              type="file"
              accept="image/*"
            />
            <Avatar
              cursor="pointer"
              w={['100px']}
              h={['100px']}
              name={userStore?.user?.name}
              src={userStore?.user?.avatar_url}
              borderWidth="4px"
              borderColor="brand.primary"
              bg="brand.grayLight"
              onClick={() => inputFileRef?.current?.click()}
            />
            <Flex
              margin="-32px"
              position="relative"
              w="32px"
              h="32px"
              borderRadius="16px"
              bg="brand.primary"
              top="36px"
              alignItems="center"
              justifyContent="center"
              onClick={() => inputFileRef?.current?.click()}
              cursor="pointer"
            >
              <Icon
                color="brand.black"
                boxSize="18px"
                as={HiMiniPencilSquare}
              />
            </Flex>
          </Flex>
          <Input
            id="name"
            name="name"
            value={values.name}
            mt="24px"
            placeholder="Name full"
            onChange={handleChange}
            error={errors.name}
          />
          <Input
            id="email"
            name="email"
            value={values.email}
            mt="16px"
            placeholder="E-mail"
            onChange={handleChange}
            error={errors.email}
          />
          <Button
            onClick={handleSubmit}
            isLoading={mutation.isLoading || mutationAvatar.isLoading}
            mt={['64px']}
            w="100%"
          >
            Update
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}