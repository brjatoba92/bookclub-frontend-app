import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles'
// import { LoginScreen } from 'modules/unauthenticated/screen'
import { RouterProvider } from 'react-router-dom'
import { router } from 'router'

function App () {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
