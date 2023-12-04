import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, ...props }) => (
    <ChakraButton
        fontWeight='700'
        borderRadius='16px'
        h='56px'
        fontSize='16px'
        bg='brand.primary'
        color='brand.purple'
        {...props}
        _hover={{
          bg: 'brand.primary'
        }}
    >
        {children}
    </ChakraButton>
)
