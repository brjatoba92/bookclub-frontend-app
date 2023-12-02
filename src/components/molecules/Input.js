import { useState } from 'react'
import { Input as ChakraInput, InputGroup, InputRightElement, Button } from '@chakra-ui/react'

export const Input = (props) => (
    <ChakraInput focusBorderColor='brand.primary' {...props}/>
)

Input.Password = (props) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <InputGroup size='md' {...props}>
      <Input
        focusBorderColor='brand.primary'
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

Input.Password.displayName = 'InputPassword'
