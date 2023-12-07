import { useState } from 'react'
import { Text } from 'components/atoms/Text'
import { Input as ChakraInput, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export const Input = (props) => (
    <>
      <ChakraInput
        h='56px'
        fontSize='16px'
        focusBorderColor='brand.primary'
        {...props}
      />
      {props.error && <Text color='red'>{props.error}</Text>}
    </>
)

Input.Password = ({ value, onChange, id, name, ...props }) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <>
    <InputGroup
      display='flex'
      h='56px'
      alignItems='center'
      justifyContent='center'
      size='md'
      {...props}
    >
      <Input
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        focusBorderColor='brand.primary'
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='********'
      />
      <InputRightElement h='100%'>
        <Button bg='transparent' _hover={ { bg: 'transparent' } } size='sm' onClick={handleClick} h='100%' display='flex' alignItems='center' justifyContent='center'>
          {show ? <ViewOffIcon boxSize='18px' color='brand.primary'/> : <ViewIcon boxSize='18px' color='brand.primary'/>}
        </Button>
      </InputRightElement>
    </InputGroup>
    {props.error && <Text color='red'>{props.error}</Text>}
    </>
  )
}

Input.Password.displayName = 'InputPassword'
