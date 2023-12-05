import { LoginScreen, RegisterScreen } from '../screen'

export const unauthRoutes = [
  {
    path: '/',
    element: <LoginScreen />
  },
  {
    path: '/sigup',
    element: <RegisterScreen />
  }

]
