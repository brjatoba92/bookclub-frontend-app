import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, secondary, ...props }) => (
    <ChakraButton
        fontWeight='700'
        borderRadius='16px'
        h='56px'
        fontSize='16px'
        bg={secondary ? 'brand.greyDark' : 'brand.primary'}
        {...props}
        _hover={{
          bg: secondary ? 'brand.greyDark' : 'brand.primary'
        }}
        textColor={secondary ? 'brand.white' : 'brand.black'}
    >
        {children}
    </ChakraButton>
)
