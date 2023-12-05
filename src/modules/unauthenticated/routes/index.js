import { LoginScreen, RegisterScreen, ForgotPasswordScreen } from '../screen'

export const unauthRoutes = [
  {
    path: '/',
    element: <LoginScreen />
  },
  {
    path: '/sigup',
    element: <RegisterScreen />
  },
  {
    path: '/forgotpwd',
    element: <ForgotPasswordScreen />
  }

]
