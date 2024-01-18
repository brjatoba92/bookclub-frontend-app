import { Avatar, Menu, MenuButton, MenuItem, MenuList, Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Text } from 'components/atoms'

export const UserMenu = () => {
  const userStore = useSelector((state) => state.user)
  console.log({ userStore })
  return (
    <Menu>
      <MenuButton>
        <Flex alignItems='center' justifyContent='center' flexDir='row'>
          <Avatar
            size='md'
            name={userStore?.user?.name}
            src={userStore?.user?.avatar_url}
            borderWidth='2px'
            borderColor='brand.primary'
            bg='brand.greyDark'
            mr='12px'
          />
          <Text maxLength='40px'>
            {userStore?.user?.name}
          </Text>
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem>Favorites</MenuItem>
        <MenuItem>Data User</MenuItem>
        <MenuItem></MenuItem>
      </MenuList>
    </Menu>
  )
}
