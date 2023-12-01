import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles'
import { LoginScreen } from 'modules/unauthenticated/screen'

function App () {
  return (
    <ChakraProvider theme={theme}>
      <LoginScreen></LoginScreen>
    </ChakraProvider>
  )
}

export default App
