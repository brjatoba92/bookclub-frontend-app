import { Avatar, Menu, MenuButton, MenuList, Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Text, MenuItem } from 'components/atoms'
import { BsBookmarkHeart, BsPersonCheck } from 'react-icons/bs'
import { RiLockPasswordLine } from 'react-icons/ri'
import { IoDocumentTextOutline, IoDocumentOutline } from 'react-icons/io5'
import { MdLogout } from 'react-icons/md'

export const UserMenu = () => {
  const userStore = useSelector((state) => state.user)
  const navigate = useNavigate()
  console.log({ userStore })
  const menuOptions = [
    {
      id: 0,
      icon: BsBookmarkHeart,
      text: 'Favorites',
      divider: false,
      onClick: () => navigate('/favorites')
    },
    {
      id: 1,
      icon: BsPersonCheck,
      text: 'User data',
      divider: false,
      onClick: () => navigate('/home')
    },
    {
      id: 2,
      icon: RiLockPasswordLine,
      text: 'Change password',
      divider: true,
      onClick: () => navigate('/home')
    },
    {
      id: 3,
      icon: IoDocumentTextOutline,
      text: 'Terms of use',
      divider: false,
      onClick: () => navigate('/home')
    },
    {
      id: 4,
      icon: IoDocumentOutline,
      text: 'Privacy Policy',
      divider: true,
      onClick: () => navigate('/home')
    },
    {
      id: 5,
      icon: MdLogout,
      text: 'Logout',
      divider: false,
      onClick: () => navigate('/home')
    }
  ]
  return (
    <Menu>
      <MenuButton>
        <Flex alignItems='center' justifyContent='center' flexDir='row'>
          <Avatar
            w={['36px', '48px']}
            h={['36px', '48px']}
            name={userStore?.user?.name}
            src={userStore?.user?.avatar_url}
            borderWidth='2px'
            borderColor='brand.primary'
            bg='brand.greyDark'
            mr={['6px', '12px']}
          />
          <Flex display={['none', 'flex']}>
            <Text maxLength='40px'>
              {userStore?.user?.name}
            </Text>
          </Flex>
        </Flex>
      </MenuButton>
      <MenuList>
        {
          menuOptions.map((item) =>
            <MenuItem
              key={`menu_item_${item.id}`}
              id={item.id}
              icon={item.icon}
              text={item.text}
              divider={item.divider}
              onClick={() => item.onClick()}
            />
          )
        }
      </MenuList>
    </Menu>
  )
}
